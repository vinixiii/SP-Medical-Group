//Libs
import React from 'react';

//Styles
import '../styles/pages/Users.css';

//Components
import Table from '../components/Table';

const data = [
  { email: 'admin@email.com', tipo: 'Administrador' },
  { email: 'medico@email.com', tipo: 'Médico' },
  { email: 'paciente@email.com', tipo: 'Paciente' },
];

const Users = () => {
  return (
    <section className="users__container">
      <h1>Usuários</h1>
      <Table role="admin" data={data} columns={['Email', 'Tipo']} />
    </section>
  );
};

export default Users;
