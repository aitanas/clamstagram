import React from "react";
import Post from "./Post";
import StoryList from "./StoryList";

function UserFeed(){
  return ( 
    <React.Fragment>
      <StoryList />
      <Post />
    </React.Fragment>
  );
}


export default UserFeed;