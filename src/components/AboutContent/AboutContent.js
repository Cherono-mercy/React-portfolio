import React from "react";

import { Link } from "react-router-dom";
import "./AboutContent.css";

import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'



const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who I am</h1>
        <p>
          I am a dedicated software developer skilled in full-stack development,
          specializing in creating responsive, scalable web applications using
          modern technologies like React.js and Node.js. With a background in
          Electrical and Electronics Engineering, I bring a unique
          problem-solving approach to building efficient, reliable solutions.
          I’m passionate about turning ideas into impactful digital products and
          helping businesses achieve their goals through innovative,
          high-quality software. I am committed to helping businesses and teams
          achieve their goals through efficient, reliable, and maintainable
          code.
        </p>
        <Link to="/contact"> <button className="btn">Contact Me</button></Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top" >
                <img src={about1} className="img" alt="about-img"/>
            </div>
            <div className="img-stack bottom" >
                <img src={about2} className="img" alt="about-img"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
