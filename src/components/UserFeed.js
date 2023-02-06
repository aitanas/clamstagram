import React from "react";
import Post from "./Post";
import StoryList from "./StoryList";
import Shellder from './../img/shellder.jpg';
import SteamedClams from './../img/steamed-clams.jpeg';

const mainUserPosts = [
  {
    userName: 'clamluver69',
    content: SteamedClams,
    caption: 'ready to eat!'
  },
  {
    userName: 'pokefan420',
    content: Shellder,
    caption: 'pprrrbbbr'
  }
]

function UserFeed(){
  return ( 
    <React.Fragment>
      <StoryList />
        {mainUserPosts.map((post, index) =>
        <Post names={post.userName}
          location={post.content}
          issue={post.caption}
          key={index}/>
        )}
    </React.Fragment>
  );
}


export default UserFeed;