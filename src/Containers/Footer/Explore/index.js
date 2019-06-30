import React from 'react'
import classes from "./Explore.scss";

const links = [
    {
        title: 'Envato',
        url: 'https://envato.com'
    },
    {
        title: 'Themecurve',
        url: 'https://envato.com'
    },
    {
        title: 'Kreativeshowcase',
        url: 'https://envato.com'
    },
    {
        title: 'Freebiescurve',
        url: 'https://envato.com'
    },
    {
        title: 'Themeforest',
        url: 'https://envato.com'
    },
    {
        title: 'Microsoft',
        url: 'https://envato.com'
    },
    {
        title: 'Google',
        url: 'https://envato.com'
    },
    {
        title: 'Yahoo',
        url: 'https://envato.com'
    }
];

const renderedLinks = links.map(link => (
    <a href={link.url} title={link.title} className={classes.link} key={link.title}>{link.title}</a>
));

export default () => (
    <div className={classes.container}>
        <h3 className={classes.heading}>Explore</h3>
        <div className={classes.list}>
            {renderedLinks}
        </div>
    </div>
)