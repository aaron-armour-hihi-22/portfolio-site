import React from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../projectData'

function Project() {
  const { id } = useParams()
  const projData = projects[id]

  return (
    <>
      {projData === undefined ? (
        <h2>Error: {id} is not a known project id</h2>
      ) : (
        <>
          <h2>{projData.name}</h2>
          {projData.content}
        </>
      )}
      <Link to="/">Home</Link>
    </>
  )
}

export default Project
