//Libs
import React from 'react';

//Services
import { parseJWT } from '../services/Auth';

//Styles
import '../styles/pages/Home.css';

//Components
import HomeCard from '../components/HomeCard';

const Home = () => {
  //User role authorization
  const role = parseJWT().role;

  return (
    <section
      className={role === '2' ? 'home__container' : 'home__container doctor'}
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
