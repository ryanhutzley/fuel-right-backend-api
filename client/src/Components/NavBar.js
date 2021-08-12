import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand>FuelRight</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/login">Login</Nav.Link>
                    <Nav.Link to="/">Your Tracker</Nav.Link>
                    <Nav.Link to="/day">Your Day</Nav.Link>
                    <Nav.Link to="/history">Your History</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item to="/edit">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="/login">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar