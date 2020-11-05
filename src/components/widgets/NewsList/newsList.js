import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { firebaseTeams, firebaseArticles, firebaseLooper } from '../../../firebase';
// import axios from 'axios';
// import { URL } from '../../../config';
import newslistStyle from './newsList.module.scss';
import Button from '../Buttons/buttons';
import CardInfo from '../../widgets/CardInfo/cardInfo';


class NewsList extends Component {

    state = {
        items:[],
        teams: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount(){
        //trigger the request
        this.request(this.state.start, this.state.end)
    }

    //
    request = (start, end) => {

        //less than one
        if(this.state.teams.length < 1){
            firebaseTeams.once('value')
            .then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })


            // axios.get(`${URL}/teams`)
            // .then(response => {
            //     this.setState({
            //         teams: response.data
            //     })
            // })
        }


        
        firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
        .then((snapshot) => {
            const articles = firebaseLooper(snapshot);
            this.setState({ 
                items:[...this.state.items,...articles],
                start,
                end
            })
        
        })

        .catch(e => {
            console.log(e)
        })
        //  //request
        //  axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        //  //catch promise
        //  .then( response => {
        //      this.setState({
        //          //loadmore added other data, we have items already keep them and add other data 
        //          items:[...this.state.items, ...response.data],
        //          start,
        //          end
        //      })
        //  })
    }

    //request - start gonaa be actual end i.e starting from the end article no.3
    loadMore = () => {
        let end = this.state.end + this.state.amount; //end + 3
        this.request(this.state.end + 1, end) //staring from end,

        //go to reqest then, this.state.end =3 if we click load more
        //end =6
        //if we click loadmore 3 news is added to btm
    }

    renderNews = (type) => {
        let template = null; //variable to host template

        switch(type) {
            case('card'):
                //catch the info from items and return the templates
                //item i.e one article and i i.e no. of iteration
                template= this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:newslistStyle.newsList_wrapper,
                            enterActive:newslistStyle.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={newslistStyle.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo 
                                    teams={this.state.teams}
                                    team={item.team} //team id
                                    date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break;

                case('cardMain'):
                    template = this.state.items.map((item, i) => (
                        <CSSTransition
                            classNames={{
                                enter:newslistStyle.newsList_wrapper,
                                enterActive:newslistStyle.newsList_wrapper_enter
                            }}
                            timeout={500}
                            key={i}
                        >
                            <Link to={`/articles/${item.id}`}>
                                <div className={newslistStyle.flex_wrapper}>
                                    <div className={newslistStyle.left}
                                        style={{
                                            background:`url('/images/articles/${item.image}')`
                                        }}>
                                        <div></div>
                                    </div>

                                    <div className={newslistStyle.right}>
                                        <CardInfo 
                                            teams={this.state.teams}
                                            team={item.team} //team id
                                            date={item.date}
                                        />
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </Link>

                        </CSSTransition>
                    ))
                    break;

                default:
                template = null;
        }

        return template; 
    }

    render() {
        return (
            <div>
            <TransitionGroup
                component="div"
                className="list"

            >
                 {/*rendering type of card as we pass as prop  */}
                 { this.renderNews(this.props.type) }
            </TransitionGroup>
            <Button
                type="loadmore"
                loadMore={()=>this.loadMore()}
                cta="Load More News"

            />
                {/* call to action -cta */}
                {/* <div onClick={() => this.loadMore()}>
                    Load More
                </div> */}
            </div>
        )
    }                                         
}

export default NewsList;