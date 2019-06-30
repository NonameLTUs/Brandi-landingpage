import React from 'react'
import classes from "./Info.scss";

import {Icon} from '@/Components'

export default () => (
    <div className={classes.container}>
        <div className={classes["logo-container"]}>
            <Icon icon="logo2" className={classes.logo}/>
        </div>
        <p className={classes.description}>
            eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </div>
)