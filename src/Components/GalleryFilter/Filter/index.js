import React from 'react'
import classes from './Filter.scss'

import Item from './FilterItem'

export default props => {
    const renderedItems = props.states.map(state => (
            <Item {...state}
                  key={state.value}
                  currentState={props.currentState}
                  onChange={props.onChange}/>
        )
    );

    return (
        <div className={classes.container}>
            {renderedItems}
        </div>
    )
}