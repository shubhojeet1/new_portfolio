import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false); // To handle form submission status
  const [error, setError] = useState(""); // To handle any errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all the fields.");
      return;
    }

    // Construct the mailto link
    const mailtoLink = `mailto:jeetduke1234@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;

    // Redirect to the mailto link (opens the default email client)
    window.location.href = mailtoLink;

    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSent(true);
  };

  return (
    <Container fluid className="contact-section" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Particle />
      <Container style={{ flex: 1 }}>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              position: "relative",
              marginTop: "15%",
              zIndex: 1,
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"  }}>
            <span   style={{color:"white"}}> Get in Touch with</span>  <strong className="purple">Me</strong>
            </h1>

            {/* Display success/error messages */}
            {isSent && <Alert variant="success">Please wait! We'll get back to you soon.</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label style={{color:"white"}}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label  style={{color:"white"}}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label  style={{color:"white"}}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
      {/* Footer component */}
    
    </Container>
  );
}

export default Contact;
