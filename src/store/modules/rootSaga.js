import { all } from "redux-saga/effects";

import bookmarks from "./bookmarks/sagas";

export default function* rootSaga() {
  return yield all([bookmarks]);
}
