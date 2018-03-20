import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom'

import asyncComponent from './AsyncComponent'
import NotFound from './NotFound/NotFound';

const API = '/tabs.json';
const SORTING_FUNCTION = (tabA, tabB) => tabA.order - tabB.order;

const Loading = () => <p>Loading ...</p>;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tabs: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Could not load the data');
        }
      })
      .then(data => this.setState({ tabs: data.sort(SORTING_FUNCTION), isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { tabs, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <Loading />;
    }
    
    let HomeComponent = false;

    if ( tabs && tabs[0] ) {
        HomeComponent = asyncComponent(() => import('./' + tabs[0].path).then(module => module.default));
    }

    return (
        <BrowserRouter>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Lazy Loading Routes</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                {this.state.tabs && this.state.tabs.map(tab => {
                                    return <Link key={tab.id} to={'/' + tab.id}>
                                        <span className="navbar-item">{tab.title}</span>
                                    </Link>;
                                })}
                            </div>
                        </nav>
                    </header>
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={HomeComponent || Loading} />

                            {this.state.tabs && this.state.tabs.map(tab => {
                                const Component = asyncComponent(() => import('./' + tab.path).then(module => module.default))
                                return <Route key={tab.id} path={'/' + tab.id} component={Component} />;
                            })}
                            
                            <Route component={NotFound} />
                        </Switch>
                    </section>
                </div>
            </BrowserRouter>
    );
  }
}

export default App;
