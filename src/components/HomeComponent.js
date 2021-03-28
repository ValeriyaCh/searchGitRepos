import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { getUser } from '../redux/ActionCreators';
import { Button, InputGroup, Input } from 'reactstrap';

const Home = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(""); // save user input

    function searchHandler() {    // on button click and no errors fetch user name
        if (!error){
            dispatch(getUser(username))
        } 
    }

    function enterSearchHandler(key) { // on "enter" and no errors fetch user name
        if (key === 'Enter' && !error) {
            dispatch(getUser(username))
        }
    }
    function validate(value) { // validate user input, can contain only digits and letters,                               
        var error = '';        //single hyphers(not in the beginning or ending), length < 40
        if (value && !/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(value))
            error = 'Invalid username';
        return error;
    }
    const error = validate(username);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3 offset-md-4">
                    <h3>Select the profile</h3>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-md-3 offset-md-4">
                    {/* {Search input} */}
                    <InputGroup className="mb-3">
                        <Input type="text" id="userSearch" value={username} 
                            onKeyDown={(e) => enterSearchHandler(e.key)} 
                            onChange={(e) => setUsername(e.target.value)} placeholder="Search user"/>
                        <Button title="homeButton" onClick={()=> searchHandler()} color="secondary">Search</Button>
                    </InputGroup>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 offset-md-4">
                    {/*  Output error messages */}
                        <p className='errorText'>{error}</p> 
                        {props.user.errorUser ? (<h6>Not found. Try again.</h6>) : (<div></div>)}
                </div>
            </div>
        </div>
    );
    }
export default Home;