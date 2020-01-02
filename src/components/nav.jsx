import React from "react";
import {Button} from "react-bootstrap";
import Logo from '../img/Logo 1.png';
import './style/navStyle.css'

class Navigation extends React.Component {
  render() {
    return (
  
      // <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky fixed-top">
          <a className="navbar-brand" href="#">
            <img className="logo" src={Logo} alt="" srcSet=""/>
          </a>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Galery
              </a>
              <a className="nav-item nav-link" href="#">
                About Us
              </a>
              <a className="nav-item nav-link" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
        
      // </div>
    );
  }
}

export default Navigation;
