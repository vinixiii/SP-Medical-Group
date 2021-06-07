//Libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import '../styles/pages/Navigation.css';

//Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

//Pages
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="navigation__container">
      <Router>
        <Sidebar showSidebar={showSidebar} />
        <div className="navigation__content">
          <Header
            username={'Admin'}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main className="navigation__main">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/usuarios" component={Users} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Navigation;
