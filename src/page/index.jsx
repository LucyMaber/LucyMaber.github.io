import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import BodyPage from "../partials/BodyPage";
import { Discord, Linkedin, Github, Globe } from "react-bootstrap-icons";

function App() {
  return (
    <BodyPage title="Home" description="Welcome to the Lucy Maber">
      <Container className="pb-5 mb-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Lucy Maber</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Lead developer and activist with a passion for digital rights and
            social advocacy. Currently managing the websites for TAGG and Pirate
            Party UK.
          </p>
        </div>

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

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
              Proficient in: JavaScript, React, Python, and web scraping tools.
              Strong background in machine learning models for NLP and text
              classification. Passionate about human rights, particularly in
              online and privacy domains.
            </Card.Text>
          </Card.Body>
        </Card>

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
                  scraping for trans-related news. Ensuring data integrity and
                  accessibility for research purposes, this project supports
                  advocacy and community outreach efforts.
                </li>
                <li>
                  <strong>Wikidata Custom Tokenizer:</strong> Developing a
                  custom tokenizer for language models using advanced entity
                  linking with Wikidata. This initiative includes classification
                  tasks and fine-tuning large language autoregressive models
                  (LLARMs) to improve natural language processing and
                  information extraction capabilities.
                </li>
                <li>
                  <strong>Wikidata and Shmaigay Eye:</strong> Creating a tool to
                  identify transphobic individuals and organizations on social
                  media platforms. This information is utilized in the
                  TransMedia Watch Media Project and helps TACC combat
                  transphobia while fostering community outreach and support.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Organizations</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  <strong>Pirate Party UK:</strong> Leading policy discussions
                  on intellectual property, digital rights, and environmental
                  justice.
                </li>
                <li>
                  <strong>TACC and TMW Scraping:</strong> Web scraping for the
                  Trans Advocacy and Complaint Collective and TransMedia Watch
                  to track media representation and complaints related to trans
                  issues.
                </li>
                <li>
                  <strong>Website TACC:</strong> Overseeing the development and
                  content management of the Trans Advocacy and Complaint
                  Collective (TACC) website. This includes updating resources,
                  ensuring accessibility, and supporting advocacy by providing
                  timely information and tools for community engagement.
                </li>
                <li>
                  <strong>Website Collaboration of Independent Pirates:</strong>
                  Managing and developing the web presence for the Collaboration
                  of Independent Pirates (CIP), focusing on digital rights,
                  intellectual property reform, and policy advocacy.
                  Responsibilities include maintaining website updates, ensuring
                  user accessibility, and supporting international
                  collaborations and discussions around pressing issues in
                  digital freedom and human rights.
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Connect with Me</Card.Title>
            <Card.Text>
              <Button
                variant="primary"
                href="https://discord.gg/yourlink"
                target="_blank"
                aria-label="Connect on Discord"
              >
                <Discord /> Discord
              </Button>{" "}
              <Button
                variant="dark"
                href="https://github.com/LucyMaber"
                target="_blank"
                aria-label="View GitHub profile"
              >
                <Github /> GitHub
              </Button>{" "}
              <Button
                variant="info"
                href="ukpiraty.party"
                target="_blank"
                aria-label="Visit Pirate Party UK website"
              >
                <Globe /> Pirate Party UK
              </Button>{" "}
              <Button
                variant="info"
                href="https://www.tagcollective.org"
                target="_blank"
                aria-label="Visit TAGG website"
              >
                <Globe /> TAGG
              </Button>
              <Button
                variant="info"
                href="https://www.tagcollective.org"
                target="_blank"
                aria-label="Visit Collaboration of Independent Pirates website"
              >
                <Globe /> Collaboration of Independent Pirates
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </BodyPage>
  );
}

export default App;
