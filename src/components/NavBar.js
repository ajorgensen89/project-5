import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import logo5 from '../assets/logo5.jpg'

const NavBar = () => {
    return <Navbar bg="white" expand="md" fixed="top">
        <Container>
            <Navbar.Brand href="#home"><img src={logo5} alt="logo" height="45" />Exotic Fruit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><i className="fas fa-home"></i> Home</Nav.Link>
                    <Nav.Link>Sign in</Nav.Link>
                    <Nav.Link>Sign up</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="ml-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar;