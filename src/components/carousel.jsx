import React from "react";
import ImageCarousel1 from "../img/Web-20.JPG";
import ImageCarousel2 from "../img/Web-40.JPG";
import ImageCarousel3 from "../img/Indigente 1.jpg";
import "./style/carouselStyle.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel01 extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageCarousel1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Teatro Melico Salazar</h3>
                <p>Fotografia arquitectonica</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageCarousel2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Fotografia callejera</h3>
                <p>
                  Fotografias de los diferentes sitios de las ciudades de Costa
                  Rica
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImageCarousel3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Fotografia Social</h3>
                <p>
                  Fotografia de las diferentes problematicas sociales de la vida
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    );
  }
}

export default Carousel01;
