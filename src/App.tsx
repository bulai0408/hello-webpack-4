import { hot } from 'react-hot-loader/root';
import React, { ReactNode } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import '@styles/index.less';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { Home, Recommend, Singers, Rank, Search } from './routes';

const wrapHome = (component: ReactNode) => <Home>{component}</Home>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <IconStyle />
        <Switch>
          <Route path='/' exact={true} render={() => <Redirect to='/recommend' />} />
          <Route path='/recommend' component={() => wrapHome(<Recommend />)} />
          <Route path='/singers' component={() => wrapHome(<Singers />)} />
          <Route path='/rank' component={() => wrapHome(<Rank />)} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default hot(App);
