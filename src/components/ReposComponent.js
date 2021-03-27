import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, Input, Button, CardSubtitle, CardText, CardLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetState } from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';
import { FadeTransform} from 'react-animation-components';

function RenderUserCard (user){
    if (user.user.length === 0) {
        return (
        <div> </div>
        );
    }
    else{ 
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card className='userCard'>
                    <CardImg top width="100%" src={user.user.avatar_url} />
                    <CardBody>
                        <CardTitle tag='h4'>{user.user.login}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted"> In github since {new Date(user.user.created_at).getFullYear()}</CardSubtitle>
                        <CardText className="mb-2 text-muted"> 
                            <i className="fa fa-book fa-lg"></i>  {user.user.public_repos}
                        </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
    );
    }

}

function RenderRepoCard ({repo}){
    return(
        <Card className='repoCard'>
            <CardBody>
            <CardTitle tag='h4'><CardLink href={repo.html_url}> {repo.name} </CardLink></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"> {repo.description}</CardSubtitle>
            <CardText className="mb-2 text-muted bold"> 
                <i className="fa fa-code-fork mr-4">  {repo.forks_count}</i>
                <i className="fa fa-star mr-1" style={{'color': '#FDD017'}}> </i>{repo.stargazers_count}
                {repo.language ? (<i className="fa fa-circle ml-3 mr-1" style={{'fontSize': '0.5rem', 'vertical-align': '+25%'}} ></i>) : ''}{repo.language}
            </CardText>
            </CardBody>
        </Card>
    )
}

const Repos = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch();

    const repositories = props.repos.repos.filter((repo) => { // search filter and rendering of each repo
        if (searchValue === "") {
            return repo 
        }
        else {
            if (repo.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return repo
            }
        }
        }).map((repo) => {
            return (
                <div className="col-12 m-2"  key={repo.id}>
                    <RenderRepoCard repo={repo}/>
                    
                </div>
            );
        });
        
    if (props.repos.repos == null) {
        return (
        <div></div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4">
                        <h3>All repositories</h3>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4">
                        <Input type="text" id="searchReposArea" value={searchValue} 
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <RenderUserCard user={props.user}/>
                    </div>
                    <div className="col-12 col-md-4 offset-md-1">
                        {props.repos.isLoading ? (<Loading/>) : repositories}
                        
                    </div>
                    <div className="col-12 col-md offset-md-1">
                        <Link to={`/home`} >
                            <Button className="btn btn-light" onClick={()=>dispatch(resetState())}>Change User</Button>
                        </Link>
                    </div>    
                </div>
            </div>
        );
    }
export default Repos;