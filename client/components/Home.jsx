import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>This is the Home component</h2>
      <img
        src="/assets/Cute-Puppy.jpg"
        alt="a cute puppy"
        style={{ height: '200px' }}
      />
      <ul>
        <li>
          <Link to="project/1">Project 1</Link>
        </li>
        <li>
          <Link to="project/2">Project 2</Link>
        </li>
        <li>
          <Link to="project/123">Project 123</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
