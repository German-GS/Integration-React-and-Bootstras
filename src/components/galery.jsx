import React from "react";
import "./style/galeryStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgSocial from "../img/Indigente 1.jpg";
import imgArchitect from "../img/Web-47.JPG";
import imgSreet from "../img/Web-40.JPG";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

class Galery extends React.Component {
  render() {
    return (
      <div className="content-justify-sm-center">
        <h1>Galery</h1>
        <hr></hr>

        <CardDeck className="card-deck content-jutify-sm-center">
          <Card className="cardBody">
            <Card.Img variant="top" src={imgSocial} className="imgCard" />
            <Card.Body>
              <Card.Title>Social Photography</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cardBody">
            <Card.Img variant="top" src={imgArchitect} className="imgCard" />
            <Card.Body>
              <Card.Title>Architecture</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="cardBody">
            <Card.Img
              variant="top"
              src={imgSreet}
              className="imgCard"
            />
            <Card.Body>
              <Card.Title>Street Photography</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Galery;
