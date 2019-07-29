import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";

import store from "../store";
import {
  Header, Body, BookmarkList, BookmarkForm, BookmarkSearch, BookmarkAction,
} from "../components";
import { Container } from "./styles";

const App = () => {
  const [filter, setFilter] = useState("");
  const [action, setAction] = useState(undefined);

  useEffect(() => {
    if (action === "add") {
      setFilter("");
    }
  }, [action]);

  const onChangeTerm = (term) => {
    setFilter(term);
  };

  return (
    <Provider store={store}>
      <Header />
      <Body>
        <Container>
          <BookmarkAction onChange={setAction} />
          <div>
            {action === "add" && <BookmarkForm />}
            {action === "search" && <BookmarkSearch onChange={onChangeTerm} />}
          </div>
        </Container>
        <BookmarkList filter={filter} />
      </Body>
    </Provider>
  );
};

export default hot(App);
