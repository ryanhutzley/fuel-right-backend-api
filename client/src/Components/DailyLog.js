import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function DailyLog({ schedules, index, setIndex, getSingleSchedule, displayedSchedule, setDisplayForm }) {

    setDisplayForm(true)
    
    const regex = /\d+:\d+/g

    function handlePrevious(e) {
        if (index !== 0) {
            let newIndex = index - 1
            getSingleSchedule(schedules[newIndex].id)
            setIndex(newIndex)
        }
    }

    function handleNext(e) {
        if (index !== schedules.length - 1) {
            let newIndex = index + 1
            getSingleSchedule(schedules[newIndex].id)
            setIndex(newIndex)
        }
    }

    console.log(displayedSchedule)
    
    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 id="pop" style={{color: 'white', textAlign: 'center'}}>{displayedSchedule ? `${displayedSchedule[0].date}` : null}</h1>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center', width: '15%', margin: 'auto'}}>
                {index > 0 ? <Button variant="primary" type="button" onClick={handlePrevious} style={{width: '100px'}}>Previous</Button> : null}
                {index < schedules.length - 1 ? <Button variant="primary" type="button" onClick={handleNext} style={{width: '93px'}}>Next</Button> : null}
            </div>
            <br></br>
            <Table striped bordered hover variant="dark" style={{width: '80%', margin: 'auto'}}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Action</th>
                        <th>Type(s)</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedSchedule ? (
                        displayedSchedule[1].map((action, index) => {
                            if (action.wakeup) {
                                return (
                                    <tr key={index}>
                                        <td>{action.time.match(regex)[0]}</td>
                                        <td>Wakeup</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            } else if (action.foods) {
                                let names = []
                                let portions = []
                                action.foods.forEach(food => {
                                    let capitalized = food.name.charAt(0).toUpperCase() + food.name.slice(1)
                                    names.push(capitalized)
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
                                        <td>Bedtime</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            }
                        })
                    ): null}
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