import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../Dashboard';
import Login from '../Auth/Login';
import { userIsAuthenticated, userIsNotAuthenticated } from '../Auth/AuthHelpers';
import Signup from '../Auth/Signup';
import Profile from '../profile/Profile';


const Routers = (props) => {
    return (
      <Switch>
        <Route path="/" exact component={userIsAuthenticated(Dashboard)} />
        <Route path="/login" exact component={userIsNotAuthenticated(Login)} title='Войти' />
        <Route path="/signup" exact component={userIsNotAuthenticated(Signup)} />
        <Route path="/my-account" exact component={userIsAuthenticated(Profile)} />
      </Switch>
    );
}

export default Routers;
