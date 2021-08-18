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
  const [displayForm, setDisplayForm] = useState(true)
  const [scheduleCheck, setScheduleCheck] = useState(true)
  const [index, setIndex] = useState(0)
  const [displayedSchedule, setDisplayedSchedule] = useState(null)
  const [favFood, setFavFood] = useState(null)
  const [errors, setErrors] = useState([])
  const [avgSleepDuration, setAverageSleepDuration] = useState(null)
  const [bestPerformanceFood, setBestPerformanceFood] = useState(null)
  const [optimalSleepDuration, setOptimalSleepDuration] = useState(null)
  const [chartOneData, setChartOneData] = useState(null)
  const [chartTwoData, setChartTwoData] = useState(null)
  
  const history = useHistory()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          fetch('/schedules')
          .then(res => res.json())
          .then(data => {
            if (data.length !== 0) {
              setSchedules(data)
              setIndex(data.length - 1)
              getSingleSchedule(data[data.length - 1].id)
              console.log(data)
            }
          })
        });
      }
    });
  }, [scheduleCheck]);

  function getSingleSchedule(id) {
    fetch(`schedules/${id}`)
    .then(res => res.json())
    .then(data => {
      setDisplayedSchedule(data)
      getFavFood()
    })
  }

  function getFavFood() {
    fetch('/favorite_food')
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        getSleepDurations()
      }
      setFavFood(data)
      getSleepDurations()
    })
  }

  function getSleepDurations() {
    fetch('/sleep_durations')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.error) {
        getBestPerformanceFood()
      }
      setAverageSleepDuration(data)
      getBestPerformanceFood()
    })
  }

  function getBestPerformanceFood() {
    fetch('/performance_food')
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        getOptimalSleepDuration()
      }
      setBestPerformanceFood(data)
      getOptimalSleepDuration()
    })
  }

  function getOptimalSleepDuration() {
    fetch('/optimal_sleep_duration')
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        getChartOneData()
      }
      setOptimalSleepDuration(data)
      getChartOneData()
    })
  }

  function getChartOneData() {
    fetch('/chart_one_data')
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        getChartTwoData()
      }
      setChartOneData(data)
      getChartTwoData()
    })
  }

  function getChartTwoData() {
    fetch('/chart_two_data')
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        setChartTwoData(null)
      }
      setChartTwoData(data)
    })
  }

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

  async function handleUserUpdate(updatedUser) {
    const res = await fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(updatedUser)
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data)
      history.push("/")
    } else {
      setErrors(data.errors)
    }
  }

  function handleUserDelete(e) {
    e.preventDefault()
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    })
    .then(() => logOut())
  }

  async function addEntry(action, payload) {
    if (action === 'activity') {
      action = 'activitie'
    }
    const res = await fetch(`/${action}s`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    console.log(data)
    if (res.ok) {
      setDisplayForm(false)
      setScheduleCheck(!scheduleCheck)
    }
  }

  console.log(user)
  console.log(avgSleepDuration)

  return (
    <div className="App">
      <NavBar user={user} logout={logOut}/>
      <div className="bg">
        <Switch>
          <Route exact path="/">
            {user ? <TrackerForm addEntry={addEntry} displayForm={displayForm} setDisplayForm={setDisplayForm} /> : <Login />}
          </Route>
          <Route exact path="/day">
            {user ? <DailyLog schedules={schedules} index={index} setIndex={setIndex} getSingleSchedule={getSingleSchedule} displayedSchedule={displayedSchedule} setDisplayForm={setDisplayForm}/> : <Login />}
          </Route>
          <Route exact path="/history">
            {user ? <History setDisplayForm={setDisplayForm} user={user} schedules={schedules} favFood={favFood} avgSleepDuration={avgSleepDuration} bestPerformanceFood={bestPerformanceFood} optimalSleepDuration={optimalSleepDuration} chartOneData={chartOneData} chartTwoData={chartTwoData} /> : <Login />}
          </Route>
          <Route exact path="/edit">
            {user ? <EditProfileForm user={user} handleUserUpdate={handleUserUpdate} handleUserDelete={handleUserDelete} errors={errors}/> : <Login />}
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} setDisplayForm={setDisplayForm} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
