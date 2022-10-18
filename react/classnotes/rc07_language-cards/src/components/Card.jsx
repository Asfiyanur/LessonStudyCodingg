import React from "react";
import Language from "./Language";
import Container from "react-bootstrap/Container";
import { data } from "../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  return (
    <Container
      className="rounded-4 mt-4 pt-4"
      style={{ background: "#C37EDB" }}
    >
      <h1 className="text-white my-2">Language</h1>
      <Row className="g-3 justify-content-center">
        {data.map((Lang, index) => {
          return (
            <Col key={index} sm={6} md={4} lg={3}>
              <Language {...Lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
