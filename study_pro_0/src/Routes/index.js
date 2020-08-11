import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../Views/Login';
import Layout from '../Views/Layout';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Layout" component={Layout} />
    </Switch>
  </HashRouter>
);


export default BasicRoute;