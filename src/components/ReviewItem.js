import React from 'react';

const ReviewItem = ({ data }) => {
  return (
    <li>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </li>
  );
}

export default ReviewItem;
