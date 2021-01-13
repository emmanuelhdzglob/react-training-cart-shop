import React from 'react';
import star from '../../assets/star-rate.svg';
import starHalf from '../../assets/star-rate-half.svg';
import starEmpty from '../../assets/star-rate-empty.svg';

const RatingMeter = ({ rating, width }) => {
  const getStars = () => {
    const stars = {};
    const parsedRating = parseFloat(rating);
    const lowerLimit = Math.floor(parsedRating);
    const upperLimit = Math.ceil(parsedRating);

    stars.halfStars = rating < upperLimit && rating > lowerLimit ? 1 : 0;

    stars.fullStars = lowerLimit;
    stars.emptyStars = 5 - (stars.halfStars + stars.fullStars);

    return stars;
  };

  const getRenderedStars = () => {
    const renderedStars = [];
    const { fullStars, halfStars, emptyStars } = getStars();

    if (fullStars) {
      for (let i = 0; i < fullStars; i += 1) {
        renderedStars.push(
          <img
            alt="Full star"
            src={star}
            key={`full-${i}`}
            style={{ width }}
          />
        );
      }
    }

    if (halfStars) {
      renderedStars.push(
        <img alt="Half star" src={starHalf} key="half" style={{ width }} />
      );
    }

    if (emptyStars) {
      for (let i = 0; i < emptyStars; i += 1) {
        renderedStars.push(
          <img
            alt="Empty star"
            src={starEmpty}
            key={`empty-${i}`}
            style={{ width }}
          />
        );
      }
    }

    return renderedStars;
  };

  return getRenderedStars();
};

export default RatingMeter;
