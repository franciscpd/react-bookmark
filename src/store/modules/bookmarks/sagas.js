import {
  call, put, all, takeLatest,
} from "redux-saga/effects";
import {
  loadBookmarksFailure,
  loadBookmarksSuccess,
  addBookmarkSuccess,
  addBookmarkFailure,
  removeBookmarkSuccess,
  removeBookmarkTagSuccess,
  removeBookmarkFailure,
  removeBookmarkTagFailure,
} from "./actions";

export function* loadBookmarks() {
  try {
    const bookmarks = yield call(() => JSON.parse(localStorage.getItem("bookmarks")) || []);
    yield put(loadBookmarksSuccess(bookmarks));
  } catch (error) {
    yield put(loadBookmarksFailure());
  }
}

export function* addBookmark({ bookmark }) {
  try {
    const bookmarks = yield call(() => JSON.parse(localStorage.getItem("bookmarks")) || []);
    bookmark = { id: (Math.max(bookmarks.map(b => b.id)) || 0) + 1, ...bookmark };
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    yield put(addBookmarkSuccess(bookmark));
  } catch (error) {
    yield put(addBookmarkFailure());
  }
}

export function* removeBookmark({ id }) {
  try {
    const bookmarks = yield call(() => JSON.parse(localStorage.getItem("bookmarks")) || []);
    const bookmarkIndex = bookmarks.map(b => b.id).indexOf(id);
    if (bookmarkIndex >= 0) {
      bookmarks.splice(bookmarkIndex, 1);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    yield put(removeBookmarkSuccess(bookmarks));
  } catch (error) {
    yield put(removeBookmarkFailure());
  }
}

export function* removeBookmarkTag({ id, tag }) {
  try {
    const bookmarks = yield call(() => JSON.parse(localStorage.getItem("bookmarks")) || []);
    const bookmarkIndex = bookmarks.map(b => b.id).indexOf(id);
    if (bookmarkIndex >= 0) {
      const tagIndex = bookmarks[bookmarkIndex].tags.indexOf(tag);
      bookmarks[bookmarkIndex].tags.splice(tagIndex, 1);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    yield put(removeBookmarkTagSuccess(bookmarks));
  } catch (error) {
    yield put(removeBookmarkTagFailure());
  }
}

export default all([
  takeLatest("LOAD_BOOKMARKS", loadBookmarks),
  takeLatest("ADD_BOOKMARK", addBookmark),
  takeLatest("REMOVE_BOOKMARK", removeBookmark),
  takeLatest("REMOVE_BOOKMARK_TAG", removeBookmarkTag),
]);
