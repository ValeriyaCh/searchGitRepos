import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ReposReducer } from './reducers/reposReducer';
import { UserReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const Store = () => {
    const store = createStore(
        combineReducers({
            repos: ReposReducer,
            user: UserReducer
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}