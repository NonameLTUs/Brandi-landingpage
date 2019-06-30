import React from 'react'
import classes from './SliderDots.scss'
import classnames from 'classnames'

export default props => {
    const {totalPages, currentPage} = props;
    let dots = [];
    for (let i = 0; i <= totalPages; i++) {
        const classesOfDots = classnames({
            [classes.dot]: true,
            [classes.dark]: props.dark === true,
            [classes.active]: currentPage == i
        });
        dots.push(
            <li className={classesOfDots} key={i} onClick={() => props.onChange(i)}/>
        )
    }

    const stylesOfList = {
        opacity: (totalPages + 1) > 1 ? '1' : '0'
    };

    return (
        <ul className={classes.list} style={stylesOfList}>
            {dots}
        </ul>
    )
}