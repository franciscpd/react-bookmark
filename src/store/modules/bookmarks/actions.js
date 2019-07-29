export const addBookmark = bookmark => ({
  type: "ADD_BOOKMARK",
  bookmark,
});

export const addBookmarkSuccess = bookmark => ({
  type: "ADD_BOOKMARK_SUCCESS",
  payload: { bookmark },
});

export const addBookmarkFailure = () => ({
  type: "ADD_BOOKMARKS_FAILURE",
});

export const removeBookmark = id => ({
  type: "REMOVE_BOOKMARK",
  id,
});

export const removeBookmarkSuccess = bookmarks => ({
  type: "REMOVE_BOOKMARK_SUCCESS",
  payload: { bookmarks },
});

export const removeBookmarkFailure = () => ({
  type: "REMOVE_BOOKMARK_FAILURE",
});

export const removeBookmarkTag = (id, tag) => ({
  type: "REMOVE_BOOKMARK_TAG",
  id,
  tag,
});

export const removeBookmarkTagSuccess = bookmarks => ({
  type: "REMOVE_BOOKMARK_TAG_SUCCESS",
  payload: { bookmarks },
});

export const removeBookmarkTagFailure = () => ({
  type: "REMOVE_BOOKMARK_TAG_FAILURE",
});

export const loadBookmarks = () => ({
  type: "LOAD_BOOKMARKS",
});

export const loadBookmarksSuccess = bookmarks => ({
  type: "LOAD_BOOKMARKS_SUCCESS",
  payload: { bookmarks },
});

export const loadBookmarksFailure = () => ({
  type: "LOAD_BOOKMARKS_FAILURE",
});
