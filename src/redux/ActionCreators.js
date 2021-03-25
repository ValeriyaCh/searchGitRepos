import * as ActionTypes from './ActionTypes';
import { gitUrl } from './gitUrl';

export const setRepos = (repos) => ({
    type: ActionTypes.SET_REPOS,
    payload: repos
});

export const getRepos = (username = 'ValeriyaCh') => (dispatch) => {

    return fetch(gitUrl + 'users/' + username + '/repos')
            .then(response => {
                if (response.ok) {
                return response;
                } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
                }
            },
            error => {
                    var errmess = new Error(error.message);
                    throw errmess;
            })
            .then(response => response.json())
            .then(repos => dispatch(setRepos(repos)));
    }
