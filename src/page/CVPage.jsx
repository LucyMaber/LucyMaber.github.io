import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import BodyPage from "../partials/BodyPage"; // Ensure this is correctly exported

function CVPage() {
  return (
    <BodyPage title="Home" description="Welcome to Lucy Maber's Website">
      <Container className="py-5">
        <div className="text-center mb-4">
          <h1>Lucy Maber</h1>
          <p>Accomplished Software Developer | Chichester, UK</p>
          <Button
            href="mailto:lucymaber0@gmail.com"
            variant="primary"
            aria-label="Email Lucy Maber"
            className="mx-2"
          >
            Email Me
          </Button>
          <Button
            href="https://github.com/LucyMaber"
            target="_blank"
            variant="dark"
            aria-label="View Lucy's GitHub"
            className="mx-2"
          >
            GitHub
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Contact Information</Card.Title>
            <ul>
              <li>
                <strong>Phone:</strong> 01243 811672
              </li>
              <li>
                <strong>Email:</strong> lucymaber0@gmail.com
              </li>
              <li>
                <strong>Location:</strong> Chichester
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/LucyMaber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/LucyMaber
                </a>
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Summary */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Summary</Card.Title>
            <Card.Text>
              Accomplished software developer with a Master of Engineering in
              Computer Science, offering extensive experience in modern web
              technologies and software engineering. Proficient in creating and
              implementing innovative solutions, with a strong background in
              React.js, Python, JavaScript, and cloud-based technologies.
              Demonstrates exceptional problem-solving abilities and effective
              communication skills, overcoming the challenges of dyslexia and
              dyspraxia through adaptive strategies and assistive technology.
              Committed to continuous learning and professional development,
              with a focus on AI development and active participation in global
              technological initiatives.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Education */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <ul>
              <li>
                <strong>
                  Master of Engineering (M.Eng) in Computer Science (Merit)
                </strong>{" "}
                - University of Portsmouth, 2017-2021
              </li>
              <li>
                <strong>Extended Diploma in IT (Triple Distinction)</strong> -
                Chichester College, 2014-2016
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Professional Experience */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Professional Experience</Card.Title>
            <ul>
              <li>
                <strong>Web Developer</strong> - Mothership (Dec 2023 - June
                2024)
                <ul>
                  <li>
                    Developed and maintained web applications using React,
                    ensuring a seamless user experience.
                  </li>
                  <li>
                    Collaborated in the creation and refinement of UI components
                    using Storybook.
                  </li>
                  <li>
                    Worked in an Agile team environment, contributing to sprint
                    planning and retrospectives.
                  </li>
                  <li>
                    Focused on features improving functionality for veterinary
                    professionals.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Software Engineer</strong> - IBM Project (2021)
                <ul>
                  <li>
                    Created a Mobile Assistant app for the elderly to facilitate
                    independent living.
                  </li>
                  <li>
                    Developed an Android application using Agile Scrum
                    methodology.
                  </li>
                  <li>
                    Utilised IBM Watson Cloud and Git for version control.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Researcher</strong> - Dissertation Project (2020)
                <ul>
                  <li>
                    Conducted research on distributed hash tables to create
                    decentralised networks.
                  </li>
                  <li>
                    Demonstrated knowledge of decentralised systems and
                    proficiency in Cord and Can.
                  </li>
                </ul>
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Personal Projects */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Personal Projects</Card.Title>
            <ul>
              <li>
                <strong>Article Download Tool:</strong> Used BeautifulSoup and
                Python to scrape and convert articles to Markdown and JSON
                formats.
              </li>
              <li>
                <strong>Polling Data Command:</strong> Developed a Discord bot
                using Python, Matplotlib, and a web REST API to visualise
                polling data.
              </li>
              <li>
                <strong>SPARQL Query Tool:</strong> Implemented asynchronous
                SPARQL to query RDF databases.
              </li>
              <li>
                <strong>Building a Web Scraper:</strong> Designed a scraper for
                TransMedia Watch (TMW) and TACC to track media stories on trans
                issues using JavaScript, Python, and SQL for large-scale data
                handling.
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Skills */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Row>
              <Col md={6}>
                <h5>Technical Skills</h5>
                <ul>
                  <li>Python, Java, HTML, CSS, JavaScript, React.js</li>
                  <li>Node.js, Git, IBM Watson Cloud</li>
                  <li>Matplotlib, SPARQL</li>
                </ul>
              </Col>
              <Col md={6}>
                <h5>Soft Skills</h5>
                <ul>
                  <li>Time Management</li>
                  <li>Problem Solving</li>
                  <li>Resilience and Teamwork</li>
                  <li>Communication</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Hobbies */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Hobbies</Card.Title>
            <Card.Text>
              Passionate about computers and electronics, including programming
              and exploring electronic devices. Enjoy playing video games,
              off-road cycling, and staying updated on UK and international
              politics.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </BodyPage>
  );
}

export default CVPage;
