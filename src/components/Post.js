import React from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

function Post(props){
  return ( 
    <React.Fragment>
      <div className="post-heading"><img src={props.userPhoto} alt="avatar" className="user-photo"/><span className="post-user"><strong>{props.userName}</strong></span></div>
      <img src={props.content} alt="Post" className="postImg"/><br />
      <div id="post-options" className="post-options">
        <div><i class="bi bi-heart post-option"></i> <i class="bi bi-chat post-option"></i> <i class="bi bi-share post-option"></i> </div><div><i class="bi bi-bookmark post-option"></i></div>
      </div>
      <div class="post-info">
        <strong>69 likes</strong><br />
        <strong>{props.userName}</strong> {props.caption}<br />
        <span class="view-all-comments">View all comments</span>
        <CommentList />
      </div>
      <span class="date">2 hours ago</span>
      <br /><br />
    </React.Fragment>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  caption: PropTypes.string
};


export default Post;