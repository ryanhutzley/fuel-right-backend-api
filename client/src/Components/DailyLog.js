import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function DailyLog({ schedules, index, setIndex, getSingleSchedule, displayedSchedule }) {
    

    
    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', margin: 'auto'}}>
                <Button variant="primary" type="button" style={{width: '93px'}}>Previous Day</Button>
                <h1 id="pop" style={{color: 'white'}}>Today's Date</h1>
                <Button variant="primary" type="button" style={{width: '93px'}}>Next Day</Button>
            </div>
            <br></br>
            <br></br>
            <Table striped bordered hover variant="dark" style={{width: '80%', margin: 'auto'}}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Action</th>
                        <th>Type(s)</th>
                        <th>Details (Food: quantity, Activity: duration, RPE)</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedSchedule ? (
                        displayedSchedule.map(action => {
                            if (action.wakeup) {
                                return (
                                    <tr>
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