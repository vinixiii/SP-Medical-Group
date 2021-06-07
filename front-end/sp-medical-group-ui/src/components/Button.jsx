import React from 'react';

import '../styles/components/Button.css';

const Button = ({ title, onClick }) => {
  return (
    <button className="btn__btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
