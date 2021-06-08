//Libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

//Styles
import '../styles/pages/Navigation.css';

//Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

//Pages
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Appointments from '../pages/Appointments';

//SidebarData
import SidebarData from '../components/SidebarData';

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="navigation__container">
      <Router>
        <Sidebar showSidebar={showSidebar} sidebarData={SidebarData} />
        <div className="navigation__content">
          <Header
            username={'Admin'}
            icon={<FaUserShield />}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main className="navigation__main">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/usuarios" component={Users} />
            <Route path="/consultas" component={Appointments} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Navigation;
