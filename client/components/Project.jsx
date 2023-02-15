import React from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../projectData'

function Project() {
  const { id } = useParams()
  const projData = projects[id]

  return (
    <>
      <h2>{projData.name}</h2>
      {projData.content}
      <Link to="/">Home</Link>
    </>
  )
}

export default Project
