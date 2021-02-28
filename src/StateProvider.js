// setup data layer
// track to basket
import React, {createContext, useContext, useReducer} from 'react';

//This is Data Layer
export const  StateContext = createContext();

// Build a provider
export const StateProvider = ({reducer, initialState, children}) => {
    return(
        <StateContext.Provider value={useReducer(reducer, initialState,)}>  {/*work as store */}
            {children}
        </StateContext.Provider> 
    )
}

//this is how we use inside components
export const useStateValue  = () => useContext(StateContext);
