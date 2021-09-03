import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function History({ user, schedules, favFood, avgSleepDuration, bestPerformanceFood, optimalSleepDuration, chartOneData, chartTwoData }) {

    let activitiesTotal = 0

    if (schedules) {
        schedules.forEach(schedule => {
            activitiesTotal += schedule.activities.length
        })
    }

    console.log(schedules)
    console.log(favFood)
    console.log(bestPerformanceFood)
    console.log(optimalSleepDuration)

    let name = "User"
    if (user) {
        name = user.name.charAt(0).toUpperCase() + user.name.slice(1)
    }

    return (
        <div style={{minHeight: '100vh', minWidth: '100vw'}}>
            <br></br>
            <br></br>
            <h1 id="pop" style={{color: 'white', display: 'table', margin: 'auto', backgroundColor: 'blue', padding: '10px', borderRadius: '10px'}}>{`${name}'s History`}</h1>
            <br></br>
            <br></br>
            <div style={{display: 'flex', flexDirection: 'column', width: '47%', margin: 'auto', color: 'black', borderRadius: '20px', backgroundColor: '#FFCC66', padding: '20px'}}>
                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <h2 style={{marginRight: '1%'}}>Total Number of Activities ➡️ </h2>
                    <h2 style={{textDecorationLine: 'underline', float: 'right'}}>{activitiesTotal}</h2>
                </div>
                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <h2 style={{marginRight: '1%'}}>Average Sleep Duration ➡️ </h2>
                    <h2 style={{textDecorationLine: 'underline', float: 'right'}}>{avgSleepDuration ? `${avgSleepDuration.hours}h ${avgSleepDuration.mins}m` : '0h'}</h2>
                </div>
                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <h2 style={{marginRight: '1%'}}>Favorite Food ➡️ </h2>
                    <h2 style={{textDecorationLine: 'underline', float: 'right'}}>{favFood ? favFood.name : 'None'}</h2>
                </div>
                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <h2 style={{marginRight: '1%'}}>Best Food for Performance ➡️ </h2>
                    <h2 style={{textDecorationLine: 'underline', float: 'right'}}>{bestPerformanceFood ? bestPerformanceFood.name : 'None'}</h2>
                </div>
                <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <h2 style={{marginRight: '1%'}}>Optimal Sleep Duration ➡️ </h2>
                    <h2 style={{textDecorationLine: 'underline', float: 'right'}}>{optimalSleepDuration ? `${optimalSleepDuration.hours}h ${optimalSleepDuration.added_mins}m` : '0h'}</h2>
                </div>
            </div>
            <br></br>
            <br></br>
            <h2 id="pop" style={{color: 'white', textAlign: 'center'}}>Average RPE vs. Pre-Activity Food</h2>
            <br></br>
            <ResponsiveContainer width="60%" height={300}>
                <BarChart
                width={500}
                height={300}
                data={chartOneData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" style={{fontSize: 'small'}} />
                    <YAxis />
                    <Tooltip />
                    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                    <Bar dataKey="RPE" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            <br></br>
            <br></br>
            <h2 id="pop" style={{color: 'white', textAlign: 'center'}}>Average RPE vs. Sleep Duration</h2>
            <br></br>
            <ResponsiveContainer width="60%" height={300}>
                <BarChart
                width={500}
                height={300}
                data={chartTwoData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="duration" style={{fontSize: 'small'}} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="RPE" fill="#8884d8" />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default History