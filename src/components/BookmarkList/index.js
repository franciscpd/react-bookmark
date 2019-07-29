import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { removeBookmarkTag, removeBookmark, loadBookmarks } from "../../store/modules/bookmarks/actions";

import {
  Container, Title, Bookmark, Tag, Button,
} from "./styles";

const deleteTag = require("../../../assets/images/X.svg");
const deleteIcon = require("../../../assets/images/Trash.svg");

const BookmarkList = ({ filter }) => {
  const [data, setData] = useState([]);
  const bookmarks = useSelector(state => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookmarks());
  }, [dispatch]);

  useEffect(() => {
    const terms = filter.trim() !== "" ? filter.split(" ") : [];
    let tmpData = [...bookmarks];
    if (terms.length) {
      tmpData = tmpData.filter(b => b.tags.find(t => terms.find(m => t.indexOf(m) !== -1)));
    }
    setData(tmpData);
  }, [bookmarks, filter]);

  return (
    <Container>
      <ul>
        {data.map((bookmark, index) => (
          <li key={bookmark.id} style={index === bookmarks.length - 1 ? { borderBottom: "none" } : {}}>
            <Bookmark>
              <Title>{bookmark.title}</Title>
              <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
                {bookmark.link}
              </a>
              <div style={{ display: "flex" }}>
                {bookmark.tags.map(t => (
                  <Tag key={t}>
                    {t}
                    <Button
                      onClick={() => dispatch(removeBookmarkTag(bookmark.id, t))}
                      width="10px"
                      height="15px"
                      heightImg="10px"
                      margin="0 0 0 15px"
                    >
                      <img src={deleteTag} alt="Remover tag" />
                    </Button>
                  </Tag>
                ))}
              </div>
            </Bookmark>
            <Button onClick={() => dispatch(removeBookmark(bookmark.id))}>
              <img src={deleteIcon} alt="Remover bookmark" />
              Remover
            </Button>
          </li>
        ))}
        {!bookmarks.length && <span>Nenhum favorito cadastrado</span>}
        {!data.length && filter && <span>Nenhum favorito encontrado</span>}
      </ul>
    </Container>
  );
};

BookmarkList.propTypes = {
  filter: PropTypes.string,
};

BookmarkList.defaultProps = {
  filter: "",
};

export default BookmarkList;
