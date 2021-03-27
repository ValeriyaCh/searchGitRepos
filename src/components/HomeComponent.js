import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { getUser } from '../redux/ActionCreators';
import { Button, InputGroup, Input } from 'reactstrap';


function HandleError ({user}) {
    if (user.errorUser) {
        return(
            <p> Not found. Try again. </p>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}


const Home = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    

    function searchHandler() {
        dispatch(getUser(username))
    }

    function enterSearchHandler(key) {
        if (key === 'Enter') {
            dispatch(getUser(username))
        }
    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3 offset-md-4">
                    <h3>Select the profile</h3>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-md-3 offset-md-4">
                    <InputGroup className="mb-3">
                        <Input type="text" id="userSearch" value={username} onKeyDown={(e) => enterSearchHandler(e.key)} onChange={(e) => setUsername(e.target.value)} placeholder="Input username"/>
                        <Button onClick={()=> searchHandler()} color="secondary">Search</Button>
                    </InputGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 offset-md-4">
                     <HandleError user={props.user}/>
                </div>
            </div>
        </div>
    );
    }
export default Home;