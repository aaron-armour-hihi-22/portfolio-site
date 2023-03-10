import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'
import MenuButton from './MenuButton'
import Home from './Home'
import Project from './Project'

let theme = createTheme({
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

theme = responsiveFontSizes(theme)

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header className="header"></header>
        <section className="main">
          <MenuButton />
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
