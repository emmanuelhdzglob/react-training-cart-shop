import React from 'react';
import { connect } from 'react-redux';
import './CommentsSection.scss';
import Comment from './Comment';

const CommentsSection = ({ userComments }) => {
  const renderedComments = userComments.map((_comment) => {
    return (
      <Comment
        username={_comment.user}
        content={_comment.comment}
        key={_comment.user}
      />
    );
  });

  return (
    <div className="comments-section">
      <h4 className="has-text-weight-normal">Comments:</h4>
      {renderedComments}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userComments: state.activeProductDetail.comments };
};

export default connect(mapStateToProps)(CommentsSection);
