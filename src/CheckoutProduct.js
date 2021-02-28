import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from './StateProvider';
function CheckoutProduct({id, title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();
   
    const removeFromBasket = () => {
        console.log(id);    
        //remove from item basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="image" src={image} alt=""/>
            <div className="checkoutProductInfo">
                <p className="title">{title}</p>
                    <p className="Price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="Rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                        }
                    </div>
                    <button className="button" onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
