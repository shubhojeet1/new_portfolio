import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import admin from "../../Assets/Projects/adminpaneltime.png";
import activity from "../../Assets/Projects/activity.png";
import comicbook from "../../Assets/Projects/comicbook.png";
import timesavor from "../../Assets/Projects/timesavor.png";
import atv from "../../Assets/Projects/atv.png";
import phila from "../../Assets/Projects/phila.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timesavor}
              isBlog={false}
              title="Timesavor"
              description="TimeSavor is a platform connecting wine enthusiasts to the heart of wine country. Users can discover wineries, plan personalized itineraries, and enjoy expert recommendations. Whether for a quick visit or an extended getaway, TimeSavor makes every wine-tasting experience seamless and memorable, offering tools to explore and savor with ease."
              demoLink="https://www.timesavor.io"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phila}
              isBlog={false}
              title="PhilaFun"
              description="Philafun is a dynamic platform designed for individuals and organizations to support charitable causes. Users can create or join organizations, make donations seamlessly using the Stripe payment gateway, and participate in impactful fundraising initiatives. The website fosters a community-driven approach to giving, making charity accessible and transparent for everyone."
              demoLink="https://www.philafun.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comicbook}
              isBlog={false}
              title="Comic Book (Generative AI)"
              description="Create captivating comics with our AI-powered platform. Generate characters, build narratives, and design covers effortlessly. New users receive 3,000 free coins to kickstart their journey. Download as a PDF or use our print-on-demand service to bring your creations to life. Start your comic adventure today!"
              demoLink="https://inktron-comics.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="ADMIN PANEL"
              description="The Time Savour Admin Panel is a centralized management system designed for efficient administration. It allows admins to manage users, wineries, and transactions, oversee account blockings and recoveries, handle deleted accounts, and manage nested avatars. Additionally, it includes email management processes to streamline communication and maintain operational oversight."
              demoLink="https://time-savour-admin.vercel.app/dashboard/default"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atv}
              isBlog={false}
              title="All The Virtue"
              description="All The Virtue is a platform offering thoughtful, high-merit ethical mediation for couples. We provide virtuous decisions and advice to help resolve disputes, no matter their significance. Whether the issue is small or substantial, we prioritize what matters to you, guiding couples toward resolution with an open mind and a focus on virtuous growth."
              demoLink="https://www.allthevirtue.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activity}
              isBlog={false}
              title="Activity Tracker"
              description="Activity Tracker is a platform designed to help users monitor and track their daily activities with ease. Whether it's steps, workouts, or overall health goals, users can log and visualize their progress. With personalized insights and motivation, the platform encourages a healthier lifestyle, helping users stay on top of their fitness and well-being every day."
              demoLink="https://activity-tracker-orpin.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
