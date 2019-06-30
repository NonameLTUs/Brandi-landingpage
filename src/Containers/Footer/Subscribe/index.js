import React from 'react'
import classes from "./Subscribe.scss";

import {Icon} from '@/Components'

export default () => (
    <div className={classes.container}>
        <h3 className={classes.heading}>Subscribe</h3>
        <div className={classes["input-container"]}>
            <input className={classes.input} placeholder="Email"/>
            <Icon icon="arrow-to-right" className={classes["input-icon"]}/>
        </div>
        <p className={classes.description}>
            eusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
)