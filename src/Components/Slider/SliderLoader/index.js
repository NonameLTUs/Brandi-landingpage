import React from 'react'
import classes from './SliderLoader.scss'
import classnames from 'classnames'

export default props => {
    const classesOfLoader = classnames({
        [classes.loader]: true,
        [classes.visible]: props.show
    });

    return <div className={classesOfLoader}/>
}