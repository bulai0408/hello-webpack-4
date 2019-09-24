import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import '@styles/index.less';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </Router>
    );
  }
}

export default hot(App);
