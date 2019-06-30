import React from 'react'
import classes from './Features.scss'

import {InlineSlider, SectionHeader} from '@/Components'
import SingleFeature from './SingleFeature'

const features = [
    {
        icon: 'feather',
        heading: 'Branding',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
    },
    {
        icon: 'dribbble',
        heading: 'Branding',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
    },
    {
        icon: 'facebook',
        heading: 'Branding',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
    },
    {
        icon: 'twitter',
        heading: 'Branding',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
    },
    {
        icon: 'feather',
        heading: 'Branding',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
    }
];

const renderedFeatures = features.map(feature => <SingleFeature {...feature} key={Math.random()}/>);

export default () => {
    return (
        <div className={classes.container}>
            <SectionHeader>Features</SectionHeader>
            <div className={classes["slider-container"]}>
                <InlineSlider darkDots={true}>
                    {renderedFeatures}
                </InlineSlider>
            </div>
        </div>
    )
}