import * as ActionTypes from './ActionTypes';
import { gitUrl } from './gitUrl';
import history from '../components/HistoryComponent';

export const setRepos = (repos) => ({
    type: ActionTypes.SET_REPOS,
    payload: repos
});

export const setUser = (user) => ({
    type: ActionTypes.SET_USER,
    payload: user
});

export const setErrorUser = (message) => ({
    type: ActionTypes.SET_ERROR_USER,
    payload: message
});

export const setErrorRepos = (message) => ({
    type: ActionTypes.SET_ERROR_REPOS,
    payload: message
});

export const resetUserState = () => ({
    type: ActionTypes.RESET_USER_STATE
})

export const resetState = () => (dispatch) => {
    return dispatch(resetUserState());
}

export const reposLoading = () => ({
    type: ActionTypes.REPOS_LOADING
});



export const getRepos = (username) => (dispatch) => {

    dispatch(reposLoading());

    return fetch(gitUrl + 'users/' + username + '/repos')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    throw response;
                }
            })
            .then(response => response.json())
            .then(repos => dispatch(setRepos(repos)))
            .catch(error => dispatch(setErrorRepos(error)));
    }

export const getUser = (username) => (dispatch) => {

    return fetch(gitUrl + 'users/' + username)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    throw response;
                }
            })
            .then(response => response.json())
            .then(user => {dispatch(setUser(user)); dispatch(getRepos(user.login)); history.push('/repos')})
            .catch(error => dispatch(setErrorUser(error.status)));
    }
