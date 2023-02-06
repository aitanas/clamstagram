import React from "react";
import Story from "./Story";
import Tahini from "./../img/tahini.jpg";
import A1 from "./../img/a1.jpg";
import Ranch from "./../img/Ranch.jpg";
import Vinaigrette from "./../img/Vinaigrette.jpg";
import Caesar from "./../img/caesar.jpeg";

const mainStoryList = [
  {
    userName: "Tahini",
    content: Tahini
  },
  {
    userName: "Caesar",
    content: Caesar
  },
  {
    userName: "Vinaigrette",
    content: Vinaigrette
  },
  {
    userName: "Ranch",
    content: Ranch
  },
  {
    userName: "A1",
    content: A1
  }
]

function StoryList(){
  return ( 
    <React.Fragment>
    <hr/>
    {mainStoryList.map((story, index) =>
      <Story userName={story.userName}
      content={story.content}
      key={index} />
      )};
      </React.Fragment> 
  );
}


export default StoryList;