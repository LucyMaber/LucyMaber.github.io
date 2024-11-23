import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import BodyPage from "../partials/BodyPage";
import { Linkedin, Github, Globe } from "react-bootstrap-icons";

function App() {
  return (
    <BodyPage title="Home" description="Welcome to Lucy Maber's Portfolio">
      <Container className="pb-5 mb-5">
        {/* Hero Section */}
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Lucy Maber</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Experienced web developer and technology enthusiast with a passion
            for creating innovative solutions. Skilled in React, Python, and
            natural language processing with a focus on building scalable and
            accessible web applications.
          </p>
          <Button
            variant="primary"
            href="#connect"
            aria-label="Contact Lucy Maber"
            className="mt-3"
          >
            Get in Touch
          </Button>{" "}
          <Button
            variant="warning"
            href="https://ko-fi.com/LucyMaber"
            target="_blank"
            aria-label="Support me on Ko-fi"
            className="mt-3"
            style={{
              marginLeft: "10px",
              color: "#ffffff",
              backgroundColor: "#FF5E5B",
              border: "none",
            }}
          >
            ❤️ Support My Projects
          </Button>
        </div>

        {/* About Me Section */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              I am a seasoned developer with expertise in web technologies and
              project management. I enjoy working on projects that bridge
              technology and innovation, delivering impactful solutions for
              clients and organizations.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Skills Section */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
              <ul>
                <li>Proficient in JavaScript, React, and Python</li>
                <li>Experienced in web scraping and data processing pipelines</li>
                <li>
                  Skilled in building NLP models for classification and
                  information extraction
                </li>
                <li>
                  Adept at managing and leading teams to deliver high-quality
                  results
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Projects Section */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Projects</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  <strong>TACC Web Development:</strong> Led the development and
                  management of the Trans Advocacy and Complaint Collective
                  website, ensuring accessibility and community engagement.
                </li>
                <li>
                  <strong>Web Scraping Pipelines:</strong> Developed data
                  collection tools to track trends and insights for advocacy and
                  research purposes.
                </li>
                <li>
                  <strong>Collaboration of Independent Pirates Website:</strong>{" "}
                  Managed and maintained the online presence for an
                  international organization focusing on digital rights and
                  intellectual property reform.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Portfolio Showcase */}
        <Card className="mb-3">
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200"
                    alt="Project 1 Screenshot"
                  />
                  <Card.Body>
                    <Card.Title>Web Development Projects</Card.Title>
                    <Card.Text>
                      Delivering robust web solutions with React, Bootstrap, and
                      Python-based backends.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="#"
                      target="_blank"
                      aria-label="Learn more about web development projects"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/300x200"
                    alt="Project 2 Screenshot"
                  />
                  <Card.Body>
                    <Card.Title>Data Analysis Tools</Card.Title>
                    <Card.Text>
                      Built tools for data extraction and analysis to support
                      informed decision-making.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="#"
                      target="_blank"
                      aria-label="Learn more about data analysis tools"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Call-to-Action Section */}
        <Card className="mb-3" id="connect">
          <Card.Body className="text-center">
            <h3>Interested in working together?</h3>
            <p>
              I am always open to new opportunities and collaborations. Let’s
              create impactful solutions together.
            </p>
            <Button
              variant="info"
              href="#"
              aria-label="View Portfolio"
            >
              View Portfolio
            </Button>
            <Button
              variant="dark"
              href="https://github.com/LucyMaber"
              target="_blank"
              aria-label="Visit GitHub profile"
            >
              <Github /> GitHub
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </BodyPage>
  );
}

export default App;
