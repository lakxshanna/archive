// src/components/About.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1>some type of "about" section?</h1>
        <p>
          like something about importance of archival work and claiming narratives ab student activism before Yale does? Then we can maybe discuss ER&M 300?
        </p>
      </div>
      <div className="about-carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>First Image Description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Second Image Description</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Third Image Description</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
