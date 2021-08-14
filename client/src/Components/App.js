import React from 'react';
import '../App.css';
import NavBar from './NavBar'
import Login from './Login'
import TrackerForm from './TrackerForm'
import DailyLog from './DailyLog'
import History from './History'
import EditProfileForm from './EditProfileForm'
import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null)
  const [schedules, setSchedules] = useState([])
  
  const history = useHistory()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  async function logOut(e) {
    e.preventDefault()
    const res = await fetch("/logout", {
      method: "DELETE"
    })
    if (res.ok) {
      setUser(null)
      history.push("/login")
    }
  }

  console.log(user)

  return (
    <div className="App">
      <NavBar user={user} logout={logOut}/>
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
            <Login setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
