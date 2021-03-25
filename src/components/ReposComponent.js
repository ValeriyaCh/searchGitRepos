import React, { useState } from 'react';
import { Input } from "reactstrap";

const Repos = (props) => {
    const [searchValue, setSearchValue] = useState("")
    
    const repositories = props.repos.repos.filter((repo) => {
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
            <div className="col-12  m-1"  key={repo.id}>
                <p> {repo.name} </p>
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
                    <div className="col-12 col-md-3 offset-md-4">
                        <h3>All repositories</h3>
                        <hr />
                    </div>    
                    <div className="col-12 col-md-3 offset-md-4">
                    <Input type="text" id="searchReposArea" value={searchValue} 
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text" placeholder="Search..." />
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 col-md-3 offset-md-4">
                        {repositories}
                    </div>    
                </div>
            </div>
        );
    }
export default Repos;