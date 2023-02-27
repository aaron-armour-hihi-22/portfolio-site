import React from 'react'
import { Typography } from '@mui/material'
import ProjectCard from './ProjectCard'
import projects from '../projectData'

function Home() {
  const projectIds = Object.keys(projects)

  return (
    <>
      <Typography variant="h4" id="about" className="anchor">
        About me
      </Typography>
      <img
        src="/assets/Cute-Puppy.jpg"
        alt="a cute puppy"
        style={{ height: '200px' }}
      />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        distinctio eligendi quaerat, eveniet qui tempore, tempora reprehenderit
        blanditiis fuga, officia doloribus nostrum laudantium ad animi
        accusantium assumenda commodi. Temporibus, necessitatibus.
      </Typography>
      <Typography variant="h4" id="skills" className="anchor">
        Skills
      </Typography>
      <Typography>Skills to go here.</Typography>
      <Typography variant="h4" id="projects" className="anchor">
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
      <Typography variant="h4" id="contact" className="anchor">
        Contact
      </Typography>
      <Typography>A contact form most probably...</Typography>
    </>
  )
}

export default Home
