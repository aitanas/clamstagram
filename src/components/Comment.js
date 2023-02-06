import React from 'react';
import PropTypes from "prop-types";

function Comment(props){
  return (
    <React.Fragment>
      <span class="comment"><strong>{props.userName}</strong> {props.text}</span>
    </React.Fragment>
  );
}

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;