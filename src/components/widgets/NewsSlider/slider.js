import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper } from '../../../firebase';
import SliderTemplates from './slider_templates';

//wee are using firebase
// import { URL } from '../../../config';
// import axios from 'axios';

class NewsSlider extends Component {

    //initial empty news
    state = {
        news: []
    }

    componentWillMount() {

        //limittofirst- get 3 data from first nad we use running once and then promise which contains snapshots which contains all data
        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot) => {
            const news = firebaseLooper(snapshot)
            this.setState({
                news
            })
        })


        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then( response => {
        //     // console.log(response.data)
        //     this.setState({
        //         news:response.data
        //     })
        // })
    }

    render() {
        console.log(this.state)
        return (
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }
}

export default NewsSlider;