import { NavLink, useNavigate } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "/src/assets/favicon-32x32.png"
import SearchBar from "/src/components/pageUtil/SearchBar.jsx"
import { useState } from "react"

export default function NavigationBar() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/search?query=${encodeURIComponent(query)}`)
        console.log("Search triggered with:", query)
    }
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
                    <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="/favorites">Favorites</Nav.Link>
                    <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
                </Nav>
            </Container>
        </Navbar>
    )
}