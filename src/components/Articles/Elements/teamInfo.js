import React from 'react';

import articlesStyle from '../articles.module.scss';
const teamInfo = (props) => {
    return (
        <div className={articlesStyle.articleTeamHeader}>
            <div className={articlesStyle.left} 
                style={{
                    background:`url('/images/teams/${props.team.logo}')`
                }}
            >

            </div>
            <div className={articlesStyle.right}>
                <div>
                    <span>
                        {props.team.city} {props.team.name}
                    </span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default teamInfo;