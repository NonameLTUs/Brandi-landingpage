import React from 'react'
import classes from './SlideContent.scss'

import {Icon} from '@/Components'

export default props => {
    const {icons} = props;

    const mappedIcons = (icons || []).map(icon => (
        <a href={icon.url} target="_blank" key={icon.url}>
            <Icon icon={icon.icon} className={classes.icon} key={icon.icon}/>
        </a>
    ));

    return (
        <div className={classes["icons-container"]}>
            {mappedIcons}
        </div>
    )
}