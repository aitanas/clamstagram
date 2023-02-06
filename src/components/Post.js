import React from "react";
import CommentList from "./CommentList";

function Post(props){
  return ( 
    <React.Fragment>
      <img src={props.content} alt=""/>
      <CommentList />
    </React.Fragment>
  );
}


export default Post;