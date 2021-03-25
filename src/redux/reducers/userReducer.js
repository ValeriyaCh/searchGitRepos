import * as ActionTypes from '../ActionTypes';

export const UserReducer = (state = {
    user:[]}, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {...state, 
                    user: action.payload
                };
        default:
            return state;
    }
};