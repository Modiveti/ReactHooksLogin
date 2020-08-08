import React from 'react';
import { BrowserRouter as GOGRouter, Switch, Route, Redirect } from 'react-router-dom';
import RoutesInfo from './routes/RoutesInfo';
// import HeaderContainer from './containers/Header';
import SignInForm from './containers/signin/Sign';
import Dashboard from './containers/Dashboard'
import './App.scss';

export default function App() {
  return (
    <GOGRouter>
      <div className="app_container">
        <div id="admin_container_body" className="container_body">
          {/* <HeaderContainer /> */}
          <Switch>
            <Route
              exact
              path="/Login"
              component={SignInForm}
            />
            <Redirect exact from="/" to="/Login" />
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
            />
            {RoutesInfo.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </GOGRouter>
  );
}

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.subRoutes} />
      )}
    />
  );
}
