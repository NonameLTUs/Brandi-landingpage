import React from 'react'
import classes from './SingleMember.scss'

import {Icon} from '@/Components'

export default props => {
    const url = `${window.location.origin}/img/team/${props.id}.jpg`;

    const renderedLinks = props.links.map(link => (
        <a href={link.url}
           title={link.title}
           target={link.blank_window ? '_blank' : '_self'}
           key={link.url}
           className={classes["hover-link"]}>
            <Icon icon={link.icon} className={classes["hover-link-icon"]}/>
        </a>
    ));

    return (
        <div className={classes.item}>
            <div className={classes["photo-container"]}>
                <img src={url} title={props.name} alt={props.name} className={classes.photo}/>
                <div className={classes["hover-container"]}>
                    <div className={classes["hover-title"]}>{props.description.title}</div>
                    <div className={classes["hover-content"]}>{props.description.content}</div>
                    <div className={classes["hover-links"]}>
                        {renderedLinks}
                    </div>
                </div>
            </div>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.profession}>{props.profession}</div>
        </div>
    );
}