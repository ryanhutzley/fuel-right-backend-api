import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function TrackerForm() {
    const [action, setAction] = useState("")
    const [foodSelected, setFoodSelected] = useState(false)
    const [exerciseSelected, setExerciseSelected] = useState(false)
    const [foodInputs, setFoodInputs] = useState([1])

    function handleSubmit() {}

    function handleChange(e) {
        setAction(e.target.value)
        if (e.target.value === "Food") {
            setFoodSelected(true)
            setExerciseSelected(false)
        } else if (e.target.value === "Exercise") {
            setExerciseSelected(true)
            setFoodSelected(false)
        } else if (e.target.value === "Wakeup") {
            setExerciseSelected(false)
            setFoodSelected(false)
            return null
        } else if (e.target.value === "Bedtime") {
            setExerciseSelected(false)
            setFoodSelected(false)
            return null
        }
    }

    function handleAddFood(e) {
        e.target.blur()
        setFoodInputs([...foodInputs, 1])
    }

    function handleRemoveFood(e) {
        e.target.blur()
        if (foodInputs.length === 1) {
            return null
        } else {
            setFoodInputs(foodInputs.slice(0, -1))
        }
    }

    console.log(action)
    console.log(foodSelected)
    console.log(exerciseSelected)

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
                                        <Form.Text>Please provide information regarding your food consumption and exercise results so that we can help get you on the path to success!</Form.Text>
                                        <br></br>
                                        <br></br>
                                        <Form.Group className="mb-3" controlId="formBasicTime">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control required type="time" onChange={e => console.log(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicAction">
                                            <Form.Label>Action</Form.Label>
                                            <Form.Control required list="action-list" type="text" onChange={handleChange}/>
                                            <datalist id="action-list">
                                                <option value="Wakeup"/>
                                                <option value="Food" />
                                                <option value="Exercise"/>
                                                <option value="Bedtime"/>
                                            </datalist>
                                        </Form.Group>
                                        {/* {conditionalRender(action)} */}
                                        {foodSelected ? (
                                            foodInputs.map((el, index) => {
                                                return (
                                                    <>
                                                        <Form.Group className="mb-3" controlId="formBasicFood" key={index}>
                                                            <Form.Label>Type of Food</Form.Label>
                                                            <Form.Control required type="text" onChange={e => console.log(e)}/>
                                                            <Form.Label>Quantity (oz.)</Form.Label>
                                                            <Form.Control required type="text" onChange={e => console.log(e)}/>
                                                        </Form.Group>
                                                    </>
                                                )
                                            }))
                                            : null}
                                        {foodSelected ? (
                                            <div>
                                                <Button variant="secondary" type="button" onClick={handleAddFood}>Add Foods</Button>{" "}
                                                <Button variant="danger" type="button" onClick={handleRemoveFood}>Remove Foods</Button>
                                                <br></br>
                                                <br></br>
                                            </div>
                                        ) : null}
                                        {exerciseSelected ? (
                                            <Form.Group className="mb-3" controlId="formBasicFood">
                                                <Form.Label>Type of Exercise</Form.Label>
                                                <Form.Control required type="text" onChange={e => console.log(e)}/>
                                                <Form.Label>Duration</Form.Label>
                                                <Form.Control required type="text" onChange={e => console.log(e)}/>
                                                <Form.Label>Rate Perceived Effort</Form.Label>
                                                <Form.Control required type="text" onChange={e => console.log(e)}/>
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

    // const exerciseField = (
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