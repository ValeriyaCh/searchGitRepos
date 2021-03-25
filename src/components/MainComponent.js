import React, { useEffect } from 'react';
import { getRepos } from '../redux/ActionCreators';
import Repos from './ReposComponent';

import {useDispatch, useSelector} from "react-redux";

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos)

    useEffect(()=>{
        dispatch(getRepos())
    }, [])

    return (
        <div>
                <Repos repos={repos}/>
        </div>
    );
};

export default Main;
