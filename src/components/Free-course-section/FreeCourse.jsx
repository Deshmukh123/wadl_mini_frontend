import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import chooseImg from "../../assests/images/seo.png";




import "./free-course.css";



const FreeCourse = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <Container>
        <Row>
          <br></br><br></br><Col lg="12" className="text-center mb-5">
           <br></br> <h2 className="fw-bold">Usefull Youtube Lectures</h2>
          </Col>
          
          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=1afG3puL8Yw"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=hcyzxsV4xsk"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
          {/* <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Zff3rUY0iGg"
                  controls
                  width="50%"
                  height="250px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
