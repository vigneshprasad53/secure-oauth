

import React from 'react';
import Login from './Login/Login';
import User from './Users/User';
import CookedData from './CookedData/CookedData';
import NavBar from '../../components/NavBar'
import ExtendSession from "../../components/ExtendSession"

import { useGoogleAuth } from "../../utils/googleOAuth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {

  const { isSignedIn } = useGoogleAuth();

  return (
    <div>
      Test
      <Router>
        <NavBar /><Login />
        {isSignedIn && <ExtendSession />}
        {isSignedIn && <Switch>
          <Route exact path="/user" component={User} />
          <Route exact path="/coockeddata" component={CookedData} />
        </Switch>}
      </Router>
    </div>
  );
}
