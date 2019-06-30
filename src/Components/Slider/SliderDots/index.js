import React from 'react'
import classes from './SliderDots.scss'
import classnames from 'classnames'

export default props => {
    const {slides, currentSlide, activeSlide} = props;

    const dots = slides.map(slide => {
        const classesOfDots = classnames({
            [classes.dot]: true,
            [classes.active]: (currentSlide == slide && activeSlide == slide),
            [classes.loading]: (currentSlide !== activeSlide && activeSlide == slide)
        });
        return (
            <li className={classesOfDots} key={slide} onClick={() => props.onChange(slide)}/>
        )
    });

    return (
        <ul className={classes.list}>
            {dots}
        </ul>
    )
}