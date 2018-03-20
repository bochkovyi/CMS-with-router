import React, { Component } from "react";

// AsyncComponent code taken from here:
// https://scotch.io/tutorials/lazy-loading-routes-in-react

// If this component does not work well for you, here is the alternative
// https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4

// Or even this one from Airbnb
// https://medium.com/airbnb-engineering/server-rendering-code-splitting-and-lazy-loading-with-react-router-v4-bfe596a6af70
export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
    return AsyncComponent;
}