import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../Dashboard';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Profile from '../profile/Profile';


const Routers = (props) => {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} title='Войти' />
        <Route path="/signup" exact component={Signup} />
        <Route path="/my-account" exact component={Profile} />
      </Switch>
    );
}

export default Routers;
