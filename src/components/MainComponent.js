import React, { useEffect, useState } from 'react';
import { getRepos } from '../redux/ActionCreators';
import Repos from './ReposComponent';
import Home from './HomeComponent';
import {useDispatch, useSelector} from "react-redux";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos);
    const user = useSelector(state => state.user.user);

    useEffect(()=>{
        dispatch(getRepos(user.login))
    }, [user]);

    return (
        <div>
            <h5 className='navbar'> Searcher </h5>
            <Switch>
                  <Route path='/home' component={() => <Home user={user}/> } />
                  <Route path='/repos' component={() => <Repos repos={repos}/>} />
                  <Redirect to="/home" />
              </Switch>
        </div>
    );
};

export default Main;
