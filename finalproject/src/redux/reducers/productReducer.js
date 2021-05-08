import {ADD_CART} from '../types/productTypes';

const initialState = {
    productCart: {},
    
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CART :
            return {
                ...state,
                ...action.payload,
            }
       
        default : 
            return state
    }
};

export default productReducer;