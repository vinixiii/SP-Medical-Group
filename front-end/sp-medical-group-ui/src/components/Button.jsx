import React from 'react';

import '../styles/components/Button.css';

const Button = ({ title, color, type, onClick }) => {
  return (
    <button type={type} className={`btn__btn ${color}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
