import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews, podcasts }) => {
  const renderItem = ({id, name}) => {
    if (reviews[id] && reviews[id].reviews) {
      return (
        <div>
          <h1>{name}</h1>
          <ul>
            {reviews[id].reviews.map(review => <ReviewItem review={review} />)}
          </ul>          
        </div>
      );
    } else {
      return <ul />;
    }
  };

  return (
    <section className="reviews tk-brandon-grotesque">
        {podcasts.map(renderItem)}
    </section>
  );
}

export default ReviewList;
