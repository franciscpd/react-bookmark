import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const actionSearch = require("../../../assets/images/Lupa.svg");
const actionSearchActive = require("../../../assets/images/Lupa active.svg");

const actionAdd = require("../../../assets/images/Adicionar.svg");
const actionAddActive = require("../../../assets/images/Adicionar active.svg");

const BookmarkAction = ({ onChange }) => {
  const [action, setAction] = useState("add");

  useEffect(() => {
    onChange(action);
  }, [action, onChange]);

  return (
    <Container reverse={action === "search"}>
      <button type="button" onClick={() => setAction("search")}>
        <img src={action === "search" ? actionSearchActive : actionSearch} alt="Pesquisar" />
      </button>

      <button type="button" onClick={() => setAction("add")}>
        <img src={action === "add" ? actionAddActive : actionAdd} alt="Adicionar" />
      </button>
    </Container>
  );
};

BookmarkAction.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default BookmarkAction;
