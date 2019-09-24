import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import renderRouter from './RouterConfig';

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <IconStyle />
        {renderRouter()}
      </Router>
    );
  }
}

export default hot(App);
