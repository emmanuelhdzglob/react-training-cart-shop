import React from 'react';
import star from '../assets/star-rate.svg';
import starHalf from '../assets/star-rate-half.svg';
import starEmpty from '../assets/star-rate-empty.svg';

const RatingMeter = ({ rating }) => {
  const getStars = () => {
    const stars = {};
    const lowerLimit = Math.floor(rating);
    const upperLimit = Math.round(rating);

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
          <img alt="Full star" src={star} key={`full-${i}`} />
        );
      }
    }

    if (halfStars) {
      renderedStars.push(<img alt="Half star" src={starHalf} key="half" />);
    }

    if (emptyStars) {
      for (let i = 0; i < emptyStars; i += 1) {
        renderedStars.push(
          <img alt="Empty star" src={starEmpty} key={`empty-${i}`} />
        );
      }
    }

    return renderedStars;
  };

  return getRenderedStars();
};

export default RatingMeter;
