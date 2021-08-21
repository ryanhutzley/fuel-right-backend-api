import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function DailyLog({ schedules, index, setIndex, handleSchedulesScroll, displayedSchedule }) {
    
    const regex = /\d+:\d+/g

    function handlePrevious(e) {
        e.target.blur()
        if (index !== 0) {
            let newIndex = index - 1
            handleSchedulesScroll(schedules[newIndex].id)
            setIndex(newIndex)
        }
    }

    function handleNext(e) {
        e.target.blur()
        if (index !== schedules.length - 1) {
            let newIndex = index + 1
            handleSchedulesScroll(schedules[newIndex].id)
            setIndex(newIndex)
        }
    }

    let activitiesTotal = 0
    let sleepDuration = "0h"
    let foods = "None"

    if (displayedSchedule) {
        let activities = displayedSchedule[1].filter(action => action.duration)
        activitiesTotal = activities.length
        sleepDuration = `${displayedSchedule[2].hours}h ${displayedSchedule[2].added_mins}m`
        let eats = displayedSchedule[1].filter(action => action.portion)
        foods = eats.join(", ")
    }

    console.log(displayedSchedule)
    
    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <h1 id="pop" style={{color: 'white', display: 'table', margin: 'auto', backgroundColor: 'blue', padding: '10px', borderRadius: '10px'}}>{displayedSchedule ? `${displayedSchedule[0].date}` : "No schedules to display"}</h1>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center', width: '15%', margin: 'auto'}}>
                {index > 0 ? <Button variant="primary" type="button" onClick={handlePrevious} style={{width: '100px'}}>Previous</Button> : null}
                {index < schedules.length - 1 ? <Button variant="primary" type="button" onClick={handleNext} style={{width: '93px'}}>Next</Button> : null}
            </div>
            <br></br>
            {displayedSchedule ? (
            <div style={{display: 'flex', justifyContent: 'space-between', width: '60%', margin: 'auto', color: 'black', borderRadius: '20px', backgroundColor: '#FFCC66', padding: '20px'}}>
                <div>
                    <h3>Number of Activities: </h3>
                    <h3>Sleep Duration: </h3>
                    <h3>Foods: </h3>
                </div>
                <div>
                    <h2 style={{display: 'table'}}>{activitiesTotal}</h2>
                    <h2 style={{display: 'table'}}>{sleepDuration}</h2>
                    <h2 style={{display: 'table'}}>{foods}</h2>
                </div>
            </div> ) : null}
            <br></br>
            <Table striped bordered hover variant="dark" style={{width: '80%', margin: 'auto'}}>
                {displayedSchedule ? (
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Type(s)</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    ) : null}
                    <tbody>
                    {displayedSchedule ? (
                        displayedSchedule[1].map((action, index) => {
                            if (action.wakeup) {
                                return (
                                    <tr key={index}>
                                        <td>{action.time.match(regex)[0]}</td>
                                        <td colSpan="3">Wakeup</td>
                                    </tr>
                                )
                            } else if (action.foods) {
                                let names = []
                                let portions = []
                                action.foods.forEach(food => {
                                    names.push(food.name)
                                    portions.push(`${food.portion} oz.`)
                                })
                                let groupedNames = names.join(', ')
                                let groupedPortions = portions.join(', ')
                                return (
                                    <tr key={index}>
                                        <td>{action.time.match(regex)[0]}</td>
                                        <td>Food</td>
                                        <td>{groupedNames}</td>
                                        <td>{groupedPortions}</td>
                                    </tr>
                                )
                            } else if (action.duration) {
                                return (
                                    <tr key={index}>
                                        <td>{action.time.match(regex)[0]}</td>
                                        <td>Activity</td>
                                        <td>{action.name}</td>
                                        <td>{action.duration} mins., RPE: {action.perceived_effort}</td>
                                    </tr>
                                )
                            } else if (action.bedtime) {
                                return (
                                    <tr key={index}>
                                        <td>{action.time.match(regex)[0]}</td>
                                        <td colSpan="3">Bedtime</td>
                                    </tr>
                                )
                            }
                        })
                    ) : null}
                </tbody>
            </Table>
        </div>
    )
}

export default DailyLog

{/* <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
</tr>
<tr>
    <td>3</td>
    <td colSpan="2">Larry the Bird</td>
    <td>@twitter</td>
</tr> */}


// useEffect(() => {
    //     async function getSchedules() {
    //         const res = await fetch('/schedules')
    //         const data = await res.json()
    //         if (res.ok) {
    //             setSchedules(data)
    //             setIndex(data.length - 1)
    //             getFirstSchedule(data[data.length - 1].id)
    //             console.log(data)
    //         }
    //     }
    //     getSchedules()
    // }, [])

    // function getFirstSchedule(id) {
    //     fetch(`schedules/${id}`)
    //     .then(res => res.json())
    //     .then(console.log)
    // }