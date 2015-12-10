import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <li>
      <h2>{review.title}</h2>
      <p>{review.content}</p>
    </li>
  );
}

export default ReviewItem;
