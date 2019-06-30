import React from 'react'
import classes from './Form.scss'

import classnames from 'classnames'
import {Icon} from '@/Components'

export default () => (
    <div className={classes.container}>
        <div className={classes.title}>Say hello!</div>
        <div className={classes["input-container"]}>
            <input type="text" placeholder="Name" className={classes.input}/>
        </div>
        <div className={classes["input-container"]}>
            <input type="email" placeholder="Email" className={classes.input}/>
        </div>
        <div className={classnames([classes["input-container"], classes.message])}>
            <input type="password" placeholder="Message" className={classes.input}/>
        </div>
        <button type={"button"} className={classes.button}>
            <Icon icon="envelope" className={classes["button-icon"]}/>
            <span className={classes["button-title"]}>Send message</span>
        </button>
    </div>
)