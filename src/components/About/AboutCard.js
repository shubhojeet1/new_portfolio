import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubhojeet Chatterjee </span>
            from <span className="purple"> Bokaro Steel City, Jharkhand.</span>
            <br />
            <br />
           A Dynamic Full Stack Web Developer adept in JavaScript and the MERN stack
            
            excels in crafting scalable applications and efficient APIs using Node.js and Express.js.
           
          
            Skilled in swiftly adapting to new technologies Strong collaboration and problem-solving skills ensure exceptional project delivery.
          </p>
        

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubhojeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
