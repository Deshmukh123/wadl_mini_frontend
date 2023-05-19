import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Handwritten notes aid in quick learning through the engagement of multiple senses and active learning. By involving visual, auditory, and tactile senses, handwriting enhances information processing, leading to faster comprehension.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc:"You can always rely on our constant support, as we are here for you at all times, ready to provide assistance whenever you need it. Count on us to be by your side, helping you with any questions or challenges you may encounter along your journey.",
    icon: "ri-discuss-line",
  },

  {
    title: "Revise",
    desc:"Revision is crucial for solidifying understanding and reinforcing knowledge gained. It enhances retention and improves overall performance in exams or assessments.",
    icon: "ri-contacts-book-line",
  },<br></br>
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>

        <Col lg="12" className="text-center mb-5">
           <br></br> <h2 className="fw-bold">Our Features</h2>
          </Col>

          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
