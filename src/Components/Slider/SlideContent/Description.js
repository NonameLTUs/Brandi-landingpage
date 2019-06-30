import React from 'react'
import classnames from 'classnames'
import classes from './SlideContent.scss'

export default props => {
    const classesOfItem = classnames({
        [classes.description]: true,
        [props.className]: !!props.className
    });

    return <p className={classesOfItem}>{props.children}</p>

}