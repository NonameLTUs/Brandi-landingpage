import React from 'react'
import classes from './Contacts.scss'

import {SectionHeader} from '@/Components'

import Info from './Info'
import Form from './Form'
import Social from './Social'

export default () => (
    <React.Fragment>
        <div className={classes.container}>
            <SectionHeader>Let's discuss</SectionHeader>
            <p className={classes.subHeading}>
                Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            </p>
            <div className={classes.content}>
                <Info/>
                <Form/>
                <Social/>
            </div>
        </div>
        <div className={classes.map}/>
    </React.Fragment>
)