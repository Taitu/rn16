import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store from './store';
import history from './history';
import './index.css';
import App from './App';
import AppBar from './components/AppBar';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppBar/>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
