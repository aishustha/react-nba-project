import React from 'react';
import FontAwesome from 'react-fontawesome';
import cardInfoStyle from './cardInfo.module.scss';
const CardInfo = (props) => {

    const teamName = (teams, team) => {
        //var data and accessing all lists of teams and find 
        //on each iteration we check the team
        let data = teams.find((item)=> {
            //if item.id is equal to team.id
            return item.id === team
        });

        if(data){
            return data.name
        }

    }
    return (
        <div className={cardInfoStyle.cardInfo}>
        <span className={cardInfoStyle.teamName}>
           {teamName(props.teams, props.team)}
        </span>
        <span className={cardInfoStyle.date}>
            <FontAwesome name="clock"/> {props.date}
        </span>
        </div>
    );
};

export default CardInfo;