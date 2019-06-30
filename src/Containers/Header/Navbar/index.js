import React from 'react'
import classes from './Navbar.scss'
import NavItem from './NavItem'
import {Icon} from '@/Components'

export default () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes["logo-container"]}>
                    <Icon icon="logo" className={classes["logo-icon"]}/>
                    <span className={classes.tagline}>I am your tag line</span>
                </div>
                <ul className={classes.navigation}>
                    <NavItem anchor={"home"}>Home</NavItem>
                    <NavItem anchor={"features"}>Features</NavItem>
                    <NavItem anchor={"works"}>Works</NavItem>
                    <NavItem anchor={"team"}>Team</NavItem>
                    <NavItem anchor={"contact"}>Contact</NavItem>
                </ul>
            </div>
        </div>
    )
}