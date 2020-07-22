import React from 'react';
import articlesStyle from '../articles.module.scss';

const postData = (props) => (
    <div className={articlesStyle.articlePostData}>
        <div>
            Date:
            <span>{props.data.date}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
)

export default postData;