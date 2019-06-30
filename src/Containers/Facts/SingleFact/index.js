import React from 'react'
import classes from './SingleFact.scss'

import {Icon} from '@/Components'

export default props => {
    return (
        <div className={classes.container}>
            <div className={classes["icon-container"]}>
                <Icon icon={props.icon} className={classes.icon}/>
            </div>
            <h2 className={classes.value}>{props.value}</h2>
            <h3 className={classes.title}>{props.title}</h3>
        </div>
    )
}