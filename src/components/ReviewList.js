import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews, selected }) => {
  const generateKey = (id, review) => `${id}-${review.date.valueOf()}`;

  if (reviews[selected]) {
    const podcast = reviews[selected].meta;

    return (
      <div>
        <section className="meta">
          <div>
            <h2 className="meta__name">{podcast.name}</h2>
            <p className="meta__description">{podcast.description}</p>
          </div>
          <img src={podcast.image['170']} className="meta__image" />
        </section>
        <section className="reviews">
            <ul className="reviews__list">
              {reviews[selected].reviews.map((review) => <ReviewItem data={review} key={generateKey(selected, review)} />)}
            </ul>
        </section>
      </div>
    );
  } else {
    return <div />
  }

}

export default ReviewList;
