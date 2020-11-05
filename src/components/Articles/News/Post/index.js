import React, { Component } from 'react';
import { firebaseDB, firebaseLooper, firebaseTeams } from '../../../../firebase';
// import axios from 'axios';
// import {URL} from '../../../../config'; 

import articlesStyle from '../../articles.module.scss';
import Header from './header';


class NewsArticles extends Component {

    state = {
        article: [],
        team: []
    }

    componentWillMount(){

        //fetch articles and match id and need to pass with reference for we used firebasedb

        //templates-strings
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
        .then((snapshot)=>{
            let article = snapshot.val(); //particular articles gonaa store inside article variable 
        
            firebaseTeams.orderByChild("teamId").equalTo(article.team).once('value') //order everything by teamid inside the teams db and try to match with particluar id articles.team
            .then((snapshot) => {
                const team = firebaseLooper(snapshot); //we pass snapshot we get from the team
                this.setState({
                    article,
                    team
                })
            })
        })

        //we fetched the article and once we get the articles we stored this inside variables and get teams of particular articles.

        // //request to articles/4 so, we use id and grab from url using this.props.match.params,id
        // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        // .then( response => {
        //     //fetching info of teams
        //     let article = response.data[0];
        //     //getting info of team then update the state
        //     axios.get(`${URL}/teams?id=${article.team}`)
        //     .then(response => {
        //         this.setState({
        //             article,
        //             team: response.data
        //         })
        //     })
        // })
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
