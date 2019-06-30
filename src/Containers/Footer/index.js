import React from 'react';
import classes from './Footer.scss'

import Info from './Info'
import Subscribe from './Subscribe'
import Explore from './Explore'
import Copyright from './Copyright'

export default () => (
    <div className={classes.container}>
        <Info/>
        <Subscribe/>
        <Explore/>
        <Copyright/>
    </div>
);