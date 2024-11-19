import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";


function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-column">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        {/* If the component contains a Demo link, render the Demo button */}
        {!props.isBlog && props.demoLink && (
          <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="mt-auto">
              <CgWebsite /> &nbsp; Demo
            </Button>
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
