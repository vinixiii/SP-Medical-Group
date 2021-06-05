import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './index.css';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

import reportWebVitals from './reportWebVitals';

export const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/usuarios" component={Dashboard} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/medicos" component={Dashboard} />
        <Route exact path="/pacientes" component={Dashboard} />
        <Route exact path="/consultas" component={Dashboard} />
        <Route exact path="/clinicas" component={Dashboard} />
        <Route exact path="/especialidades" component={Dashboard} />
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
