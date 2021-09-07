import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function NavBar({ user, logout, setDisplayForm, setErrors }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function handleClick() {
        setDisplayForm(true)
        setErrors([])
    }

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return (
        <>
            {windowWidth < 768 ? (
                <Navbar bg="dark" variant="dark" sticky="top" style={{minWidth: '100vw'}}>
                    <Container id="container">
                    <Navbar.Brand id="brand">FuelRight</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavDropdown title="Your Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item className="link" onClick={handleClick} as={Link} to="/">Tracker</NavDropdown.Item>
                                <NavDropdown.Item className="link" onClick={handleClick} as={Link} to="/day">Your Day</NavDropdown.Item>
                                <NavDropdown.Item className="link" onClick={handleClick} as={Link} to="/history">Your History</NavDropdown.Item>
                                <NavDropdown.Item className="link" onClick={handleClick} as={Link} to="/edit">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={logout} className="link">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            ) : (
            <Navbar bg="dark" variant="dark" sticky="top" style={{minWidth: '100vw'}}>
                <Container id="container">
                <Navbar.Brand id="brand">FuelRight</Navbar.Brand>
                    <Nav className="me-auto">
                        {user ? null : <Nav.Link className="link" as={Link} to="/login">Login</Nav.Link>}
                        <Nav.Link className="link" onClick={handleClick} as={Link} to="/">Tracker</Nav.Link>
                        <Nav.Link className="link" onClick={handleClick} as={Link} to="/day">Your Day</Nav.Link>
                        <Nav.Link className="link" onClick={handleClick} as={Link} to="/history">Your History</Nav.Link>
                        <NavDropdown title="Your Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item className="link" onClick={handleClick} as={Link} to="/edit">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout} className="link">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {user ? (<p style={{color: 'white', marginBottom: '5px', marginTop: '5px'}}><span style={{color: 'white'}}>Signed in as:</span> {user.name}</p>) : null}
                </Container>
            </Navbar> )}
        </>
    )
}

export default NavBar