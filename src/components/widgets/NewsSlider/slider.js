import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';
import { URL } from '../../../config';

class NewsSlider extends Component {

    //initial empty news
    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
            // console.log(response.data)
            this.setState({
                news:response.data
            })
        })
    }

    render() {
        //console.log(this.state.news)
        return (
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }
}

export default NewsSlider;