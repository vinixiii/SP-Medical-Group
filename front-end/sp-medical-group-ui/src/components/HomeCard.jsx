import React from 'react';
import { RiStethoscopeFill } from 'react-icons/ri';
import { FiClock } from 'react-icons/fi';
import { FaUserMd, FaUserPlus, FaNotesMedical } from 'react-icons/fa';

import '../styles/components/HomeCard.css';

const HomeCard = ({ role, date, name, specialty, time, status }) => {
  return (
    <div className="home-card__container">
      <div className="home-card__left-content">
        <h2>{date}</h2>
        <div className="home-card__name">
          {role === '2' ? <FaUserMd /> : <FaUserPlus />}
          <span>{name}</span>
        </div>

        {role === '2' && (
          <div className="home-card__specialty">
            <RiStethoscopeFill />
            <span>{specialty}</span>
          </div>
        )}

        <div className="home-card__time">
          <FiClock />
          <span>{time}</span>
        </div>

        <div className="home-card__status">
          <span>{status}</span>
        </div>
      </div>

      <FaNotesMedical className="home-card__icon" />
    </div>
  );
};

export default HomeCard;
