import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand id="brand">FuelRight</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="link" as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link className="link" as={Link} to="/">Your Tracker</Nav.Link>
                    <Nav.Link className="link" as={Link} to="/day">Your Day</Nav.Link>
                    <Nav.Link className="link" as={Link} to="/history">Your History</Nav.Link>
                    <NavDropdown title="Your Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item className="link" as={Link} to="/edit">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="link" as={Link} to="/login">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar