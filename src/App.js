import React from 'react';
import 'normalize.css'
import classes from './App.scss'

import Header from './Containers/Header'
import Features from './Containers/Features'
import Works from './Containers/Works'
import Team from './Containers/Team'
import Facts from './Containers/Facts'
import Contacts from './Containers/Contacts'
import Footer from './Containers/Footer'

export default () => (
    <div className={classes.app}>
        <div className={classes.background}/>
        <div className={classes.content}>
            <Header/>
            <Features/>
            <Works/>
            <Team/>
            <Facts/>
            <Contacts/>
            <div className={classes.divider}/>
            <Footer/>
        </div>
    </div>
);