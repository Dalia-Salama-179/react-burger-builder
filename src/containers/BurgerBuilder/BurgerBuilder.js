import React, {Component} from 'react'
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    checkPurchaseHandler(updatedIngredients) {
        let arr = Object.keys(updatedIngredients).map(el => {
            // sum += updatedIngredients[el];
            return updatedIngredients[el];
        })

        let sum = arr.reduce((total, sum) => {
            return total + sum;
        }, 0)

        this.setState({
            purchasable: sum > 0 ? true : false
        })
    };

    addIngredientHandler = (type) => {
        let typeCount = this.state.ingredients[type] + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = typeCount++;

        let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.checkPurchaseHandler(updatedIngredients)
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            let newCount = this.state.ingredients[type] - 1;
            let updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = newCount;

            let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            });
            this.checkPurchaseHandler(updatedIngredients)
        }
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    };

    modalClosedHandler = () => {
        this.setState({
            purchasing: false
        })
    };

    continuePurchasingHandler = () => {
        alert('You Continue !!')
    };

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.modalClosedHandler}>
                    <OrderSummary hideModal={this.modalClosedHandler}
                                  continuePurchasing={this.continuePurchasingHandler}
                                  totalPrice={this.state.totalPrice}
                                  ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    purchase={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;