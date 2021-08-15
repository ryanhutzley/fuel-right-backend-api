import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function TrackerForm({ addEntry }) {
    const [action, setAction] = useState("")
    const [time, setTime] = useState("")
    const [activity, setActivity] = useState({
        name: "",
        duration: 0,
        perceived_effort: 0
    })
    const [foods, setFoods] = useState([{ name: "", portion: 0 }])
    const [selected, setSelected] = useState({ wakeup: false, food: false, activity: false, bedtime: false })

    function handleSubmit(e) {
        e.preventDefault()
        if (selected.wakeup) {
            // addEntry(action, time)
        }
        else if (selected.food) {
            let payload = foods.map(el => el.time = time)
            console.log(payload)
            // addEntry(action, payload)
        }
        else if (selected.activity) {
            let payload = {...activity, time: time}
            console.log(payload)
            // addEntry(action, payload)
        } else if (selected.bedtime) {
            // addEntry(action, time)
        }
    }

    function handleFoodName(e, index) {
        let foodsCopy = foods.slice(0)
        foodsCopy[index].name = e.target.value
        setFoods(foodsCopy)
    }

    function handleFoodPortion(e, index) {
        let foodsCopy = foods.slice(0)
        foodsCopy[index].portion = e.target.value
        setFoods(foodsCopy)
    }

    function handleChange(e) {
        setAction(e.target.value)
        if (e.target.value === "Food") {
            setSelected({ wakeup: false, food: true, activity: false, bedtime: false })
            setActivity({ name: "", duration: 0, perceived_effort: 0 })
        } else if (e.target.value === "Activity") {
            setSelected({ wakeup: false, food: false, activity: true, bedtime: false })
            setFoods([{ name: "", portion: 0 }])
        } else if (e.target.value === "Wakeup") {
            setSelected({ wakeup: true, food: false, activity: false, bedtime: false })
            setActivity({ name: "", duration: 0, perceived_effort: 0 })
            setFoods([{ name: "", portion: 0 }])
            return null
        } else if (e.target.value === "Bedtime") {
            setSelected({ wakeup: false, food: false, activity: false, bedtime: true })
            setActivity({ name: "", duration: 0, perceived_effort: 0 })
            setFoods([{ name: "", portion: 0 }])
            return null
        }
    }

    function handleAddFood(e) {
        e.target.blur()
        setFoods([...foods, { name: "", portion: 0 }])
    }

    function handleRemoveFood(e) {
        e.target.blur()
        if (foods.length === 1) {
            return null
        } else {
            setFoods(foods.slice(0, -1)) 
        }
    }

    console.log(time, action, selected, activity, foods)

    return (
        <>
            {/* <div id="pop" style={{color: 'white'}}>
                <h1>Tracker</h1>
            </div> */}
            <section className="gradient-custom" style={{minHeight: '100vh'}}>
                <div className="container py-6">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">FuelRight Monitoring</h3>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Text>Please provide information regarding your food consumption and activity results so that we can help get you on the path to success!</Form.Text>
                                        <br></br>
                                        <br></br>
                                        <Form.Group className="mb-3" controlId="formBasicTime">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control required type="time" value={time} onChange={e => setTime(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicAction">
                                            <Form.Label>Action</Form.Label>
                                            <Form.Control required list="action-list" type="text" value={action} onChange={handleChange}/>
                                            <datalist id="action-list">
                                                <option value="Wakeup"/>
                                                <option value="Food" />
                                                <option value="Activity"/>
                                                <option value="Bedtime"/>
                                            </datalist>
                                        </Form.Group>
                                        {/* {conditionalRender(action)} */}
                                        {selected.food ? (
                                            foods.map((food, index) => {
                                                return (
                                                    <Form.Group className="mb-3" controlId="formBasicFood" key={index}>
                                                        <Form.Label>Type of Food</Form.Label>
                                                        <Form.Control required type="text" value={food.name} onChange={e => handleFoodName(e, index)}/>
                                                        <Form.Label>Quantity (oz.)</Form.Label>
                                                        <Form.Control required type="text" value={food.portion} onChange={e => handleFoodPortion(e, index)}/>
                                                    </Form.Group>
                                                )
                                            }))
                                            : null}
                                        {selected.food ? (
                                            <div>
                                                <Button variant="secondary" type="button" onClick={handleAddFood}>Add Foods</Button>{" "}
                                                <Button variant="danger" type="button" onClick={handleRemoveFood}>Remove Foods</Button>
                                                <br></br>
                                                <br></br>
                                            </div>
                                        ) : null}
                                        {selected.activity ? (
                                            <Form.Group className="mb-3" controlId="formBasicFood">
                                                <Form.Label>Type of activity</Form.Label>
                                                <Form.Control required type="text" value={activity.name} onChange={e => setActivity({...activity, name: e.target.value})}/>
                                                <Form.Label>Duration</Form.Label>
                                                <Form.Control required type="text" value={activity.duration} onChange={e => setActivity({...activity, duration: parseInt(e.target.value)})}/>
                                                <Form.Label>Rate Perceived Effort</Form.Label>
                                                <Form.Control required type="text" value={activity.perceived_effort} onChange={e => setActivity({...activity, perceived_effort: parseInt(e.target.value)})}/>
                                            </Form.Group>
                                        ) : null}
                                        <Button variant="primary" type="submit">
                                            Submit Entry
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrackerForm


    // const [foodSelected, setFoodSelected] = useState(false)
    // const [activitySelected, setActivitySelected] = useState(false)
    // const [wakeupSelected, setWakeupSelected] = useState(false)
    // const [bedtimeSelected, setBedtimeSelected] = useState(false)
    // 
    // const input = (
    //     <>
    //         {/* <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}> */}
    //             <Form.Group className="mb-3" controlId="formBasicFood">
    //                 <Form.Label>Type of Food</Form.Label>
    //                 <Form.Control required type="text" onChange={e => console.log(e)}/>
    //                 <Form.Label>Quantity (oz.)</Form.Label>
    //                 <Form.Control required type="text" onChange={e => console.log(e)}/>
    //             </Form.Group>
    //         {/* </div> */}
    //         <Button variant="secondary" type="button" onClick={() => setFoodInputs([...foodInputs, input])}>Add Foods</Button>
    //         <br></br>
    //         <br></br>
    //     </>
    // )

    // const activityField = (
    //      // <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    //         <Form.Group className="mb-3" controlId="formBasicFood">
    //             <Form.Label>Type of Exercise</Form.Label>
    //             <Form.Control required type="text" onChange={e => console.log(e)}/>
    //             <Form.Label>Duration</Form.Label>
    //             <Form.Control required type="text" onChange={e => console.log(e)}/>
    //             <Form.Label>Rate Perceived Effort</Form.Label>
    //             <Form.Control required type="text" onChange={e => console.log(e)}/>
    //         </Form.Group>
    //     // </div>
    // )

    // function handleSubmit() {}

    // function addInput() {
    //     return (
    //         <>
    //             {/* <div style={{display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}> */}
    //                 <Form.Group className="mb-3" controlId="formBasicFood">
    //                     <Form.Label>Time</Form.Label>
    //                     <Form.Control required type="time" onChange={e => console.log(e)}/>
    //                 </Form.Group>
    //             {/* </div> */}
    //             <Button variant="secondary" type="button" onClick={() => setFoodInputs([...foodInputs, input])}>Add Foods</Button>
    //             <br></br>
    //             <br></br>
    //         </>
    //     )
    // }