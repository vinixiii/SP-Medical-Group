import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
// import { GoThreeBars } from 'react-icons/go';

import './Header.css';

const Header = ({ username, image, showSidebar, setShowSidebar }) => {
  return (
    <header className="header__header">
      <div className="header__header-container">
        {showSidebar ? (
          <BsArrowLeft
            className="header__icon"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        ) : (
          <BsArrowRight
            className="header__icon"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        )}
        <div className="header__header-content">
          <span className="header__header-title">{username}</span>
          <img
            className="header__header-img"
            src={image}
            alt="Imagem do administrador"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
