import React from 'react'
import classes from "./Copyright.scss";

import {Icon} from '@/Components'

export default () => (
    <div className={classes.container}>
        <div className={classes.authors}>
            Created with
            <Icon icon="heart-empty" className={classes.icon}/>by
            &nbsp;
            <a href="https://google.com"
               target="_blank"
               rel="noopener noreferrer"
               title="Themecurve">themecurve</a>,
            <br/>
            exclusive for kreativeshowcase
        </div>
        <div className={classes.copyright}>&copy; 2014 Brandi. All Rights Reserved.</div>
    </div>
)