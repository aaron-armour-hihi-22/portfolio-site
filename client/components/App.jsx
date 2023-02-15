import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './Banner'
import Home from './Home'
import Project from './Project'

function App() {
  return (
    <>
      <header className="header">
        <Banner />
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </section>
    </>
  )
}

export default App
