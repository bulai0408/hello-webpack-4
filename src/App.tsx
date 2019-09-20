import { hot } from "react-hot-loader/root";
import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "@styles/index.less";
import { Home, Bird } from "./RouterConfig";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/bird" component={Bird} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default hot(App);
