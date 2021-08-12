import { Form, Button } from 'react-bootstrap'

function Login() {
    return (
        <>
            <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', textAlign: 'center', width: '80%', margin: 'auto'}}>
                <h1 style={{marginTop: '50px', textAlign: 'center'}}>Welcome to <span id="brand" style={{textDecorationLine: 'underline'}}>FuelRight</span></h1>
                <br></br>
                <div style={{fontStyle: 'italic'}}>
                    <h2>A digital lifestyle log so you can optimize your performance the arena of your choosing</h2>
                    <br></br>
                    <h2>Unlocking a better you is requires diligence and careful monitoring</h2>
                    <br></br>
                    <h2><span id="brand" style={{textDecorationLine: 'underline', fontStyle: 'normal'}}>FuelRight</span> makes it simple</h2>
                </div>
            </div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">FuelRight Signup</h3>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="name" placeholder="Enter name" />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password Confirmation</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicWeight">
                                            <Form.Label>Weight</Form.Label>
                                            <Form.Control type="number" placeholder="Weight in lbs." />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Create Account
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

export default Login