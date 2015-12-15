import React from 'react';
import StarRating from 'react-star-rating';
import Time from 'react-time';

const ReviewItem = ({ data }) => {
  return (
    <li className="reviews__item">
      <article className="review">
        <header className="review__header">
          <h2><span className="review__title">{data.title}</span> <StarRating name="disabled" disabled={true} size={16} totalStars={5} rating={Number(data.rating)} /></h2>
        </header>
        <footer className="review__footer">
          <span className="review__author">{data.author.name}</span>
          <span className="review__country">{data.country.toUpperCase()}</span>
          <span className="review__date"><Time value={data.date} titleFormat="YYYY/MM/DD HH:mm" relative /></span>
        </footer>
        <section className="review__body">
          <p>{data.content}</p>
        </section>
      </article>
    </li>
  );
}

export default ReviewItem;
