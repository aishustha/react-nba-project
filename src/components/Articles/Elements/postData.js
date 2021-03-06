import React from 'react';
import articlesStyle from '../articles.module.scss';
import moment from 'moment';

const formatDate = (date) => {
    return moment(date).format('MM-DD-YYYY');
}

const postData = (props) => (
    <div className={articlesStyle.articlePostData}>
        <div>
            Date:
            <span>{formatDate(props.data.date)}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
)

export default postData;