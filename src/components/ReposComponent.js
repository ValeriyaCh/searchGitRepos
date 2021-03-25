import React, { useState } from 'react';


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
                    <div className="col-12">
                        <h3>All repositories</h3>
                        <hr />
                    </div>    
                    <div className="search">
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input"/>
                    </div>

                </div>
                <div className="row">
                    {repositories}
                </div>
            </div>
        );
    }
export default Repos;