import React from 'react';
import './Comment.scss';

const Comment = (props) => {
  return (
    <div className="comment">
      <p className="username">John Doe</p>
      <p className="content">Excelente Product {':)'}</p>
    </div>
  );
};

export default Comment;
