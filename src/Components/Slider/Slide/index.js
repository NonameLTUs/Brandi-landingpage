import React from 'react'
import classes from './Slide.scss'
import classnames from 'classnames'
import Heading from '../SlideContent/Heading'
import SubHeading from '../SlideContent/SubHeading'
import Description from '../SlideContent/Description'
import Icons from '../SlideContent/Icons'

export default class Slide extends React.Component {
    constructor(props) {
        super(props);

        this.imgRef = React.createRef();
        this.loadImage = this.loadImage.bind(this);
        this.loadImage();
    }

    state = {
        src: null,
        currentSlide: null,
        activeSlide: null
    };

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.currentSlide !== prevState.currentSlide ||
            prevProps.activeSlide !== prevState.activeSlide ||
            prevProps.resolution !== this.props.resolution
        ) {
            this.loadImage();
        }
    }

    getImageUrl(id) {
        const filename = `${id}-${this.props.resolution}px.jpg`;

        return `${window.location.origin}/img/slider/${filename}`;
    }

    loadImage() {
        if (this.props.activeSlide === this.props.id) {
            const url = this.getImageUrl(this.props.id);
            let downloadingImage = new Image();
            downloadingImage.onload = () => {
                this.setState({
                    src: url,
                    currentSlide: this.props.currentSlide,
                    activeSlide: this.props.activeSlide,
                    resolution: this.props.resolution
                });
                this.props.onSlideLoaded();
            };
            downloadingImage.src = url;
        }
    };

    render() {
        const {heading, subHeading, description, icons, children, id} = this.props;

        let content = null;
        if (undefined === children) {
            content = (
                <React.Fragment>
                    <Heading>{heading}</Heading>
                    <SubHeading>{subHeading}</SubHeading>
                    <Description>{description}</Description>
                    <div style={{height: '5rem'}}/>
                    <Icons icons={icons}/>
                </React.Fragment>
            )
        } else {
            content = children
        }

        const classesOfSlide = classnames({
            [classes.slide]: true,
            [classes.visible]: this.props.currentSlide === id
        });

        return (
            <div className={classesOfSlide}>
                <div className={classes["background-container"]}>
                    <img className={classes["background-img"]}
                         alt={`Slide ${id}`}
                         src={this.state.src}
                         ref={this.imgRef}
                    />
                </div>
                <div className={classes["content-container"]}>
                    {content}
                </div>
            </div>
        )
    }
}