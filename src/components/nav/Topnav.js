import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PersonCircle, XCircle } from 'react-bootstrap-icons';

const Topnav = (props) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link to='/'><Navbar.Brand>Med School App</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Med School" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Applications</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Application Planner</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Extra Curriculars</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Work Experience</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Essays</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Letters of Recommendation</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Medical Schools</NavDropdown.Item>
          </NavDropdown>          
          <NavDropdown title="Pre-Med" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Student Planner</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Education</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Courses</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="">Profile <PersonCircle /></Nav.Link>
          <Nav.Link href="">Logout <XCircle /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}


export default Topnav;