import {createStore, combineReducers, applyMiddleware } from 'redux';
import { ReposReducer } from './reducers/reposReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const Store = () => {
    const store = createStore(
        combineReducers({
            repos: ReposReducer
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}