import React from 'react';

import error404 from '../img/page-not-found.svg';

const NotFound = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${error404})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#E8EFEF',
        backgroundPosition: 'center',
      }}
    >
      {/* <img src={error404} alt="" /> */}
    </div>
  );
};

export default NotFound;
