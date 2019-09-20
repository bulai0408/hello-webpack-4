import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "@redux/reducers";

const logger = createLogger();

let config;

if (process.env.NODE_ENV === "production") {
  config = applyMiddleware(thunk);
} else {
  config = composeWithDevTools(applyMiddleware(thunk, logger));
}

const store = createStore(rootReducer, config);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();
