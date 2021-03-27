import * as ActionTypes from '../ActionTypes';

export const UserReducer = (state = {
    user:[], errorUser: null}, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {...state, 
                    user: action.payload,
                    errorUser: null
                };
        case ActionTypes.SET_ERROR_USER:
            return {...state, 
                    errorUser: action.payload
                };
        case ActionTypes.RESET_USER_STATE:
            return {...state, 
                user: [], 
                errorUser: null
            };
        default:
            return state;
    }
};