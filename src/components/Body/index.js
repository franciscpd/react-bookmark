import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const Body = ({ children }) => <Container>{children}</Container>;

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Body.defaultProps = {
  children: null,
};

export default Body;
