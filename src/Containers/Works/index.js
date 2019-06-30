import React from 'react'
import classes from './Works.scss'

import {GalleryFilter, SectionHeader} from '@/Components'

export default () => {
    const items = [
        {
            id: 1,
            title: 'Labore et dolore magnam',
            categories: ['branding', 'photography']
        },
        {
            id: 2,
            title: 'Labore et dolore magnam',
            categories: ['branding', 'web']
        },
        {
            id: 3,
            title: 'Labore et dolore magnam',
            categories: ['branding', 'web', 'logo-design']
        },
        {
            id: 4,
            title: 'Labore et dolore magnam',
            categories: ['logo-design']
        },
        {
            id: 5,
            title: 'Labore et dolore magnam',
            categories: ['branding', 'photography']
        },
        {
            id: 6,
            title: 'Labore et dolore magnam',
            categories: ['branding']
        },
        {
            id: 7,
            title: 'Labore et dolore magnam',
            categories: ['branding']
        },
        {
            id: 8,
            title: 'Labore et dolore magnam',
            categories: ['branding', 'web', 'logo-design', 'photography']
        }
    ];

    return (
        <div className={classes.container}>
            <SectionHeader>Works</SectionHeader>
            <p className={classes.subHeading}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore
            </p>
            <GalleryFilter items={items}/>
        </div>
    )
}