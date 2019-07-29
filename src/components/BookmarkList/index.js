import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeBookmarkTag, removeBookmark } from "../../store/modules/bookmarks/actions";

import {
  Container, Title, Bookmark, Tag, Button,
} from "./styles";

const deleteTag = require("../../../assets/images/X.svg");
const deleteIcon = require("../../../assets/images/Trash.svg");

const BookmarkList = () => {
  const bookmarks = useSelector(state => state.bookmarks);
  const dispatch = useDispatch();

  return (
    <Container>
      <ul>
        {bookmarks.map((bookmark, index) => (
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
      </ul>
    </Container>
  );
};

export default BookmarkList;
