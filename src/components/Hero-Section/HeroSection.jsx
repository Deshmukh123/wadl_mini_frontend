import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Learn   Grow   Succeed
              </h2>
              <p className="mb-5">
              Embrace the transformative power of education, as it offers the key to unlocking a world of possibilities. Through learning, growth becomes attainable, leading to personal and professional success. Cultivate curiosity, ask questions, and let knowledge empower you to shape your own destiny. Education is not just about acquiring information; it is a lifelong journey of exploration, self-discovery, and empowerment. Embrace the joy of learning, step out of your comfort zone, and let education guide you towards a brighter future.
              </p>
            </div>
           
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
