import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { addBookmark } from "../../store/modules/bookmarks/actions";

import { Container } from "./styles";

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addBookmarkAction: addBookmark,
  },
  dispatch,
);

@connect(
  null,
  mapDispatchToProps,
)
class BookmarkForm extends React.Component {
  static propTypes = {
    addBookmarkAction: PropTypes.func.isRequired,
  };

  state = {
    title: "",
    link: "",
    tags: "",
  };

  objectRefs = {
    title: React.createRef(),
    link: React.createRef(),
    tags: React.createRef(),
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    const { title, link, tags } = this.state;
    const { addBookmarkAction } = this.props;
    e.preventDefault();
    addBookmarkAction({ title, link, tags: tags.split(" ") });
    this.setState({ title: "", link: "", tags: "" });
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      switch (e.target.name) {
        case "title":
          this.objectRefs.link.current.focus();
          e.preventDefault();
          break;
        case "link":
          this.objectRefs.tags.current.focus();
          e.preventDefault();
          break;
        default:
      }
    }
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmitForm}>
          {["title", "link", "tags"].map(i => (
            <input
              ref={this.objectRefs[i]}
              key={i}
              name={i}
              placeholder={i}
              required
              value={this.state[i]}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          ))}
          <button type="submit" />
        </form>
      </Container>
    );
  }
}

export default BookmarkForm;
