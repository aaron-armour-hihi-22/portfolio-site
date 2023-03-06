import React from 'react'
import { Typography } from '@mui/material'
import ProjectCard from './ProjectCard'
import projects from '../projectData'
import ContactForm from './ContactForm'

function Home() {
  const projectIds = Object.keys(projects)

  return (
    <>
      <Typography variant="h2" className="title">
        Aaron Armour - Dev Portfolio
      </Typography>
      <Typography variant="h5" className="tagline">
        Full Stack Developer
      </Typography>
      <Typography variant="h3" id="about" className="anchor">
        About me
      </Typography>
      <img
        src="/assets/me.jpg"
        alt="Aaron"
        style={{ height: '150px', borderRadius: '50%' }}
      />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        distinctio eligendi quaerat, eveniet qui tempore, tempora reprehenderit
        blanditiis fuga, officia doloribus nostrum laudantium ad animi
        accusantium assumenda commodi. Temporibus, necessitatibus.
      </Typography>
      <a
        href="https://www.linkedin.com/in/aaron-armour-b7201b25a/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/assets/LI-In-Bug.png"
          alt="LinkedIn logo"
          className="linked-in-logo contact-logos"
        />
      </a>
      <a
        href="https://github.com/aaron-armour-hihi-22"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/assets/github-mark-white.png"
          alt="github invertocat logo"
          className="github-logo contact-logos"
        />
      </a>
      <Typography variant="h3" id="skills" className="anchor">
        Skills
      </Typography>
      <Typography>Skills to go here.</Typography>
      <Typography variant="h3" id="projects" className="anchor">
        Projects
      </Typography>
      <div className="project-cards">
        {projectIds.map((projectId) => (
          <ProjectCard
            projectId={projectId}
            projectData={projects[projectId]}
            key={projectId}
          />
        ))}
      </div>
      <Typography variant="h3" id="contact" className="anchor">
        Contact
      </Typography>
      <ContactForm />
    </>
  )
}

export default Home
