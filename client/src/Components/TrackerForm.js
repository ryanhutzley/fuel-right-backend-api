import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function TrackerForm({ addEntry, displayForm, setDisplayForm, errors }) {
    const [action, setAction] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [activity, setActivity] = useState({
        name: "",
        duration: "",
        perceived_effort: ""
    })
    const [foods, setFoods] = useState([{ name: "", portion: "" }])
    const [selected, setSelected] = useState({ wakeup: false, food: false, activity: false, bedtime: false })

    function handleSubmit(e) {
        e.preventDefault()
        e.target[3].blur()
        if (selected.wakeup) {   
            let payload = { date, time }
            addEntry(action.toLowerCase(), payload)
            setSelected({...selected, wakeup: false})
            setTime("")
            setDate("")
            setAction("")
            // setDisplayForm(false)
        }
        else if (selected.food) {
            let payload = foods.map(el => {
                return {...el, date, time}
            })
            addEntry(action.toLowerCase(), payload)
            setSelected({...selected, food: false})
            setTime("")
            setDate("")
            setFoods([{ name: "", portion: "" }])
            setAction("")
            // setDisplayForm(false)
        }
        else if (selected.activity) {
            let payload = {...activity, date: date, time: time}
            addEntry(action.toLowerCase(), payload)
            setSelected({...selected, activity: false})
            setTime("")
            setDate("")
            setActivity({ name: "", duration: "", perceived_effort: "" })
            setAction("")
            // setDisplayForm(false)
        } else if (selected.bedtime) {
            let payload = { date, time }
            addEntry(action.toLowerCase(), payload)
            setSelected({...selected, bedtime: false})
            setTime("")
            setDate("")
            setAction("")
            // setDisplayForm(false)
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

    function handleActionChange(e) {
        setAction(e.target.value)
        if (e.target.value === "Food") {
            setSelected({ wakeup: false, food: true, activity: false, bedtime: false })
            setActivity({ name: "", duration: "", perceived_effort: "" })
        } else if (e.target.value === "Activity") {
            setSelected({ wakeup: false, food: false, activity: true, bedtime: false })
            setFoods([{ name: "", portion: "" }])
        } else if (e.target.value === "Wakeup") {
            setSelected({ wakeup: true, food: false, activity: false, bedtime: false })
            setActivity({ name: "", duration: "", perceived_effort: "" })
            setFoods([{ name: "", portion: "" }])
            return null
        } else if (e.target.value === "Bedtime") {
            setSelected({ wakeup: false, food: false, activity: false, bedtime: true })
            setActivity({ name: "", duration: "", perceived_effort: "" })
            setFoods([{ name: "", portion: "" }])
            return null
        }
    }

    function handleAddFood(e) {
        e.target.blur()
        setFoods([...foods, { name: "", portion: "" }])
    }

    function handleRemoveFood(e) {
        e.target.blur()
        if (foods.length === 1) {
            return null
        } else {
            setFoods(foods.slice(0, -1)) 
        }
    }

    console.log(errors)
    console.log(foods)

    return (
        <>
            {displayForm ? (
            <section className="gradient-custom" style={{minHeight: '100vh', minWidth: '100vw'}}>
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
                                        <Form.Group className="mb-3" controlId="formBasicDate">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control required type="date" value={date} onChange={e => setDate(e.target.value)}/>
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicTime">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control required type="time" value={time} onChange={e => setTime(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicAction">
                                            <Form.Label>Action</Form.Label>
                                            <Form.Control required list="action-list" type="text" value={action} onChange={handleActionChange}/>
                                            <datalist id="action-list">
                                                <option value="Wakeup"/>
                                                <option value="Food" />
                                                <option value="Activity"/>
                                                <option value="Bedtime"/>
                                            </datalist>
                                        </Form.Group>
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
                                                <Form.Label>Duration (mins.)</Form.Label>
                                                <Form.Control required type="text" value={activity.duration} onChange={e => setActivity({...activity, duration: e.target.value})}/>
                                                <br></br>
                                                <Form.Label>Rate Perceived Effort</Form.Label> 
                                                <br></br>
                                                <Form.Text>(How did this workout feel compared to past efforts of similar intensity/duration? scale: 1-10, 1 = way worse, 5 = the same, 10 = way better)</Form.Text>
                                                <br></br>
                                                <br></br>
                                                <Form.Control required type="text" value={activity.perceived_effort} onChange={e => setActivity({...activity, perceived_effort: e.target.value})}/>
                                            </Form.Group>
                                        ) : null}
                                        <Button variant="primary" type="submit">
                                            Submit Entry
                                        </Button>
                                        <br></br>
                                        {errors !== [] ? 
                                        (<div>
                                            {errors.map((error, index)=> (<p style={{color: 'red', marginBottom: '0px', marginTop: '10px'}} key={index}>{error}</p>))}
                                        </div>)
                                        : null}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> ) : (
                <section className="gradient-custom" style={{minHeight: '100vh', minWidth: '100vw'}}>
                    <div className="container py-6">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-4 p-md-5">
                                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">Your entry has been recorded!</h3>
                                            <a className="link" onClick={() => setDisplayForm(true)}>Make another submission</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default TrackerForm