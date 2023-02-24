import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projectData'

function Home() {
  const projectIds = Object.keys(projects)

  return (
    <>
      <h2 id="about" className="anchor">
        About me
      </h2>
      <img
        src="/assets/Cute-Puppy.jpg"
        alt="a cute puppy"
        style={{ height: '200px' }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        distinctio eligendi quaerat, eveniet qui tempore, tempora reprehenderit
        blanditiis fuga, officia doloribus nostrum laudantium ad animi
        accusantium assumenda commodi. Temporibus, necessitatibus.
      </p>
      <h2 id="skills" className="anchor">
        Skills
      </h2>
      <p>Skills to go here.</p>
      <h2 id="projects" className="anchor">
        Projects
      </h2>
      <div className="project-cards">
        {projectIds.map((projectId) => (
          <ProjectCard
            projectId={projectId}
            projectData={projects[projectId]}
            key={projectId}
          />
        ))}
      </div>
      <h2 id="contact" className="anchor">
        Contact
      </h2>
      <p>A contact form most probably...</p>
    </>
  )
}

export default Home
