import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//Styles
import './Dashboard.css';

//Images
import avatar from '../../img/icons/avatar.svg';
// import avatar from '../../img/icons/eu.jpeg';

//Components
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Home from '../Home/Home';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="dashboard__container">
      <Router>
        <Sidebar showSidebar={showSidebar} />
        <div className="dashboard__body">
          <Header
            username={'Vinícius'}
            image={avatar}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main>
            <Route path="/usuarios" component={Home} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
