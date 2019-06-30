import React from 'react'
import classes from "./Item.scss";

import {Icon} from '@/Components';

export default props => {
    const {id, title, categories, state, width, height, allCategories, placing} = props;

    const categoriesNamingsArray = categories.map(cat => allCategories[cat]);

    const imageUrl = `http://localhost:8080/img/works/${id}.jpg`;

    const isVisible = (state === 'all' || categories.indexOf(state) > -1);

    const stylesOfItem = ({
        width: isVisible ? `${width}px` : 0,
        height: isVisible ? `${height}px` : 0,
        ...placing
    });

    return (
        <div className={classes.item} style={stylesOfItem} key={id}>
            <img className={classes.image} src={imageUrl} title={title} alt={title}/>
            <div className={classes["hover-container"]}>
                <div className={classes["icon-container"]}>
                    <Icon className={classes.icon} icon="eye"/>
                </div>
                <span className={classes.title}>{title}</span>
                <p className={classes.categories}>{categoriesNamingsArray.join(', ')}</p>
            </div>
        </div>
    );
}