import React from 'react'
import classnames from 'classnames'
import classes from './SlideContent.scss'

export default props => {
    const classesOfItem = classnames({
        [classes["sub-heading"]]: true,
        [props.className]: !!props.className
    });

    return <h3 className={classesOfItem}>{props.children}</h3>

}