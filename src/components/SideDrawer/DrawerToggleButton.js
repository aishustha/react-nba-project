import React from 'react';
import drawerbtnStyle from './DrawerToggleButton.module.scss';
import FontAwesome from 'react-fontawesome';

const drawerToggleButton = (props) => (
    <div onClick={props.click}>
        <FontAwesome name="bars"
           className={drawerbtnStyle.bars}
        />
    </div>
);

export default drawerToggleButton;