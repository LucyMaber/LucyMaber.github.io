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
          </Button>{" "}
          <Button
            variant="success"
            href="https://www.fiverr.com/lucy_ppuk"
            target="_blank"
            aria-label="Hire me on Fiverr"
            className="mt-3"
            style={{
              marginLeft: "10px",
              color: "#ffffff",
              backgroundColor: "#1DBF73",
              border: "none",
            }}
          >
            💼 Hire Me on Fiverr
          </Button>
          {/* Disclaimer Section */}
          <div className="mt-3">
            <small>
              <strong>Please Note:</strong> Donations made through this page
              support my personal projects and living expenses. They are{" "}
              <strong>not</strong> contributions to the Pirate Party UK, TACC,
              or any political campaign. To donate to the Pirate Party UK or
              TACC, or to support a specific candidate in election or just a election effort, please visit
              their official websites.
            </small>
          </div>
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
                <li>
                  Experienced in web scraping and data processing pipelines
                </li>
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
        <Card className="mb-5">
          <Card.Body>
            <h2 className="text-center mb-4">Project Showcase</h2>
            <Row className="g-4">
              {/* Example project data for mapping */}
              {[
                {
                  id: 1,
                  title: "Web Development Projects",
                  description:
                    "Delivering robust web solutions with React, Bootstrap, and Python-based backends.",
                  imgSrc: "https://via.placeholder.com/300x200",
                  link: "#",
                },
                {
                  id: 2,
                  title: "Data Analysis Tools",
                  description:
                    "Built tools for data extraction and analysis to support informed decision-making.",
                  imgSrc: "https://via.placeholder.com/300x200",
                  link: "#",
                },
              ].map((project) => (
                <Col md={6} key={project.id}>
                  <Card className="h-100 shadow-sm project-card">
                    <Card.Img
                      variant="top"
                      src={project.imgSrc}
                      alt={`${project.title} Screenshot`}
                      className="project-img"
                    />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <Button
                        variant="primary"
                        href={project.link}
                        target="_blank"
                        aria-label={`Learn more about ${project.title}`}
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <Button
                variant="info"
                href="/Project.html"
                aria-label="See more projects"
                size="lg"
              >
                See More Projects
              </Button>
            </div>
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
            <Button variant="info" href="/Project.html" aria-label="Project">
              Project
            </Button>
            <Button
              variant="dark"
              href="https://github.com/LucyMaber"
              target="_blank"
              aria-label="Visit GitHub profile"
              className="ms-2"
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
