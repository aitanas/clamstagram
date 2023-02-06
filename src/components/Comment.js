import React from 'react';
import PropTypes from "prop-types";

function Comment(props){
  return (
    <React.Fragment>
      <p><strong>{props.userName}</strong><br />
      {props.text}</p>
    </React.Fragment>
  );
}

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;