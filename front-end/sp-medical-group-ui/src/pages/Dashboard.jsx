import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import '../styles/pages/Dashboard.css';

//Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="dashboard__container">
      <Router>
        <Sidebar showSidebar={showSidebar} />
        <div className="dashboard__body">
          <Header
            username={'Admin'}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main className="dashboard__main">
            <Route path="/usuarios" component={Home} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
