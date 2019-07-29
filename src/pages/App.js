import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";

import store from "../store";
import { Header, Body, BookmarkList } from "../components";

const App = () => (
  <Provider store={store}>
    <Header />
    <Body>
      <BookmarkList />
    </Body>
  </Provider>
);

export default hot(App);
