import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Stephen Muiru</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;