import React from 'react'
import classes from './Social.scss'

import {Icon} from '@/Components'

const links = [
    {
        icon: 'behance',
        url: 'https://behance.com'
    },
    {
        icon: 'twitter',
        url: 'https://twitter.com'
    },
    {
        icon: 'dribbble',
        url: 'https://dribbble.com'
    },
    {
        icon: 'facebook',
        url: 'https://facebook.com'
    },
    {
        icon: 'google-plus',
        url: 'https://google.com'
    }
];

const renderedLinks = links.map(link => (
    <a href={link.url} target="_blank" className={classes.link} key={link.url}>
        <Icon icon={link.icon} className={classes["link-icon"]}/>
    </a>
));

export default () => (
    <div className={classes.container}>
        {renderedLinks}
    </div>
)