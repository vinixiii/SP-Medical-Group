//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//Styles
import './styles/index.css';

//Pages
import Login from './pages/Login';
import Navigation from './pages/Navigation';
import PatientNavigation from './pages/patient/PatientNavigation';
import NotFound from './pages/NotFound';

export const routing = (
  <Router>
    <div>
      <Switch>
        {/* Login */}
        <Route exact path="/" component={Login} />
        {/* Admin */}
        <Route exact path="/dashboard" component={Navigation} />
        <Route exact path="/usuarios" component={Navigation} />
        <Route exact path="/admin" component={Navigation} />
        <Route exact path="/medicos" component={Navigation} />
        <Route exact path="/pacientes" component={Navigation} />
        <Route exact path="/consultas" component={Navigation} />
        <Route exact path="/clinicas" component={Navigation} />
        <Route exact path="/especialidades" component={Navigation} />
        {/* Patient */}
        <Route exact path="/inicio-paciente" component={PatientNavigation} />
        <Route exact path="/consultas-paciente" component={PatientNavigation} />
        {/* Not Found */}
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
