//Libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FaUserShield, FaUserPlus } from 'react-icons/fa';

//Services
import { parseJWT } from '../services/Auth';

//Styles
import '../styles/pages/Navigation.css';

//Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

//Pages
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Appointments from '../pages/Appointments';

//SidebarData
import SidebarData from '../components/SidebarData';
import PatientSidebarData from '../components/PatientSidebarData';

const Navigation = () => {
  //User role authorization
  const role = parseJWT().role;

  //Sidebar
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="navigation__container">
      <Router>
        <Sidebar
          showSidebar={showSidebar}
          sidebarData={role === '1' ? SidebarData : PatientSidebarData}
        />
        <div className="navigation__content">
          <Header
            username={role === '1' ? 'Admin' : 'Paciente'}
            icon={role === '1' ? <FaUserShield /> : <FaUserPlus />}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main className="navigation__main">
            {role === '1' ? (
              <>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/usuarios" component={Users} />
              </>
            ) : (
              <Route path="/inicio" component={Home} />
            )}

            <Route path="/consultas" component={Appointments} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default Navigation;
