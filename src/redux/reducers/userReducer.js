import {LOGIN, LOGOUT,UPDATE_USER, ADD_CART} from '../types/userTypes';

const initialState = {
    user: {},
    productCart: [],
    token: ""
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CART :
            return {
                ...state,
                productCart: action.payload.productCart
            }
        case LOGIN :
            return {
                ...state,
                user : action.payload.user,
                token : action.payload.token
            }
        case LOGOUT :
            return initialState

        case UPDATE_USER :
            return {
                ...state,
                user : action.payload
            }
        default : 
            return state
    }
};

export default userReducer;