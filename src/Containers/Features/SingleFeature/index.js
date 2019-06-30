import React from 'react'
import classes from './SingleFeature.scss'

import {Icon} from '@/Components'

export default props => {
    return (
        <div className={classes.feature}>
            <div className={classes["icon-container"]}>
                <Icon icon={props.icon} className={classes.icon}/>
            </div>
            <div className={classes["content"]}>
                <h3 className={classes.heading}>{props.heading}</h3>
                <p className={classes.description}>{props.description}</p>
            </div>
        </div>
    )
}