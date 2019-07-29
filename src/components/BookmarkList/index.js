import React from "react";
import { useSelector } from "react-redux";

const BookmarkList = () => {
  const bookmarks = useSelector(state => state.bookmarks);

  return (
    <div>
      <ul data-testid="bookmark-list">
        {bookmarks.map(bookmark => (
          <li key={bookmark}>{bookmark}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
