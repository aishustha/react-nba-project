import React from 'react';
import { Link } from 'react-router-dom';
import buttonStyle from './button.module.scss';

const buttons = (props) => {

    let template = null;

    switch(props.type){
        case 'loadmore':
            template = (
                <div className={buttonStyle.purple_btn}
                     onClick={props.loadMore}
                >
                    {props.cta}

                </div>
            )
            break;
//linkTo is type
        case 'linkTo':
            template = (
                //passing props in linkTo
               <Link to={props.linkTo} className={buttonStyle.purple_btn}>
                 {props.cta}
               </Link>
            )

            break;

        default:
            template = null
    }

    return template;  
};

export default buttons;