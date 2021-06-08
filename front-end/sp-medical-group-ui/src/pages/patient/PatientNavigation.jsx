//Libs
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

//Styles
import '../../styles/pages/Navigation.css';

//Components
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

//Pages
import PatientHome from './PatientHome';
import PatientAppointments from './PatientAppointments';

//SidebarData
import PatientSidebarData from '../../components/PatientSidebarData';

const PatientNavigation = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="navigation__container">
      <Router>
        <Sidebar showSidebar={showSidebar} sidebarData={PatientSidebarData} />
        <div className="navigation__content">
          <Header
            username={'Paciente'}
            icon={<FaUserPlus />}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          <main className="navigation__main">
            <Route path="/inicio-paciente" component={PatientHome} />
            <Route path="/consultas-paciente" component={PatientAppointments} />
          </main>
        </div>
      </Router>
    </div>
  );
};

export default PatientNavigation;
