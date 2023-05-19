import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-200" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              creating a website aimed at helping their peers score excellent marks. Their platform offers valuable resources, study materials, and guidance, empowering fellow students to achieve academic success and thrive in their educational pursuits.
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
