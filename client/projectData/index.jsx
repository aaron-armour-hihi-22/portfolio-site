import React from 'react'
import { Typography } from '@mui/material'

const projects = {
  1: {
    name: 'First project',
    image: '/assets/Cute-Puppy.jpg',
    altText: 'a cute puppy',
    summary:
      'This was a great first project. But you really need to know more about it, \
      so let me tell you. This project flowed so smoothly, it was as if I had been \
      a developer for years...',
    deployed: 'https://aarons-sudoku.netlify.app/',
    github: 'https://github.com/aaron-armour-hihi-22/sudoku',
    content: (
      <>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta,
          aspernatur nesciunt fugit fuga consequatur eos repellat nostrum
          mollitia unde explicabo pariatur vitae quis, laborum sint doloremque
          eveniet officiis saepe.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel dicta
          eligendi sint officiis. Modi soluta, obcaecati minus eos ratione
          libero eveniet quibusdam alias suscipit hic nisi asperiores id. Iusto.
        </Typography>
      </>
    ),
  },
  2: {
    name: 'Second project',
    image: '/assets/Cute-Puppy.jpg',
    altText: 'a cute puppy',
    summary: 'This was a great second project',
    deployed: 'https://aarons-sudoku.netlify.app/',
    content: (
      <>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta,
          aspernatur nesciunt fugit fuga consequatur eos repellat nostrum
          mollitia unde explicabo pariatur vitae quis, laborum sint doloremque
          eveniet officiis saepe.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel dicta
          eligendi sint officiis. Modi soluta, obcaecati minus eos ratione
          libero eveniet quibusdam alias suscipit hic nisi asperiores id. Iusto.
        </Typography>
      </>
    ),
  },
  123: {
    name: 'Another project',
    image: '/assets/Cute-Puppy.jpg',
    altText: 'a cute puppy',
    summary: 'This was a great additional project',
    github: 'https://github.com/aaron-armour-hihi-22/sudoku',
    content: (
      <>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta,
          aspernatur nesciunt fugit fuga consequatur eos repellat nostrum
          mollitia unde explicabo pariatur vitae quis, laborum sint doloremque
          eveniet officiis saepe.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel dicta
          eligendi sint officiis. Modi soluta, obcaecati minus eos ratione
          libero eveniet quibusdam alias suscipit hic nisi asperiores id. Iusto.
        </Typography>
      </>
    ),
  },
}

export default projects
