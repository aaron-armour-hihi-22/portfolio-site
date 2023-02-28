import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import { CardContent, Typography } from '@mui/material'
import Launch from '@mui/icons-material/Launch'

function ProjectCard({ projectId, projectData }) {
  return (
    <Card sx={{ width: '320px', padding: '5px', marginBottom: '10px' }}>
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
      <div className="link-logos">
        {projectData.deployed && (
          <a href={projectData.deployed} target="_blank" rel="noreferrer">
            <Launch fontSize="large" sx={{ color: 'white' }} />
          </a>
        )}
        {projectData.github && (
          <a href={projectData.github} target="_blank" rel="noreferrer">
            <img
              src="/assets/github-mark-white.png"
              alt="github invertocat logo"
              className="github-logo"
            />
          </a>
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
