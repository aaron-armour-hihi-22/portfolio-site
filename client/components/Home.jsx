import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projectData'

function Home() {
  const projectIds = Object.keys(projects)

  return (
    <>
      <h2>This is the Home component</h2>
      <img
        src="/assets/Cute-Puppy.jpg"
        alt="a cute puppy"
        style={{ height: '200px' }}
      />
      <h2>Projects</h2>
      {projectIds.map((projectId) => (
        <ProjectCard
          projectId={projectId}
          projectData={projects[projectId]}
          key={projectId}
        />
      ))}
    </>
  )
}

export default Home
