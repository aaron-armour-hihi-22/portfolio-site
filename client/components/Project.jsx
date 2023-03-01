import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import projects from '../projectData'

function Project() {
  const { id } = useParams()
  const projData = projects[id]

  return (
    <>
      {projData === undefined ? (
        <Typography variant="h2">
          Error: {id} is not a known project id
        </Typography>
      ) : (
        <>
          <Typography variant="h2">{projData.name}</Typography>
          {projData.content}
        </>
      )}
      <Link to="/">
        <Typography>Home</Typography>
      </Link>
    </>
  )
}

export default Project
