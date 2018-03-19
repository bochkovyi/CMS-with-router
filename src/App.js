import React, { Component } from 'react';
import './App.css';

import {
  Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';
import asyncComponent from './AsyncComponent'
import { NotFound } from './NotFound/NotFound';

const Chart = asyncComponent(() =>
    import('./Chart/Chart').then(module => module.default)
)

const List = asyncComponent(() =>
    import('./List/List').then(module => module.default)
)

const Table = asyncComponent(() =>
    import('./Table/Table').then(module => module.default)
)

const API = '/tabs.json';
const SORTING_FUNCTION = (tabA, tabB) => tabA.order - tabB.order;

const history = createBrowserHistory();

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
        console.log(response);
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
      console.log('Error is happened', error);
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <Router history={history}>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Lazy Loading Routes</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/list">
                                    <span className="navbar-item">List</span>
                                </Link>
                                <Link to="/chart">
                                    <span className="navbar-item">Chart</span>
                                </Link>
                                <Link to="/table">
                                    <span className="navbar-item">Table</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={Table} />
                            <Route path="/table" component={Table} />
                            <Route path="/chart" component={Chart} />
                            <Route path="/list" component={List} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </section>
                </div>
            </Router>

        {tabs.map(tab =>
          <div key={tab.id}>
            <a href={tab.path}>{tab.id} {tab.title} {tab.order}</a>
          </div>
        )}
      </div>
    );
  }
}

export default App;
