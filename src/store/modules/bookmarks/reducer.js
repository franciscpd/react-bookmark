import produce from "immer";

export const INITIAL_STATE = [
  {
    id: 1,
    title: "Node.js",
    link: "http://www.google.com",
    tags: ["javascript", "node"],
  },
  {
    id: 2,
    title: "ReactJS",
    link: "www.google.com",
    tags: ["javascript", "react"],
  },
];

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
