import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <span>{props.label}</span>
        <button className={classes.Less} onClick={props.removeIngredient}>Less</button>
        <button className={classes.More} onClick={props.addIngredient}>More</button>
    </div>
);

export default buildControl;