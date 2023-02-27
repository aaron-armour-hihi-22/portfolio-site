import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import Banner from './Banner'
import Home from './Home'
import Project from './Project'

const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    background: {
      paper: '#0E636E',
    },
  },
  typography: {
    allVariants: {
      color: 'whitesmoke',
    },
    fontFamily: 'Gruppo, Verdana',
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  )
}

export default App
