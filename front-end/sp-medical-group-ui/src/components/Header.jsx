import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { FaUserShield } from 'react-icons/fa';
// import { GoThreeBars } from 'react-icons/go';

import '../styles/components/Header.css';

const Header = ({ username, showSidebar, setShowSidebar }) => {
  return (
    <header className="header__header">
      <div className="header__container">
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
        <div className="header__content">
          <span className="header__title">{username}</span>
          <FaUserShield />
          {/* <img
            className="header__header-img"
            src={image}
            alt="Imagem do administrador"
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
