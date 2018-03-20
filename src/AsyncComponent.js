import React, { Component } from "react";

/**
 * AsyncComponent code taken from here:
 * https://scotch.io/tutorials/lazy-loading-routes-in-react
 * 
 * Left here for reference.
 * Currently this solution is used:
 * https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4
 * (https://www.npmjs.com/package/react-async-component)
 * 
 * It seems to be more reliable, even though chuncks got bigger (+ around 1,7 KB in total)
 * 
 * Another article from Aitbnb left for reference
 * https://medium.com/airbnb-engineering/server-rendering-code-splitting-and-lazy-loading-with-react-router-v4-bfe596a6af70
 */
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