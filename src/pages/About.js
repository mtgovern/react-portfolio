import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Maria McGovern</h1>
          </Col>
        </Row>
        <Row>
        <Col size="md-3">
            <img alt="Maria McGovern" src="images/maria.jpg" className="img-fluid" />
          </Col>
          <Col size="md-9">
            <p>
            As a Graphic Designer and Photographer, I’ve continually found my greatest successes have been achieved in the areas of corporate branding, web and print design, and presentations. With over 10-years experience in multimedia, marketing, and print design, I have proven myself to be highly skilled in translating subject matter into concrete designs for a wide range of marketing, promotional, and informational materials.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
