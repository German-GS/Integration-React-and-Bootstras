import React from "react";
import Logo from "../img/Logo 1.png";
import "./style/navStyle.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'


class Navigation extends React.Component {
  render() {
    return (
      <Navbar sticky='top' bg="dark" variant="dark" expand="lg">
        <Navbar.Brand> <a href="#"><img className="logo" src={Logo} alt=""/></a> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Galery</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
