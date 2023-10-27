// import React from "react";
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import logo5 from '../assets/logo5.jpg'
// import { NavLink } from "react-router-dom";

import React from "react";
import { Navbar, Container, Nav , NavDropdown } from "react-bootstrap";
import logo from "../assets/logo5.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

// const NavBar = () => {
//     return <Navbar bg="white" expand="md" fixed="top">
//         <Container>
//             <Navbar.Brand href="#home"><img src={logo5} alt="logo" height="45" />Exotic Fruit</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <NavLink><i className="fas fa-home"></i> Home</NavLink>
//                     <NavLink>Sign in</NavLink>
//                     <NavLink>Sign up</NavLink>
//                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//                 <Form inline>
//                     <FormControl type="text" placeholder="Search" className="ml-sm-2" />
//                     <Button variant="outline-success">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
// }

// export default NavBar;

const NavBar = () => {
    return (
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
              <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/"
              >
                <i className="fa-regular fa-face-laugh-beam"></i>Home
              </NavLink>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin"
              >
                <i className="fa-regular fa-face-smile"></i>Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className="fa-regular fa-face-smile-wink"></i>Sign up
              </NavLink>
              
              <i className="fa-regular fa-face-grin-tongue"></i>
              <NavDropdown title="More Info" id="basic-nav-dropdown" className={styles.NavLink}
                activeClassName={styles.Active}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
export default NavBar;