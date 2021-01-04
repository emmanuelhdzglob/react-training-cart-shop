import React from 'react';
import './CommentsSection.scss';
import Comment from './Comment';

const CommentsSection = () => {
  return (
    <div className="comments-section">
      <h4 className="has-text-weight-normal">Comments:</h4>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentsSection;
