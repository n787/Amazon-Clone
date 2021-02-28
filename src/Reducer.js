export const initialState ={
    basket : [],  //store the count of cart as array
    user: null,
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);
// cool mutable update....
const reducer = (state, action) => {
    console.log(action.type);
    switch(action.type){
        case 'SET_USER':
            return{...state, user:action.user};
        case 'ADD_TO_BASKET':
            //logic to adding item to asket
            return {...state, basket:[...state.basket, action.item] };  //action.item - here data comes from product
            
        case 'REMOVE_FROM_BASKET':
            // logic to remove item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)

            if(index >= 0)
            {
                // the item exist
                newBasket.splice(index, 1);  // catch only one item
                
            }else{
                console.warn('Item cant remove');
            }
            return {...state, basket:newBasket, };
            
        default:
            return state;
    }
}

export default reducer;
