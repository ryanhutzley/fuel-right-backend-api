import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useState } from 'react'

function Login({ onLogin, setDisplayForm }) {
    const [formDisplayed, setFormDisplayed] = useState(true)
    const [existingUser, setExistingUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        weight: ""
    })

    const history = useHistory()

    // console.log(history)
    console.log(onLogin)

    function handleClick() {
        setFormDisplayed(!formDisplayed)
        setFormData({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            weight: ""
        })
        setExistingUser({ email: "", password: "" })
        setErrors([])
    }

    async function handleSignup(e) {
        e.preventDefault()
        e.target.blur()
        const res = await fetch("/signup", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        if (res.ok) {
            onLogin(data) // <== error: this is not a function??, handleUser is an attempt to avoid passing down state setter
            setDisplayForm(true)
            history.push("/") // <== pushing to day instead of tracker page and I don't know why
        } else {
            setErrors(data.errors)
            setFormData({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                weight: ""
            })
        }
    }

    async function handleLogin(e) {
        e.preventDefault()
        e.target.blur()
        const res = await fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(existingUser)
        })
        const data = await res.json()
        if (res.ok) {
            onLogin(data)
            setDisplayForm(true)
            history.push("/")
        } else {
            setErrors(data.errors)
            setExistingUser({ email: "", password: "" })
        }
    }

    // console.log(formData)
    // console.log(existingUser)

    return (
        <div>
            {formDisplayed ? (
                <>
                <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', textAlign: 'center', width: '80%', margin: 'auto', color: 'white'}}>
                    <div id="pop">
                        <h1 style={{marginTop: '50px', textAlign: 'center'}}>Welcome to <span id="brand" style={{textDecorationLine: 'underline'}}>FuelRight</span></h1>
                        <br></br>
                        <br></br>
                        <h3 style={{fontStyle: 'italic'}}>A digital lifestyle log so you can optimize your performance in the arena of your choosing</h3>
                        <br></br>
                        <h3 style={{fontStyle: 'italic'}}>Unlocking a better you is hard...</h3>
                        <br></br>
                        <br></br>
                        <h3><span id="brand" style={{textDecorationLine: 'underline', fontStyle: 'bolder'}}>FuelRight</span> makes it simple</h3>
                    </div>
                </div>
                <section className="gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-3">FuelRight Signup</h3>
                                        <Form onSubmit={handleSignup}>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control required type="name" placeholder="Enter name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control required type="email" placeholder="Enter email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control required type="password" placeholder="Enter Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                                                <Form.Label>Password Confirmation</Form.Label>
                                                <Form.Control required type="password" placeholder="Password Confirmation" value={formData.password_confirmation} onChange={e => setFormData({...formData, password_confirmation: e.target.value})}/>
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicWeight">
                                                <Form.Label>Weight</Form.Label>
                                                <Form.Control required type="text" placeholder="Weight in lbs." value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})}/>
                                            </Form.Group>
                                            <div style={{display: 'inline-flex', flexDirection: 'row'}}>
                                                <Button variant="primary" type="submit">
                                                    Create Account
                                                </Button>
                                                <p style={{marginLeft: '15px', marginBottom: '0px', marginTop: '5px'}}>Already have an account? Login <a className="link" onClick={handleClick}>here</a> </p>
                                            </div>
                                            <br></br>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </section>
                </>
            ) : (
                <>
                    {/* <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', textAlign: 'center', width: '80%', margin: 'auto', color: 'white'}}>
                        <h1 style={{marginTop: '50px', textAlign: 'center'}}>Welcome to <span id="brand" style={{textDecorationLine: 'underline'}}>FuelRight</span></h1>
                        <br></br>
                        <br></br>
                        <div>
                            <h3 style={{fontStyle: 'italic'}}>A digital lifestyle log so you can optimize your performance in the arena of your choosing</h3>
                            <br></br>
                            <h3 style={{fontStyle: 'italic'}}>Unlocking a better you is hard...</h3>
                            <br></br>
                            <br></br>
                            <h3><span id="brand" style={{textDecorationLine: 'underline', fontStyle: 'bolder'}}>FuelRight</span> makes it simple</h3>
                        </div>
                    </div> */}
                    <section className="gradient-custom" style={{minHeight: '100vh'}}>
                        <div className="container py-6">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-12 col-lg-9 col-xl-7">
                                    <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                        <div className="card-body p-4 p-md-5">
                                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">FuelRight Signup</h3>
                                            <Form onSubmit={handleLogin}>
                                                
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control required type="email" placeholder="Enter email" value={existingUser.email} onChange={e => setExistingUser({...existingUser, email: e.target.value})}/>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control required type="password" placeholder="Enter Password" value={existingUser.password} onChange={e => setExistingUser({...existingUser, password: e.target.value})}/>
                                                </Form.Group>
                                          
                                                <div style={{display: 'inline-flex', flexDirection: 'row'}}>
                                                    <Button variant="primary" type="submit">
                                                        Login
                                                    </Button>
                                                    <p style={{marginLeft: '15px', marginBottom: '0px', marginTop: '5px'}}>Back to <a className="link" onClick={handleClick}>Signup</a> </p>
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
                </>
            )
            }
        </div>
    )
}

export default Login