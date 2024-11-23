import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import BodyPage from "../partials/BodyPage";
import { Linkedin, Github, Globe } from "react-bootstrap-icons";

function App() {
  return (
    <BodyPage title="Home" description="Welcome to Lucy Maber's Website">
      <Container className="pb-5 mb-5">
        {/* Hero Section */}
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Lucy Maber</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Lead developer, activist, and advocate for digital rights and social
            justice. Balancing roles in web development and leadership within
            TAGG and Pirate Party UK, while supporting independent advocacy
            projects.
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
            ❤️ Support Me on Ko-fi
          </Button>
          <p className="mt-3 text-muted small">
            <strong>Transparency Notice:</strong> Donations through Ko-fi are
            used exclusively for independent advocacy, technology projects, and
            personal living expenses (e.g., keeping a roof over my head). These
            funds are entirely separate from activities with Pirate Party UK or
            TAGG.
          </p>
        </div>

        {/* About Me Section */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              I am a dedicated advocate for human rights, with a strong focus on
              trans advocacy and digital freedom. As the leader of Pirate Party
              UK and a web developer for TAGG, I am passionate about advancing
              policies that promote transparency, inclusion, and innovation.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Skills Section */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
              <ul>
                <li>JavaScript, React, and Python expertise</li>
                <li>
                  Experience in building and managing web scraping pipelines for
                  research and advocacy
                </li>
                <li>
                  Proficient in natural language processing and AI for text
                  classification
                </li>
                <li>
                  Strong leadership in human rights and privacy-focused
                  initiatives
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
                  <strong>Pirate Party UK Initiatives:</strong> Spearheading
                  policy discussions on intellectual property and digital
                  rights.
                </li>
                <li>
                  <strong>TransMedia Watch Media Project:</strong> Managing
                  media tracking for trans representation since 2014.
                </li>
                <li>
                  <strong>Independent Technology Projects:</strong> Developing
                  tools for better privacy and accessibility on the web.
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
                    <Card.Title>Pirate Party UK Initiatives</Card.Title>
                    <Card.Text>
                      Driving policies on digital rights, IP reform, and
                      grassroots environmental justice campaigns.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="https://ukpirate.party/"
                      target="_blank"
                      aria-label="Learn more about Pirate Party UK Initiatives"
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
                    <Card.Title>Independent Advocacy Projects</Card.Title>
                    <Card.Text>
                      Using technology and community engagement to advance
                      social justice causes beyond political boundaries.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="https://ko-fi.com/LucyMaber"
                      target="_blank"
                      aria-label="Support my independent advocacy projects"
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
            <h3>Interested in collaborating?</h3>
            <p>
              Let's work together on creating a more equitable, transparent, and
              privacy-focused future. Whether you're an organization, developer,
              or advocate, feel free to reach out!
            </p>
            <Button
              variant="info"
              href="https://www.tacc.org.uk/"
              target="_blank"
              aria-label="Visit TACC website"
            >
              <Globe /> Visit TACC
            </Button>
            <Button
              variant="info"
              href="https://ukpirate.party/"
              target="_blank"
              aria-label="Visit Pirate Party UK website"
            >
              <Globe /> Visit Pirate Party UK
            </Button>
            <Button
              variant="dark"
              href="https://github.com/LucyMaber"
              target="_blank"
              aria-label="Visit Lucy Maber's GitHub profile"
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
