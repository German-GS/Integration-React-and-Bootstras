import React from "react";
import ImageCarousel1 from "../img/Web-20.JPG";
import ImageCarousel2 from "../img/Web-40.JPG";
import ImageCarousel3 from "../img/Web-47.JPG";
import "./style/carouselStyle.css";
import Carousel from "react-bootstrap/Carousel";

class Carousel01 extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageCarousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageCarousel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageCarousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousel01;
