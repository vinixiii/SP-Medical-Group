//Libs
import React from 'react';
import { RiStethoscopeFill } from 'react-icons/ri';
import { FaUserMd, FaUserPlus, FaHospital } from 'react-icons/fa';

//Styles
import '../styles/pages/Dashboard.css';

//Components
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <section className="dashboard__container">
      <h1>Dashboard</h1>
      <div className="dashboard__content">
        <Card number="3" title="Médico" icon={<FaUserMd />} />
        <Card number="3" title="Pacientes" icon={<FaUserPlus />} />
        <Card number="3" title="Clínicas" icon={<FaHospital />} />
        <Card number="3" title="Especialidades" icon={<RiStethoscopeFill />} />
      </div>
    </section>
  );
};

export default Dashboard;
