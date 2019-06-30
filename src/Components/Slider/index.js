import React from 'react'
import classes from './Slider.scss'

import Slide from './Slide'
import SliderDots from './SliderDots'
import SliderLoader from './SliderLoader'
import SliderArrows from './SliderArrows'

export default class Slider extends React.Component {
    state = {
        slides: [
            {
                heading: <React.Fragment>Meet <span>Brandi!</span></React.Fragment>,
                subHeading: <React.Fragment><span>/creative</span> one page template</React.Fragment>,
                description: 'We are a team of professionals',
                icons: [
                    {icon: 'twitter', 'url': 'https://twitter.com'},
                    {icon: 'facebook', 'url': 'https://facebook.com'},
                    {icon: 'google-plus', 'url': 'https://google.com'},
                    {icon: 'dribbble', 'url': 'https://dribbble.com'}
                ]
            },
            {
                heading: <React.Fragment>Dog's power?</React.Fragment>,
                subHeading: <React.Fragment>Have <span>YOU</span> ever <span>HEARD</span>?</React.Fragment>
            },
            {
                heading: <React.Fragment><span>KEEP</span> riding</React.Fragment>,
                subHeading: <React.Fragment>Bike is <span>EVERYTHING</span></React.Fragment>,
                description: 'Best cyclist ever',
                icons: [
                    {icon: 'twitter', 'url': 'https://twitter.com'},
                    {icon: 'facebook', 'url': 'https://facebook.com'}
                ]
            }
        ],
        activeSlide: 0,
        currentSlide: 0,
        loading: true
    };

    changeSlide = slide => {
        const slideId = parseInt(slide, 10);
        if (!(this.state.activeSlide === slideId || this.state.currentSlide === slideId)) {
            this.setState({
                activeSlide: slideId,
                loading: true
            })
        }
    };

    onSlideLoaded = () => {
        this.setState(state => ({
            currentSlide: parseInt(state.activeSlide, 10),
            loading: false
        }))
    };

    prevSlide = () => {
        const currentSlide = this.state.currentSlide;
        let slide = currentSlide - 1;
        if ("undefined" === typeof this.state.slides[slide]) {
            slide = Object.keys(this.state.slides).reverse()[0]
        }
        this.changeSlide(slide)
    };

    nextSlide = () => {
        const currentSlide = this.state.currentSlide;
        let slide = currentSlide + 1;
        if ("undefined" === typeof this.state.slides[slide]) {
            slide = Object.keys(this.state.slides)[0]
        }
        this.changeSlide(slide)
    };

    render() {
        const slidesList = [];
        for (let i in this.state.slides) {
            if (this.state.slides.hasOwnProperty(i)) {
                slidesList[i] = {...this.state.slides[i], id: parseInt(i, 10)};
            }
        }

        return (
            <div className={classes.slider}>
                <div className={classes["visible-slide"]}>
                    <SliderLoader show={this.state.loading}/>
                    {slidesList.map(slide => (
                        <Slide {...slide}
                               key={slide.id}
                               activeSlide={this.state.activeSlide}
                               currentSlide={this.state.currentSlide}
                               showLoader={this.state.loading}
                               onSlideLoaded={this.onSlideLoaded}
                        />
                    ))}
                </div>
                <SliderArrows prevSlide={this.prevSlide} nextSlide={this.nextSlide}/>
                <SliderDots slides={Object.keys(this.state.slides)}
                            currentSlide={this.state.currentSlide}
                            activeSlide={this.state.activeSlide}
                            onChange={this.changeSlide}/>
            </div>
        )
    }
}