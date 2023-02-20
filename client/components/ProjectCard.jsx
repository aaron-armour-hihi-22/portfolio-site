import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import { CardContent, Typography } from '@mui/material'

function ProjectCard({ projectId, projectData }) {
  return (
    <Card sx={{ width: '400px', padding: '5px' }}>
      <CardActionArea component={Link} to={'project/' + projectId}>
        <CardHeader title={projectData.name} />
        <CardMedia
          component="img"
          image={projectData.image}
          alt={projectData.altText}
        />
        <CardContent>
          <Typography variant="body1">{projectData.summary}</Typography>
        </CardContent>
      </CardActionArea>
      {projectData.deployed && (
        <Typography>
          <a href={projectData.deployed} target="_blank" rel="noreferrer">
            live deployed
          </a>
        </Typography>
      )}
      {projectData.github && (
        <Typography>
          <a href={projectData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Typography>
      )}
      {/* <a href="https://google.com" target={'_blank'} rel="noreferrer">
        Google
      </a> */}
    </Card>
  )
}

export default ProjectCard
