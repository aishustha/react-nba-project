import React from 'react';

import backdropStyle from './backdrop.module.scss';

const backdrop = (props) => (
    <div className={backdropStyle.backdrop} onClick={props.click} />
);

export default backdrop;