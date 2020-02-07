import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary'
import Buttom from '../../../Layout/UI/Button/Button'


const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
                </li>
            );
        })

    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Buttom btnType="Danger" clicked={props.cancel}>CANCEL</Buttom>
            <Buttom btnType="Success" clicked={props.continue}>CONTINUE</Buttom>
        </Auxiliary> 
    )
};

export default OrderSummary;
