import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import BookmarkList from "../../src/components/BookmarkList";
import { addBookmark } from "../../src/store/modules/bookmarks/actions";

jest.mock("react-redux");

// describe("BookmarkList component", () => {
//   it("should render bookmark list", () => {
//     useSelector.mockImplementation(fn => fn({
//       bookmarks: ["Node.js", "ReactJS"],
//     }));

//     const { getByTestId, getByText } = render(<BookmarkList />);

//     expect(getByTestId("bookmark-list")).toContainElement(getByText("Node.js"));
//     expect(getByTestId("bookmark-list")).toContainElement(getByText("ReactJS"));
//   });

//   it("should be able to add new bookmark", () => {
//     const { getByTestId, getByLabelText } = render(<BookmarkList />);

//     const dispatch = jest.fn();

//     useDispatch.mockReturnValue(dispatch);

//     fireEvent.change(getByLabelText("Title"), { target: { value: "Node.js" } });
//     fireEvent.submit(getByTestId("bookmark-form"));

//     expect(dispatch).toHaveBeenLastCalledWith(addBookmark("Node.js"));
//   });
// });
