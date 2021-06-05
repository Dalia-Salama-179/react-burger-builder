import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIng = [];
    transformedIng = Object.keys(props.ingredients).map((el, index) => {
        let arr = [];
        for (let i=0; i<props.ingredients[el]; i++) {
            arr.push(<BurgerIngredient type={el} key={el + i} ></BurgerIngredient>)
        }
        return [...arr];
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIng.length === 0) {
        transformedIng = <p>Please start adding ingredients</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIng}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
};

export default burger;
