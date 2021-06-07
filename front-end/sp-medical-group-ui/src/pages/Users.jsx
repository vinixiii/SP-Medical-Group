import React from 'react';

import '../styles/pages/Users.css';

import Table from '../components/Table';

const data = [{ email: 'email@email.com', tipo: 'admin' }];

const Users = () => {
  return (
    <section className="users__container">
      <h1>Usuários</h1>
      <Table data={data} columns={['Email', 'Tipo']} />
    </section>
  );
};

export default Users;
