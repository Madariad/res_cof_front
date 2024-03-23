import React, { useState } from 'react';

const StarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className={ratingValue <= rating ? 'star filled  w-30 red' : 'star w-30' }
            onClick={() => handleRatingChange(ratingValue)}
            style={{fontSize: '40px'}}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
