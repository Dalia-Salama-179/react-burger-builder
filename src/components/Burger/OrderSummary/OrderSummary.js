import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((key, index) => {
            return (
                <li key={index}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>
                    : {props.ingredients[key]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type={'Danger'} clicked={props.hideModal}>CANCEL</Button>
            <Button type={'Success'} clicked={props.continuePurchasing}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;