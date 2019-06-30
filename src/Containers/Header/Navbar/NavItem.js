import React from 'react'
import classes from "./Navbar.scss";

export default props => (
    <li className={classes["navigation-item"]}>
        <a href={`#${props.anchor}`}>{props.children}</a>
    </li>
)