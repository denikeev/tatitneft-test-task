import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { commentsSelector, addComment } from '../slices/commentsSlice.js';

const CommentsBox = ({ articleId }) => {
  const dispatch = useDispatch();
  const [commentValue, setComment] = useState('');
  const allComments = useSelector(commentsSelector.selectAll);
  const comments = allComments.filter((comment) => comment.articleId === articleId);

  const handleComment = () => {
    dispatch(addComment({ text: commentValue, articleId }));
    setComment('');
  };

  return (
    <div className="comments mt-4">
      <strong>Комментарии</strong>
      <hr className="comments__line" />
      <FloatingLabel controlId="text" label="Оставить комментарий..." className="mb-4">
        <Form.Control
          as="textarea"
          value={commentValue}
          onChange={(e) => setComment(e.target.value)}
          className="comments__textarea"
          name="text"
          placeholder="Оставить комментарий..."
          autoComplete="text"
        />
      </FloatingLabel>
      <Button onClick={handleComment} className="ms-md-auto mb-3" variant="primary" type="button">Комментировать</Button>
      <div className="comments__box">
        {comments.map((comment) => <p className="bg-body-tertiary rounded-4 p-3" key={comment.id}>{comment.text}</p>)}
      </div>
    </div>
  );
};

export default CommentsBox;
