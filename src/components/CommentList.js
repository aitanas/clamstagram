import React from 'react';
import Comment from './CommentList';

const mainCommentList = [
  {
    userName: 'clamluver69',
    text: 'wow, thats hot!'
  },
  {
    userName: 'Xx_gottaCatchEmAll_xX',
    text: 'still havent found me shellder :('
  }
];

function CommentList(){
  return (
    <React.Fragment>
      {mainCommentList.map((comment, index) => 
        <Comment userName={comment.userName}
          comment={comment.text}
          key={index}/>
      )};
    </React.Fragment>
  );
}

export default CommentList;