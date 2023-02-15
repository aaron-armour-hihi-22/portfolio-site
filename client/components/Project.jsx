import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Project() {
  const { id } = useParams()

  return (
    <>
      <h2>This is project {id}</h2>
      <Link to="/">Home</Link>
    </>
  )
}

export default Project
