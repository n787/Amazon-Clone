import React from 'react'
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue(); 
    return (
        <div className="contain">
            <div className="checkout">
            <img className="checkoutAd" src="https://th.bing.com/th/id/OIP.JE5r_VSyjkrd8e63J9FEmgHaEK?w=327&h=184&c=7&o=5&pid=1.7" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h1>Your Shopping Basket is Empty</h1>
                    <p>You have no items in your basket. To buy one or more click on 'Add to Basket' next to item.</p>
                </div>
            ): (
                <div>
                    <h1 className="checkoutTitle">Your Shopping Basket</h1>
                    
                    {/*List of checkout Product */}
                    { basket.map((item) => {
                           // console.log(item);
                            return(
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating= {item.rating}
                            />
                        );
                        }) }
                        
                </div>
            )}
            </div>

            <div className="checkoutRight">
            {basket.length > 0 &&(
                <div >
                    <Subtotal/>   
                </div>  
            )}
            </div>              
        </div>
    );
}

export default Checkout
