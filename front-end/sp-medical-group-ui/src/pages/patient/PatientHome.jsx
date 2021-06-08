//Libs
import React from 'react';

//Styles
import '../../styles/pages/patient/PatientHome.css';
import image from '../../img/nurse-background.svg';

//Components
import HomeCard from '../../components/HomeCard';

const PatientDashboard = () => {
  return (
    <section className="patient-home__container">
      <h1>Olá, Paciente!</h1>
      <div className="patient-home__content">
        <div className="patient-home__left-content">
          <h2>Consultas agendadas</h2>
          <HomeCard
            role="patient"
            date="Segunda-feira, 07 de Junho"
            name="Roberto Possarle"
            specialty="Psiquiatra"
            time="15:00"
            status="Agendada"
          />
          <HomeCard
            role="patient"
            date="Segunda-feira, 07 de Junho"
            name="Roberto Possarle"
            specialty="Psiquiatra"
            time="15:00"
            status="Agendada"
          />
        </div>
      </div>
    </section>
  );
};

export default PatientDashboard;
