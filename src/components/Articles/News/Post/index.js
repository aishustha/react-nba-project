import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../config'; 
import articlesStyle from '../../articles.module.scss';
import Header from './header';


class NewsArticles extends Component {

    state = {
        article: [],
        team: []
    }

    componentWillMount(){
        //request to articles/4 so, we use id and grab from url using this.props.match.params,id
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then( response => {
            //fetching info of teams
            let article = response.data[0];
            //getting info of team then update the state
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response => {
                this.setState({
                    article,
                    team: response.data
                })
            })
        })
    }

    render() {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div className={articlesStyle.articleWrapper}>
                <Header 
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className={articlesStyle.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={articlesStyle.articleImage}
                         style={{
                             background:`url('/images/articles/${article.image}')`
                         }}    
                    >

                    </div>
                    <div className={articlesStyle.articleText}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticles;
