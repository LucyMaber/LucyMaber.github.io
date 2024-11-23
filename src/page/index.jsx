import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import BodyPage from "../partials/BodyPage"; // Ensure this is correctly exported
import { Linkedin, Github, Globe } from "react-bootstrap-icons";

function App() {
  return (
    <BodyPage title="Home" description="Welcome to Lucy Maber's Website">
      <Container className="pb-5 mb-5">
        {/* Hero Section */}
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Lucy Maber</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Lead developer and activist with a passion for digital rights and
            social advocacy. Currently managing the websites for TAGG and Pirate
            Party UK.
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
              color: "#ffffff", // Ensure text color is readable
              backgroundColor: "#FF5E5B", // Ko-fi brand red
              border: "none", // Remove any borders for a cleaner look
            }}
          >
            ❤️ Support Me on Ko-fi
          </Button>
        </div>

        {/* About Me Section */}
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Experienced in trans advocacy, web development, and leadership
              within the Pirate Party UK. Skilled in both front-end and back-end
              technologies, with a strong focus on open-source contributions.
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
                  Skilled in web scraping and NLP tools for advocacy projects
                </li>
                <li>
                  Expertise in machine learning for text classification and
                  entity linking
                </li>
                <li>Strong focus on human rights and privacy domains</li>
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
                  <strong>Pirate Party UK Initiatives:</strong> Leading policy
                  discussions on intellectual property, digital rights, and
                  environmental justice.
                </li>
                <li>
                  <strong>TransMedia Watch Media Project:</strong> Coordinating
                  a media tracking project from 2014 onwards, involving web
                  scraping for trans-related news.
                </li>
                <li>
                  <strong>Wikidata Custom Tokenizer:</strong> Developing a
                  custom tokenizer for language models using advanced entity
                  linking with Wikidata.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Portfolio Showcase */}
        <Card className="mb-3">
          <Card.Body>
            {/* <Card.Title>Portfolio Showcase</Card.Title> */}
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
                      Leading policy discussions on intellectual property,
                      digital rights, and environmental justice.
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
                    <Card.Title>TransMedia Watch Media Project</Card.Title>
                    <Card.Text>
                      Coordinating a media tracking project to improve
                      representation and data accessibility for research and
                      advocacy purposes.
                    </Card.Text>
                    <Button
                      variant="secondary"
                      href="https://www.tacc.org.uk/"
                      target="_blank"
                      aria-label="Learn more about TransMedia Watch Media Project"
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
              Whether you're an organization, developer, or advocate, I'd love
              to connect and work on meaningful projects together. Feel free to
              reach out!
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
