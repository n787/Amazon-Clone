import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './Reducer';
function Subtotal() {
    const [{ basket }] = useStateValue(); 
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value)=>(
                    <>
                        <p> 
                            Subtotal({basket.length} item):<strong>'${value}'</strong>
                        </p>
                        <small className="subtotalGift">
                            <input type="checkbox"/>This order constains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                
            />
            <button className="button">Proceed To Checkout</button>            
        </div>
    )
}

export default Subtotal
