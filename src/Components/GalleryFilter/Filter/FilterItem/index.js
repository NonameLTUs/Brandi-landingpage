import React from 'react'
import classes from './FilterItem.scss'
import classnames from 'classnames'

export default props => {
    const classesOfItem = classnames({
        [classes.item]: true,
        [classes.active]: props.value === props.currentState
    });

    return (
        <button className={classesOfItem} onClick={() => props.onChange(props.value)}>{props.title}</button>
    )
}