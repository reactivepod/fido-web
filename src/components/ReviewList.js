import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews, selected }) => {
  const generateKey = (id, review) => `${id}-${review.date.valueOf()}`;

  const renderItems = () => {
    if (reviews[selected]) {
      return reviews[selected].reviews.map((review) => <ReviewItem data={review} key={generateKey(selected, review)} />)
    } else {
      return <div />
    }
  }

  return (
    <section className="reviews">
        <ul className="reviews__list">
          {renderItems()}
        </ul>
    </section>
  );
}

export default ReviewList;
