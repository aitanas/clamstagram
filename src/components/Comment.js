import React from 'react';
import PropTypes from "prop-types";

function Comment(props){
  return (
    <React.Fragment>
      <p><em>{props.username}</em> {props.text}</p>
    </React.Fragment>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;