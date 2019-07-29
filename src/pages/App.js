import React, { useState } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";

import store from "../store";
import {
  Header, Body, BookmarkList, BookmarkForm, BookmarkSearch,
} from "../components";

const App = () => {
  const [filter, setFilter] = useState("");

  const onChangeTerm = (term) => {
    setFilter(term);
  };

  return (
    <Provider store={store}>
      <Header />
      <Body>
        <BookmarkForm />
        <BookmarkSearch onChange={onChangeTerm} />
        <BookmarkList filter={filter} />
      </Body>
    </Provider>
  );
};

export default hot(App);
