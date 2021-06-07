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
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

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
