import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { getUser } from '../redux/ActionCreators';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody,
    CardTitle} from 'reactstrap';

function RenderUserCard (user){
    if (user.user.length === 0) {
        return (
        <div> </div>
        );
    }
    else{ 
        return(
            <Card>
                <Link to={`/repos`} >
                <CardImg top width="100%" src={user.user.avatar_url} />
                <CardBody>
                <CardTitle>{user.user.login}</CardTitle>
                {/* <CardLink href={user.user.html_url}> Go to github profile</CardLink> */}
                </CardBody>
                </Link>
            </Card>
    );
    }

}

const Home = (props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");

    function searchHandler() {
        dispatch(getUser(username))
    }

    return (
        <div className="container">
            <div className="row">
                <div class="col-12 col-md-3 offset-md-4">
                    <h3>Select the profile</h3>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Input username"/>
                    <button onClick={()=> searchHandler()} className="btn-secondary">Search</button>
                </div>
            </div>
            <div className="row">
                <div class="col-12 col-md-3 offset-md-4">
                    <RenderUserCard user={props.user}/>
                </div>
            </div>
        </div>
    );
    }
export default Home;