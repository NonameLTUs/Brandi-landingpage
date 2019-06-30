import React from 'react'
import classes from './SliderArrows.scss'
import classnames from 'classnames'

const classesOfArrows = side => classnames({
    [classes.arrow]: true,
    [classes["left-arrow"]]: "left" === side,
    [classes["right-arrow"]]: "right" === side
});

export default props => (
    <React.Fragment>
        <div className={classesOfArrows("left")} onClick={props.prevSlide}/>
        <div className={classesOfArrows("right")} onClick={props.nextSlide}/>
    </React.Fragment>
)