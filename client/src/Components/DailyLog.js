import { Table, Button } from 'react-bootstrap'
import { useEffect } from 'react'

function DailyLog({ schedules }) {

    // useEffect(() => {
    //     async function getSchedule
    //     const res = await fetch('/schedule_today')
    // }, [])

    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', margin: 'auto'}}>
                {/* <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}> */}
                    <Button variant="primary" type="button" style={{width: '93px'}}>Previous Day</Button>
                    <h1 id="pop" style={{color: 'white'}}>Today's Date</h1>
                    <Button variant="primary" type="button" style={{width: '93px'}}>Next Day</Button>
                {/* </div> */}
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DailyLog