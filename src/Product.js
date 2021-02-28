import React from 'react'
import "./Product.css";
import {useStateValue} from './StateProvider';
function Product({id,title,price,rating,image}) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () =>{
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',  //listening the action in reducer
            item: {  //payload
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
               
            },
        });
    };
    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            
            <img  src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
