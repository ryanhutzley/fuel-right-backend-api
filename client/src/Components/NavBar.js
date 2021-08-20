import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar({ user, logout, setDisplayForm, setErrors }) {

    function handleClick() {
        setDisplayForm(true)
        setErrors([])
    }

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
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
        </Navbar>
    )
}

export default NavBar