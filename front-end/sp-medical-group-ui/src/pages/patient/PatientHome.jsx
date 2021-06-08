//Libs
import React from 'react';

//Styles
import '../../styles/pages/patient/PatientHome.css';

//Components
import HomeCard from '../../components/HomeCard';

const PatientDashboard = () => {
  return (
    <section className="patient-home__container">
      <h1>Olá, Paciente!</h1>

      <h2>Consultas agendadas</h2>

      <div className="patient-home__content">
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
    </section>
  );
};

export default PatientDashboard;
