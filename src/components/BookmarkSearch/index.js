import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const BookmarkSearch = ({ onChange }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    onChange(term);
  }, [term, onChange]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmitForm}>
        <input name="term" placeholder="Filter by Tag" required value={term} onChange={handleChange} />
      </form>
    </Container>
  );
};

BookmarkSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default BookmarkSearch;
