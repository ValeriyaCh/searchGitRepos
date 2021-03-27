import React from 'react';
import Repos from './ReposComponent';
import Home from './HomeComponent';
import {useSelector} from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = () => {
    const repos = useSelector(state => state.repos);
    const user = useSelector(state => state.user);

    return (
        <div>
            <h5 className='navbar'> Searcher </h5>
              <Switch>
                    <Route path='/home' component={() => <Home user={user}/> } />
                    <Route path='/repos' component={() => <Repos repos={repos} user={user.user}/>} />
                    <Redirect to="/home" />
              </Switch>
        </div>
    );
};

export default Main;
