import { NavLink } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "/src/assets/favicon-32x32.png"

export default function NavigationBar() {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        src={logo}
                        alt="GoodEats Logo"
                        width="32"
                        height="32"
                        className="d-inline-block align-top" />
                    {' '}GoodEats
                </Navbar.Brand>

                <Nav className="d-flex gap-3">
                    <Nav.Link as={NavLink} to="/" className="me-4">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="/recipes">Recipes</Nav.Link>
                    <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}