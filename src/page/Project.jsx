import React, { useState } from "react";
import BodyPage from "../partials/BodyPage";

const ProjectPage = () => {
  const projects = [
    {
      title: "Pirate Party UK Website",
      description:
        "Developed and maintain the official website for the Pirate Party UK, focusing on user engagement, policy transparency, and community building.",
      link: "https://ukpirate.party",
      tags: ["Web Development", "Community Engagement"],
    },
    {
      title: "TACC (Trans Advocacy and Complaint Collective)",
      description:
        "Created a platform for advocating trans rights, handling complaints, and empowering activism through technology.",
      link: "https://www.tacc.org.uk",
      github:
        "https://github.com/TransAdvocacyAndComplaintCollective/TransAdvocacyAndComplaintCollective.github.io",
      tags: ["Activism", "Open Source"],
    },
    {
      title: "Speech Reaction Tool for Linux",
      description:
        "Developed a Python-based tool to analyze and react to speech inputs on Linux. This tool integrates with speech recognition libraries and provides automated reactions or responses.",
      github: "https://github.com/yourusername/speech-reaction-tool",
      tags: ["Python", "Speech Recognition", "Linux"],
    },
    {
      title: "Web Spider for Keyword Analysis",
      description:
        "Designed a robust web spider to identify and analyze trans-related keywords in media content. The tool incorporates advanced AI models for classification and sentiment analysis.",
      github: "https://github.com/LucyMaber/web_scrape",
      tags: ["Web Scraping", "AI", "Analysis"],
    },
  ];

  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const uniqueTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  return (
    <BodyPage
      title="Projects - Lucy Maber"
      description="Showcasing my work, skills, and passion for technology."
    >
      <div className="container mt-5">
        <section className="mb-5">
          <h2>Projects</h2>
          <div className="mb-4">
            <div className="btn-group">
              {uniqueTags.map((tag, index) => (
                <button
                  key={index}
                  className={`btn btn-outline-primary ${
                    selectedTag === tag ? "active" : ""
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img
                    src={`/images/${project.title.replace(/\s+/g, "-")}.jpg`}
                    className="card-img-top"
                    alt={`${project.title}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mt-3">
                      {project.link && (
                        <a
                          href={project.link}
                          className="btn btn-primary me-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="btn btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </BodyPage>
  );
};

export default ProjectPage;
