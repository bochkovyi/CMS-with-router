import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({tabs}) => (
<div className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
        <Link className="navbar-brand" to="/">CMS With Routing (Link To First Item)</Link>
        <div id="navbarResponsive" className="collapse navbar-collapse">
            <ul className="navbar-nav">
                {tabs.map(tab => {
                    return (<li key={tab.id} className="nav-item">
                        <Link className="nav-link" to={'/' + tab.id}>{tab.title}</Link>
                    </li>);
                })}
                
            </ul>
        </div>
    </div>
</div>
);

export default Nav;