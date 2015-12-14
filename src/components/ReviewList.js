import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => {
  const generateKey = (id, review) => `${id}-${review.date.valueOf()}`;

  const renderItem = (id) => {
    if (reviews[id] && reviews[id].reviews) {
      return (
        <div>
          <ul className="reviews__list">
            {reviews[id].reviews.map((review) => <ReviewItem data={review} key={generateKey(id, review)} />)}
          </ul>
        </div>
      );
    } else {
      return <ul />;
    }
  };

  return (
    <section className="reviews">
        {Object.keys(reviews).map(renderItem)}
    </section>
  );
}

export default ReviewList;
