import reducer, { INITIAL_STATE } from "../../../src/store/modules/bookmarks/reducer";
import * as Bookmarks from "../../../src/store/modules/bookmarks/actions";

describe("Bookmarks reducer", () => {
  it("ADD_BOOKMARK_SUCCESS", () => {
    const baseData = {
      id: 1,
      title: "Node.js",
      link: "https://nodejs.org",
      tags: ["javascript", "backend"],
    };
    const state = reducer(INITIAL_STATE, Bookmarks.addBookmarkSuccess({ ...baseData }));
    expect(state).toStrictEqual([{ ...baseData }]);
  });

  it("LOAD_BOOKMARKS_SUCCESS", () => {
    const baseData = [
      {
        id: 1,
        title: "Node.js",
        link: "https://nodejs.org",
        tags: ["javascript", "backend"],
      },
      {
        id: 2,
        title: "ReactJS",
        link: "https://pt-br.reactjs.org/",
        tags: ["javascript", "react", "spa"],
      },
    ];
    const state = reducer(INITIAL_STATE, Bookmarks.loadBookmarksSuccess([...baseData]));
    expect(state).toStrictEqual([...baseData]);
  });
});
