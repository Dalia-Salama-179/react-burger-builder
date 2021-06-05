import React from 'react';
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => {
    let controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ];

    let buildCon = controls.map((cont, index) => {
        return <BuildControl
            removeIngredient={() => props.ingredientRemoved(cont.type)}
            addIngredient={() => props.ingredientAdded(cont.type)}
            key={index} label={cont.label}></BuildControl>
    });

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)} </strong></p>
            {buildCon}
            <button onClick={props.purchase}
                disabled={!props.purchasable} className={classes.OrderButton}>Order Now</button>
        </div>
    )
};

export default buildControls;