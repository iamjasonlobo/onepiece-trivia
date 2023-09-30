import React from 'react';
import '../index.css';

const Card = ({isFlipped, onFlip, front, back}) => (
    <div className='card-container' onClick={onFlip}>
        <div className={`card-inner ${isFlipped ? 'card-flipped': ''}`}>
        <div className='card-face card-front'>{front}</div>
        <div className='card-face card-back'>{back}</div>
        </div>
    </div>
);

export default Card;