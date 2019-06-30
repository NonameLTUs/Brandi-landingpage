import React from 'react'
import classes from './index.scss'
import Navbar from './Navbar'
import Slider from '../../Components/Slider'

export default () => {
    return (
        <div className={classes.header} id="home">
            <Navbar/>
            <Slider/>
        </div>
    )
}