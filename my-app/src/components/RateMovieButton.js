// U51313007
// src/components/RateMovieButton.js
import React, { useState } from 'react';

const RateMovieButton = ({ movieId }) => {
    const [rating, setRating] = useState(0);
    const [showComfirmation, setShowComfirmation] = useState(false);

    const handleRating = (rate) => {
        setRating(rate);
        setShowComfirmation(true);
    };

    return (
        <div>
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                    >
                    ★
                    </span>
                ))}
            </div>
            {showComfirmation && <p>Thank you for rating the movie!</p>}
        </div>
    );
};

export default RateMovieButton;