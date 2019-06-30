import React from 'react'
import classes from './Info.scss'

export default () => (
    <div className={classes.info}>
        <div className={classes.title}>Cras at ultrices erat, sed vulputate!</div>
        <div className={classes.address}>
            2345 Setwant natrer, 1234,<br/>
            Washington. United States.<br/>
            (401) 1234 567<br/>
            hello@brandi.com<br/>
            ww.brandi.com<br/>
        </div>
    </div>
)