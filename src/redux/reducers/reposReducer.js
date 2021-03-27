import * as ActionTypes from '../ActionTypes';

export const ReposReducer = (state = {isLoading: true, 
    repos:[], errorRepos:null}, action) => {
    switch (action.type) {
        case ActionTypes.SET_REPOS:
            return {...state, 
                    repos: action.payload,
                    errorRepos:null,
                    isLoading: false
                };
        case ActionTypes.SET_ERROR_REPOS:
            return {...state, 
                    errorRepos: action.payload,
                    isLoading: false
                };
        case ActionTypes.REPOS_LOADING:
            return {...state, 
                    isLoading: true, 
                    errorRepos: null, 
                    repos: []}
        default:
            return state;
    }
};