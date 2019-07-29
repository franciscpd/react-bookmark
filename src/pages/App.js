import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";

import store from "../store";

const App = () => (
  <Provider store={store}>
    <h1>React bookmark</h1>
  </Provider>
);

export default hot(App);
