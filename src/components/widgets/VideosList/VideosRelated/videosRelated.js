import React from 'react';
import videosListStyle from '../videos.module.scss';
import VideosListTemplate from '../videosListTemplate';

const videosRelated = (props) => (
    <div className={videosListStyle.relatedWrapper}>
           <VideosListTemplate
                data={props.data}
                teams={props.teams}
           />
    </div>
)

export default videosRelated;