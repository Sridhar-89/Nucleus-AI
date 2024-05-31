import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    console.log('Rating set to:', rate);
  };

  return (
    <section id="rating" className="p-6 bg-white shadow-lg rounded-lg">
      
      <div className="flex justify-center items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`text-2xl mx-1 ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => handleRating(star)}
          >
            ★
          </button>
        ))}
      </div>
    </section>
  );
};

export default Rating;
