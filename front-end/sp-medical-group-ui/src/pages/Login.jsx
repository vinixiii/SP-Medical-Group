import React from 'react';
import doctors from '../img/doctors.svg';
import logo from '../img/icons/sp-medical-group-logo.svg';

import '../styles/pages/Login.css';

const Login = () => {
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

        <form className="login__form">
          <h2 className="login__form-title">Login</h2>

          <label className="login__form-label">E-mail</label>
          <input className="login__form-input" type="text" />

          <label className="login__form-label">Senha</label>
          <input className="login__form-input" type="password" />

          <button className="login__form-btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
