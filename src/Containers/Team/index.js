import React from 'react'
import classes from './Team.scss'

import {InlineSlider, SectionHeader} from '@/Components'

import SingleMember from './SingleMember'

const items = [
    {
        id: 1,
        name: 'John Filmr Doe',
        profession: 'Managing Director',
        description: {
            title: 'Nemo enim ipsam voluptatem quia voluptas',
            content: 'sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        links: [
            {
                icon: 'facebook',
                title: 'Facebook',
                url: 'https://facebook.com',
                blank_window: true
            },
            {
                icon: 'twitter',
                title: 'Twitter',
                url: 'https://twitter.com',
                blank_window: true
            },
            {
                icon: 'google-plus',
                title: 'Google+',
                url: 'https://google.com',
                blank_window: true
            }
        ]
    },
    {
        id: 2,
        name: 'John Filmr Doe',
        profession: 'Managing Director',
        description: {
            title: 'Nemo enim ipsam voluptatem quia voluptas',
            content: 'sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        links: [
            {
                icon: 'facebook',
                title: 'Facebook',
                url: 'https://facebook.com',
                blank_window: true
            },
            {
                icon: 'twitter',
                title: 'Twitter',
                url: 'https://twitter.com',
                blank_window: true
            },
            {
                icon: 'google-plus',
                title: 'Google+',
                url: 'https://google.com',
                blank_window: true
            }
        ]
    },
    {
        id: 3,
        name: 'John Filmr Doe',
        profession: 'Managing Director',
        description: {
            title: 'Nemo enim ipsam voluptatem quia voluptas',
            content: 'sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        links: [
            {
                icon: 'facebook',
                title: 'Facebook',
                url: 'https://facebook.com',
                blank_window: true
            },
            {
                icon: 'twitter',
                title: 'Twitter',
                url: 'https://twitter.com',
                blank_window: true
            },
            {
                icon: 'google-plus',
                title: 'Google+',
                url: 'https://google.com',
                blank_window: true
            }
        ]
    },
    {
        id: 4,
        name: 'John Filmr Doe',
        profession: 'Managing Director',
        description: {
            title: 'Nemo enim ipsam voluptatem quia voluptas',
            content: 'sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        links: [
            {
                icon: 'facebook',
                title: 'Facebook',
                url: 'https://facebook.com',
                blank_window: true
            },
            {
                icon: 'twitter',
                title: 'Twitter',
                url: 'https://twitter.com',
                blank_window: true
            },
            {
                icon: 'google-plus',
                title: 'Google+',
                url: 'https://google.com',
                blank_window: true
            }
        ]
    },
    {
        id: 5,
        name: 'John Filmr Doe',
        profession: 'Managing Director',
        description: {
            title: 'Nemo enim ipsam voluptatem quia voluptas',
            content: 'sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        links: [
            {
                icon: 'facebook',
                title: 'Facebook',
                url: 'https://facebook.com',
                blank_window: true
            },
            {
                icon: 'twitter',
                title: 'Twitter',
                url: 'https://twitter.com',
                blank_window: true
            },
            {
                icon: 'google-plus',
                title: 'Google+',
                url: 'https://google.com',
                blank_window: true
            }
        ]
    }
];

export default () => {
    return (
        <div className={classes.container}>
            <SectionHeader>Meet our team</SectionHeader>
            <p className={classes.subHeading}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore
            </p>
            <InlineSlider darkDots={true} asd={true}>
                {items.map(item => <SingleMember key={item.id} {...item}/>)}
            </InlineSlider>
        </div>
    )
}