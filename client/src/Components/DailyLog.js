import { Table, Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function DailyLog({ schedules, index, setIndex, handleSchedulesScroll, displayedSchedule, handleScheduleDelete }) {
    const [show, setShow] = useState(false)
    
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
    let sleepDuration = "No bedtime found"
    let foods = 0

    if (displayedSchedule) {
        let activities = displayedSchedule[1].filter(action => action.duration)
        activitiesTotal = activities.length
        let foodAction = displayedSchedule[1].filter(action => action.foods)
        let foodNames = []
        foodAction.map(action => {
            action.foods.forEach(food => foodNames.push(food.name))
        })
        if (foodNames.length > 0) {
            foods = foodNames.length
        }
        if (displayedSchedule[2].hours) {
            sleepDuration = `${displayedSchedule[2].hours}h ${displayedSchedule[2].added_mins}m`
        }
    }

    function handleShow(e) {
        e.target.blur()
        setShow(true)
    }

    function handleClose() {
        setShow(false)
    }

    function handleDelete() {
        handleScheduleDelete(displayedSchedule[0].id)
        setShow(false)
    }

    console.log(displayedSchedule)
    console.log(foods)
    
    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <h1 id="pop" style={{color: 'white', display: 'table', margin: 'auto', backgroundColor: 'blue', padding: '10px', borderRadius: '10px'}}>{displayedSchedule ? `${displayedSchedule[0].date}` : "No schedules to display"}</h1>
            <br></br>
            <div style={{display: 'flex', justifyContent: index > 0 && index < schedules.length - 1 ? 'space-between' : 'center', width: '15%', margin: 'auto'}}>
                {index > 0 ? <Button variant="primary" type="button" onClick={handlePrevious} style={{width: '100px'}}>Previous</Button> : null}
                {index < schedules.length - 1 ? <Button variant="primary" type="button" onClick={handleNext} style={{width: '93px'}}>Next</Button> : null}
            </div>
            <br></br>
            {displayedSchedule ? (
            <div style={{display: 'flex', justifyContent: 'space-between', width: '40%', margin: 'auto', color: 'black', borderRadius: '20px', backgroundColor: '#FFCC66', padding: '20px'}}>
                <div>
                    <h3>Number of Activities: </h3>
                    <h3>Sleep Duration: </h3>
                    <h3>Number of Foods: </h3>
                </div>
                <div>
                    <h2 style={{display: 'table', fontSize: '28px'}}>{activitiesTotal}</h2>
                    <h2 style={{display: 'table', fontSize: '28px'}}>{sleepDuration}</h2>
                    <h2 style={{display: 'table', fontSize: '28px'}}>{foods}</h2>
                </div>
            </div> ) : null}
            <br></br>
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
            <br></br>
            <br></br>
            {displayedSchedule ? (
                <Button variant="danger" type="button" onClick={handleShow} style={{display: 'flex', width: '12%', margin: 'auto', justifyContent: 'center'}}>Delete Schedule</Button>) : null}
            <br></br>
            <br></br>
            <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>You're about to delete this schedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No, take me back!
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Yes, get rid of this schedule!
                    </Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}

export default DailyLog