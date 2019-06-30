import React from 'react'
import classes from './index.scss'

import SliderDots from './SliderDots'

export default class InlineSlider extends React.Component {
    constructor(props) {
        super(props);

        this.sliderElementsRef = React.createRef();
        this.sliderElementsContainerRef = React.createRef();
    }

    state = {
        totalPages: 0,
        currentPage: 0,
        slidesPerPage: null,
        pagesHeights: {}
    };

    componentDidMount() {
        this.updateCalculations();
    }

    componentDidUpdate() {
        this.updateCalculations();
    }

    initWatching() {
        window.onresize = () => this.updateCalculations();
    }


    allChildren = () => this.sliderElementsRef.current.children;

    updateCalculations = () => {
        const children = this.allChildren();

        const slidesPerPage = this.calculateSlidesCountPerPage(children);
        if (slidesPerPage !== this.state.slidesPerPage) {
            const totalPages = this.calculateTotalPages(children, slidesPerPage);
            const pagesHeights = this.calculatePagesHeights(slidesPerPage, totalPages);

            this.setState({
                slidesPerPage,
                totalPages,
                pagesHeights
            })
        }
    };

    getChildrenByPage = (slidesPerPage, page) => {
        const allChildren = this.allChildren();
        const childrenKeys = Object.keys(allChildren);
        const keyStartsAt = page * slidesPerPage;
        const visibleChildren = [];
        for (let i in childrenKeys) {
            if (visibleChildren.length >= slidesPerPage) {
                break;
            } else {
                if (i >= keyStartsAt) {
                    visibleChildren.push(allChildren[i]);
                }
            }
        }

        return visibleChildren;
    };

    calculatePagesHeights = (slidesPerPages, totalPages) => {
        let heights = {};

        for (let i = 0; i <= totalPages; i++) {
            let children = this.getChildrenByPage(slidesPerPages, i);
            for (let childI in children) {
                if (children[childI].offsetHeight > (heights[i] || 0)) {
                    heights[i] = children[childI].offsetHeight
                }
            }
        }

        return heights;
    };

    calculateTotalPages = (children, slidesPerPage) => {
        return Math.ceil(children.length / slidesPerPage) - 1;
    };

    calculateSlidesCountPerPage = children => {
        const container = this.sliderElementsRef.current;
        const containerWidth = container.clientWidth;
        const elementWidth = children[0].offsetWidth;
        const gapBetweenItems = getComputedStyle(container).gridColumnGap.replace('px', '');
        let slidesPerPage = Math.floor(containerWidth / elementWidth);
        const gapsWidth = gapBetweenItems * (slidesPerPage - 1);

        return Math.floor((containerWidth - gapsWidth) / elementWidth);
    };

    getDistanceToPage = page => {
        const {pagesHeights} = this.state;
        let distance = 0;

        for (let i = 0; i <= page; i++) {
            distance += pagesHeights[i - 1] || 0;
        }

        return distance;
    };

    setPage = page => {
        this.setState({
            currentPage: page
        })
    };

    render() {
        this.initWatching();

        const stylesOfElementsContainer = {
            height: `${this.state.pagesHeights[this.state.currentPage]}px`
        };
        const stylesOfElementsList = {
            marginTop: `-${(this.getDistanceToPage(this.state.currentPage))}px`,
            gridTemplateColumns: `repeat(${this.state.slidesPerPage || 1}, 1fr)`
        };

        return (
            <div className={classes.slider}>
                <div className={classes["elements-container"]} ref={this.sliderElementsContainerRef}
                     style={stylesOfElementsContainer}>
                    <div className={classes.elements} ref={this.sliderElementsRef} style={stylesOfElementsList}>
                        {this.props.children}
                    </div>
                </div>
                <SliderDots currentPage={this.state.currentPage}
                            totalPages={this.state.totalPages}
                            dark={this.props.darkDots}
                            onChange={this.setPage}/>
            </div>
        )
    }
}