import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import cardInfoStyle from './cardInfo.module.scss';
const CardInfo = (props) => {

    const teamName = (teams, team) => {
        //var data and accessing all lists of teams and find 
        //on each iteration we check the team
        let data = teams.find((item)=> {
            //if item.id is equal to team.id
            return item.teamId === team
        });

        if(data){
            return data.name
        }

    }

    const formatDate = (date) => {
        return moment(date).format('MM-DD-YYYY')
    }
    
    return (
        <div className={cardInfoStyle.cardInfo}>
        <span className={cardInfoStyle.teamName}>
           {teamName(props.teams, props.team)}
        </span>
        <span className={cardInfoStyle.date}>
            <FontAwesome name="clock"/> 
            {formatDate(props.date)}
        </span>
        </div>
    );
};

export default CardInfo;