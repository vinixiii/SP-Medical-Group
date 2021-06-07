import React from 'react';

import '../styles/components/Card.css';

const Card = ({ number, title, icon }) => {
  return (
    <div className="card__container">
      <div className="card__left-content">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      {icon}
    </div>
  );
};

export default Card;
