import React from "react";
import "./App.css";
import Navigation from "./components/nav";
import Carousel from "./components/carousel"
import Galery from './components/galery'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="justify-content-lg-center">
      <Navigation></Navigation>
      <Carousel></Carousel>
      
      <Galery></Galery>
    </Container>
  );
}

export default App;
