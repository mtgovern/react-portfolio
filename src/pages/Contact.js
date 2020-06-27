import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Me!</h1>
          </Col>
        </Row>
        <Row>
        {/* <Col size="md-3">
            <img alt="Maria McGovern" src="images/maria.jpg" className="img-fluid" />
          </Col> */}
          <Col size="md-12">
            <p>
            Maria McGovern
            <br/>
            mtgovern@me.com
            <br/>
            <a href="https://www.linkedin.com/in/mariamcgovern/">LinkedIn</a>
            <br/>
            <a href="/images/Maria_McGovern_Resume_2.pdf" alt="resume">Resume</a>
            <br/>
            <a href="https://www.github.com/mtgovern/">Github</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
