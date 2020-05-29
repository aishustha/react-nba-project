import React from 'react';
import videosListStyle from './videos.module.scss';
import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';

const VideosListTemplate = (props) => {
   return props.data.map((item, i) => {
       return (
           <Link to={`/videos/${item.id}`} key={i}>
                <div className={videosListStyle.videoListItem_wrapper}>
                    <div className={videosListStyle.left} 
                    style={{
                    background:`url(/images/videos/${item.image})`
                    }}
                    >
                       <div></div>
                    </div>
                    <div className={videosListStyle.right}>
                      <CardInfo teams={props.teams} team={item.team} date={item.date}/>
                      <h2>{item.title}</h2>
                   </div>
                </div>
            </Link>
        )
       
    })
}

export default VideosListTemplate;
