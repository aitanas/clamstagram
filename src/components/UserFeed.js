import React from "react";
import Post from "./Post";
import StoryList from "./StoryList";
import Shellder from './../img/shellder.jpg';
import SteamedClams from './../img/steamed-clams.jpeg';
import clamluver from './../img/usericon1.png';
import pokefan from './../img/usericon2.png';

const mainUserPosts = [
  {
    userName: 'clamluver69',
    userPhoto: clamluver,
    content: SteamedClams,
    caption: 'ready to eat!'
  },
  {
    userName: 'pokefan420',
    userPhoto: pokefan,
    content: Shellder,
    caption: 'pprrrbbbr'
  },
  {
    userName: 'pokefan420',
    userPhoto: pokefan,
    content: Shellder,
    caption: 'pprrrbbbr'
  },
  {
    userName: 'pokefan420',
    userPhoto: pokefan,
    content: Shellder,
    caption: 'pprrrbbbr'
  }
]

function UserFeed(){
  return ( 
    <div className="user-feed">
      <StoryList />
        {mainUserPosts.map((post, index) =>
        <Post userName={post.userName}
          content={post.content}
          userPhoto={post.userPhoto}
          caption={post.caption}
          key={index}/>
        )}
    </div>
  );
}


export default UserFeed;