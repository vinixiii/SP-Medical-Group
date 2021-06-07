import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import '../styles/pages/Dashboard.css';

//Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Users from '../pages/Users';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="dashboard__container">
      <Router>
        <Sidebar showSidebar={showSidebar} />
        <div className="dashboard__content">
          <Header
            username={'Admin'}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main className="dashboard__main">
            <Route path="/usuarios" component={Users} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
