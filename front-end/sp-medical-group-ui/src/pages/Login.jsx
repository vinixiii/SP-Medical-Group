import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import doctors from '../img/doctors.svg';
import logo from '../img/icons/sp-medical-group-logo.svg';

import '../styles/pages/Login.css';

//Services
import { parseJWT } from '../services/Auth';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = (e) => {
    //Disable browser default behavior
    e.preventDefault();

    setErrorMessage('');
    setIsLoading(true);

    axios
      .post('http://localhost:5000/api/login', {
        email: email,
        senha: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);

          setIsLoading(false);

          if (parseJWT().role === '1') {
            history.push('/dashboard');
            // window.location.reload();
          } else {
            history.push('/inicio');
            // window.location.reload();
          }
        }
      })
      .catch(() => {
        setErrorMessage('E-mail e/ou senha inválido(s)! Tente novamente');
        setIsLoading(false);
      });
  };

  return (
    <div className="login__container">
      <div className="login__left-content">
        <img
          className="login__doctor-img"
          src={doctors}
          alt="Imagem de dois médicos"
        />
      </div>

      <div className="login__right-content">
        <div className="login__img-background-top">
          <div className="login__logo-container">
            <img src={logo} alt="Logo SP Medical Group" />
            <h1>SP Medical Group</h1>
          </div>
        </div>

        <form className="login__form" onSubmit={login}>
          <h2 className="login__form-title">Login</h2>

          <label className="login__form-label">E-mail</label>
          <input
            className="login__form-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login__form-label">Senha</label>
          <input
            className="login__form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span>{errorMessage}</span>

          {
            // Caso seja true, renderiza o botão desabilitado com o texto 'Loading...'
            isLoading === true ? (
              <button className="login__form-btn" type="submit" disabled>
                Entrando...
              </button>
            ) : (
              <button
                className="login__form-btn"
                type="submit"
                disabled={email === '' || password === '' ? 'none' : ''}
              >
                Entrar
              </button>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default Login;
