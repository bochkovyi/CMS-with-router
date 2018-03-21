import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav/Nav';
import { asyncComponent } from 'react-async-component';
import NotFound from './NotFound/NotFound';

const API = `${process.env.PUBLIC_URL}/tabs.json`;
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
    
    let lazyComponents = tabs.map(
        tab => {
            return {
                tab: tab,
                component: asyncComponent({ resolve: () => import(`./${tab.path}`) })
            }
        });

    const DefaultComponent = lazyComponents.length > 0 ? lazyComponents[0].component : Loading;

    return (
        <BrowserRouter>
            <div>
                <Nav tabs={tabs}/>
                <div className="container">
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DefaultComponent} />

                        {lazyComponents.map(
                            lazy => <Route key={lazy.tab.id} path={`${process.env.PUBLIC_URL}/${lazy.tab.id}`} component={lazy.component} />
                        )}
                        
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <footer>
                  <p>Made by Bogdan Bochkovyi.</p>
                  <p>Source code can be found <a href="https://github.com/bochkovyi/CMS-with-router" target="blank" rel="nofollow noopener">here</a>.</p>
                  <p>Based on <a href="https://getbootstrap.com" target="blank" rel="nofollow noopener">Bootstrap</a>. Web fonts from <a href="https://fonts.google.com/" target="blank" rel="nofollow noopener">Google</a>.</p>
                </footer>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
