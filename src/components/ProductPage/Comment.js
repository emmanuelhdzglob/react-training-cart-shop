import React from 'react';
import './Comment.scss';

const Comment = ({ username, content }) => {
  return (
    <div className="comment">
      <p className="username">{username}</p>
      <p className="content">{content}</p>
    </div>
  );
};

export default Comment;
