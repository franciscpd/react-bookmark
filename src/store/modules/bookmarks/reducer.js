import produce from "immer";

export const INITIAL_STATE = [];

export default function bookmarks(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_BOOKMARK_SUCCESS":
        draft.push(action.payload.bookmark);
        break;
      case "LOAD_BOOKMARKS_SUCCESS":
      case "REMOVE_BOOKMARK_SUCCESS":
      case "REMOVE_BOOKMARK_TAG_SUCCESS":
        return action.payload.bookmarks;
      default:
    }

    return draft;
  });
}
