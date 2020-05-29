import React from 'react';
import footerStyle from './footer.module.scss';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';

const footer = () => (
    <div className={footerStyle.footer}>
        <Link to="/" className={footerStyle.logo}>
            <img alt="nba logo" src="/images/nba_logo.png"></img>
        </Link>
        <div className={footerStyle.right}>
            &copy; NBA { CURRENT_YEAR }. All rights reserved.
        </div>
    </div>
)

export default footer;