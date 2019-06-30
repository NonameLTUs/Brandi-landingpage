import React from 'react'
import classes from './Facts.scss'

import {SectionHeader} from '@/Components'
import SingleFact from './SingleFact'

const facts = [
    {
        icon: 'clock',
        value: 3200,
        title: 'Hours of work'
    },
    {
        icon: 'friends',
        value: 120,
        title: 'Satisfied clients'
    },
    {
        icon: 'rocket',
        value: 360,
        title: 'Projects delivered'
    },
    {
        icon: 'cup',
        value: 42,
        title: 'Awards won'
    }
];

export default () => (
    <div className={classes.container}>
        <SectionHeader>Some fun facts</SectionHeader>
        <div className={classes["facts-container"]}>
            {facts.map(fact => <SingleFact key={fact.title} {...fact}/>)}
        </div>
    </div>
)