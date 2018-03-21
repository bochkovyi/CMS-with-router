import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = ({tabs, history}) => (
<div className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
        <Link className="navbar-brand" to={`${process.env.PUBLIC_URL}/`}>CMS With Routing (Link To First Item)</Link>
        <div id="navbarResponsive" className="collapse navbar-collapse">
            <ul className="navbar-nav">
                {tabs.map(tab => {
                    const linkTo = `${process.env.PUBLIC_URL}/${tab.id}`;
                    const className = history.location.pathname === linkTo? 'nav-link active' : 'nav-link';
                    return (<li key={tab.id} className="nav-item">
                        <Link className={className} to={linkTo}>{tab.title}</Link>
                    </li>);
                })}  
            </ul>
        </div>
    </div>
</div>
);

export default withRouter(Nav);