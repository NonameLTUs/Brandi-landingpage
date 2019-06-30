import React from 'react'
import classes from './GalleryFilter.scss'

import _ from 'lodash';

import Item from './Item'
import Filter from './Filter'

const allCategories = {
    all: 'All',
    branding: 'Branding',
    web: 'Web',
    'logo-design': 'Logo design',
    photography: 'Photography'
};

export default class GalleryFilter extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    state = {
        menuStates: [
            {
                title: 'All',
                value: 'all'
            },
            {
                title: 'Branding',
                value: 'branding'
            },
            {
                title: 'Web',
                value: 'web'
            },
            {
                title: 'Logo design',
                value: 'logo-design'
            },
            {
                title: 'Photography',
                value: 'photography'
            }
        ],
        itemsPlacing: {},
        currentState: 'all',
        itemsInLine: 4,
        itemWidth: 0,
        itemHeight: 0
    };

    componentDidMount() {
        this.updateItemsPlacing();
    }

    initWatching() {
        window.onresize = _.debounce(this.updateItemsPlacing, 100)
    }

    changeState = state => {
        new Promise(resolve => {
            this.setState({currentState: state});
            resolve();
        })
            .then(() => this.updateItemsPlacing(false))
    };

    calculateSizes = () => {
        const containerWidth = this.containerRef.current.offsetWidth;
        const itemsInLine = Math.ceil(containerWidth / 400);
        const itemWidth = containerWidth / itemsInLine;
        const itemHeight = itemWidth * 0.75;

        return {
            containerWidth,
            itemsInLine,
            itemWidth,
            itemHeight
        }
    };

    updateItemsPlacing = (reCalculate = true) => {
        if (reCalculate) {
            const {itemsInLine, itemHeight, itemWidth} = this.calculateSizes();
            const itemsPlacing = this.calculateItemsPlacing(itemsInLine, itemHeight, itemWidth);

            this.setState({itemsInLine, itemWidth, itemHeight, itemsPlacing});
        } else {
            const itemsPlacing = this.calculateItemsPlacing();
            this.setState({itemsPlacing});
        }
    };

    getVisibleItems = () => {
        const state = this.state.currentState;

        return this.props.items.filter(item => state === 'all' || item.categories.indexOf(state) > -1);
    };

    calculateItemsPlacing = (itemsInLine = null, itemHeight = null, itemWidth = null) => {
        if (null === itemsInLine) {
            itemsInLine = this.state.itemsInLine
        }
        if (null === itemHeight) {
            itemHeight = this.state.itemHeight
        }
        if (null === itemWidth) {
            itemWidth = this.state.itemWidth
        }

        const items = this.getVisibleItems();
        const itemsPlacings = {};

        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                const item = items[i];
                const index = parseInt(item.id, 10);

                const columnOfItem = i % itemsInLine;
                const rowOfItem = Math.floor(i / itemsInLine);

                const left = columnOfItem * itemWidth;
                const top = rowOfItem * itemHeight;

                itemsPlacings[index] = {
                    left: `${left}px`,
                    top: `${top}px`
                };
            }
        }

        return itemsPlacings;
    };

    render() {
        this.initWatching();

        let renderedItems = this.props.items.map(item => (
                <Item key={item.id}
                      allCategories={allCategories}
                      state={this.state.currentState}
                      width={this.state.itemWidth}
                      height={this.state.itemHeight}
                      placing={this.state.itemsPlacing[item.id]}
                      {...item} />
            )
        );

        const itemsCount = Object.keys(this.state.itemsPlacing).length;
        const itemsInLine = parseInt(this.state.itemsInLine, 10);
        const rowsCount = Math.ceil(itemsCount / itemsInLine);

        return (
            <div className={classes.container} ref={this.containerRef}>
                <Filter states={this.state.menuStates}
                        currentState={this.state.currentState}
                        onChange={this.changeState}/>
                <div className={classes.items} style={{height: rowsCount * this.state.itemHeight}}>
                    {renderedItems}
                </div>
            </div>
        )
    }
}