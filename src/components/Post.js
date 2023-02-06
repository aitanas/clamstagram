import React from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

function Post(props){
  return ( 
    <React.Fragment>
      <img src={props.content} alt="Post" className="postImg"/><br />
      <strong>{props.userName}</strong> {props.caption}
      <CommentList />
    </React.Fragment>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  caption: PropTypes.string
};


export default Post;