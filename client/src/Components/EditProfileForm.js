import { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

function EditProfileForm({ user, handleUserUpdate, handleUserDelete, errors }) {
    const [show, setShow] = useState(false)
    const [profileData, setProfileData] = useState({
        name: user.name,
        email: user.email,
        weight: user.weight
    })

    function handleSubmit(e) {
        e.preventDefault()
        handleUserUpdate(profileData)
    }

    function handleClose() {
        setShow(false)
    }

    function handleShow(e) {
        e.target.blur()
        setShow(true)
    }

    function handleDeleteConfirmation() {
        handleUserDelete()
        setShow(false)
    }


    return (
        <div style={{minHeight: '100vh'}}>
            <br></br>
            <br></br>
            <br></br>
            <section className="gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">Edit FuelRight Profile</h3>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control required type="name" placeholder="Enter name" value={profileData.name} onChange={e => setProfileData({...profileData, name: e.target.value})}/>
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control required type="email" placeholder="Enter email" value={profileData.email} onChange={e => setProfileData({...profileData, email: e.target.value})} />
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicWeight">
                                                <Form.Label>Weight</Form.Label>
                                                <Form.Control required type="text" placeholder="Weight in lbs." value={profileData.weight} onChange={e => setProfileData({...profileData, weight: e.target.value})}/>
                                            </Form.Group>
                                            <div style={{display: 'inline-flex', flexDirection: 'row', width: '50%'}}>
                                                <Button variant="primary" type="submit" style={{marginRight: '10px'}}>
                                                    Save Changes
                                                </Button>
                                                <Button variant="danger" type="button" onClick={handleShow}>
                                                    Delete Account
                                                </Button>
                                                <Modal 
                                                    show={show}
                                                    onHide={handleClose}
                                                    backdrop="static"
                                                    keyboard={false}
                                                    centered
                                                >
                                                    <Modal.Header>
                                                        <Modal.Title>You're about to delete your FuelRight profile...</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>All of your data will be lost - schedules, activities, foods, etc. Are you sure you want to delete?</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            No, take me back!
                                                        </Button>
                                                        <Button variant="danger" onClick={handleDeleteConfirmation}>
                                                            Yes, delete my profile :(
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal> 
                                            </div>
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
            </section>
        </div>
    )
}

export default EditProfileForm