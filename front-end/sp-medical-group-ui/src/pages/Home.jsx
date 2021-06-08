//Libs
import React from 'react';

//Styles
import '../styles/pages/Home.css';

//Components
import HomeCard from '../components/HomeCard';

// const role = '';
const role = '';

const Home = () => {
  return (
    <section
      className={
        role === 'patient' ? 'home__container' : 'home__container doctor'
      }
    >
      <h1>Olá, Paciente!</h1>
      <div className="home__content">
        <div className="home__left-content">
          <h2>Consultas agendadas</h2>
          <HomeCard
            role={role}
            date="Segunda-feira, 07 de Junho"
            name="Roberto Possarle"
            specialty="Psiquiatra"
            time="15:00"
            status="Agendada"
          />
          <HomeCard
            role={role}
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

export default Home;
