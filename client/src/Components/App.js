import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import Login from './Login'
import TrackerForm from './TrackerForm'
import DailyLog from './DailyLog'
import History from './History'
import EditProfileForm from './EditProfileForm'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NavBar />
      <div className="bg">
        <Switch>
          <Route exact path="/">
            {user ? <TrackerForm /> : <Login />}
          </Route>
          <Route exact path="/day">
            {user ? <DailyLog /> : <Login />}
          </Route>
          <Route exact path="/history">
            {user ? <History /> : <Login />}
          </Route>
          <Route exact path="/edit">
            {user ? <EditProfileForm /> : <Login />}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
