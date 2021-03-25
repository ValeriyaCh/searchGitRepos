import * as ActionTypes from '../ActionTypes';

export const ReposReducer = (state = {
    repos:[]}, action) => {
    switch (action.type) {
        case ActionTypes.SET_REPOS:
            return {...state, 
                    repos: action.payload
                };
        default:
            return state;
    }
};