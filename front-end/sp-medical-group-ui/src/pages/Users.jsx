//Libs
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Styles
import '../styles/pages/Users.css';

//Components
import Table from '../components/Table';

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  const listUsers = () => {
    axios('http://localhost:5000/api/usuarios', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => {
        if (res.status === 200) {
          const users = res.data.map((u) => {
            const user = {
              id: u.idUsuario,
              email: u.email,
              tipo: u.idTipoUsuarioNavigation.titulo,
            };

            return user;
          });

          setUsersList(users);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(listUsers, []);

  return (
    <section className="users__container">
      <h1>Usuários</h1>
      <Table role="1" data={usersList} columns={['#', 'E-mail', 'Tipo']} />
    </section>
  );
};

export default Users;
