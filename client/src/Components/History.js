import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function History({ setDisplayForm, user, schedules, favFood, avgSleepDuration, bestPerformanceFood, optimalSleepDuration }) {

    setDisplayForm(true)

    let activitiesTotal = 0
    schedules.forEach(schedule => {
        activitiesTotal += schedule.activities.length
    })

    console.log(schedules)
    console.log(favFood)
    console.log(avgSleepDuration)

    let name = user.name.charAt(0).toUpperCase() + user.name.slice(1)

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const dataLine = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <h1 id="pop" style={{textAlign: 'center', color: 'white'}}>{`${name}'s History`}</h1>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', margin: 'auto', color: 'white', borderRadius: '30px', backgroundColor: 'blue', padding: '20px'}}>
                <div>
                    <h2>Total Number of Activities: </h2>
                    <h2>Average Sleep Duration: </h2>
                    <h2>Favorite Food: </h2>
                    <h2>Best Food for Performance: </h2>
                    <h2>Optimal Sleep Duration: </h2>
                </div>
                <div>
                    <h2>{activitiesTotal}</h2>
                    <h2>{avgSleepDuration ? `${avgSleepDuration.hours}h ${avgSleepDuration.mins}m` : '0h'}</h2>
                    <h2>{favFood ? favFood.name : 'Candy'}</h2>
                    <h2>{bestPerformanceFood ? bestPerformanceFood.name : 'Candy'}</h2>
                    <h2>{optimalSleepDuration ? `${optimalSleepDuration.duration}` : '0h'}</h2>
                </div>
            </div>
            <br></br>
            <br></br>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 id="pop" style={{color: 'white'}}>RPE vs. Pre-Activity Food</h2>
                <br></br>
                <ResponsiveContainer width={800} height={300}>
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
                <br></br>
                <br></br>
                <h2 id="pop" style={{color: 'white'}}>RPE vs. Sleep Duration</h2>
                <br></br>
                <ResponsiveContainer width={800} height={300}>
                    <LineChart
                    width={500}
                    height={300}
                    data={dataLine}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default History