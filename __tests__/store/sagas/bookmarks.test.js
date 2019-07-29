import { runSaga } from "redux-saga";
import {
  loadBookmarksSuccess,
  addBookmarkSuccess,
  removeBookmarkSuccess,
  removeBookmarkTagSuccess,
} from "../../../src/store/modules/bookmarks/actions";
import {
  loadBookmarks,
  addBookmark,
  removeBookmark,
  removeBookmarkTag,
} from "../../../src/store/modules/bookmarks/sagas";

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

describe("Bookmarks saga", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should be able to add bookmark", async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, addBookmark, { bookmark: baseData[0] }).toPromise();

    expect(localStorage.setItem).toHaveBeenCalledWith("bookmarks", JSON.stringify([baseData[0]]));
    expect(dispatch).toHaveBeenCalledWith(addBookmarkSuccess(baseData[0]));
  });

  it("should be able to fetch bookmarks", async () => {
    const dispatch = jest.fn();

    await baseData.forEach(async (b) => {
      await runSaga({ dispatch }, addBookmark, { bookmark: b }).toPromise();
    });

    await runSaga({ dispatch }, loadBookmarks).toPromise();

    expect(localStorage.getItem).toHaveBeenCalledWith("bookmarks");
    expect(dispatch).toHaveBeenCalledWith(loadBookmarksSuccess(baseData));
  });

  it("should be able to remove bookmark", async () => {
    const dispatch = jest.fn();
    const expected = baseData.filter(b => b.id !== 1);

    await baseData.forEach(async (b) => {
      await runSaga({ dispatch }, addBookmark, { bookmark: b }).toPromise();
    });

    await runSaga({ dispatch }, removeBookmark, { id: 1 }).toPromise();

    expect(localStorage.setItem).toHaveBeenCalledWith("bookmarks", JSON.stringify(expected));
    expect(dispatch).toHaveBeenCalledWith(removeBookmarkSuccess(expected));
  });

  it("should be able to remove tag on bookmark", async () => {
    const dispatch = jest.fn();
    const expected = { ...baseData[0], tags: baseData[0].tags.filter(t => t !== "javascript") };

    await runSaga({ dispatch }, addBookmark, { bookmark: baseData[0] }).toPromise();

    await runSaga({ dispatch }, removeBookmarkTag, { id: baseData[0].id, tag: "javascript" }).toPromise();

    expect(localStorage.setItem).toHaveBeenCalledWith("bookmarks", JSON.stringify([expected]));
    expect(dispatch).toHaveBeenCalledWith(removeBookmarkTagSuccess([expected]));
  });
});
