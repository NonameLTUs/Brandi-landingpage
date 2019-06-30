import React from 'react'
import classes from './SectionHeader.scss'

import {Icon} from '..'

export default props => {
    return (
        <React.Fragment>
            <div className={classes.container}>
                <h3 className={classes.heading}>{props.children}</h3>
                <div className={classes["icon-container"]}>
                    <Icon icon="heart-empty" className={classes.icon}/>
                </div>
            </div>
        </React.Fragment>
    )
}