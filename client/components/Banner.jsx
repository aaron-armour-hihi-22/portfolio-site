import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from './Menu'

function Banner() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  function openDrawer() {
    setDrawerIsOpen(true)
  }

  return (
    <div className="banner">
      <h2>Aaron Armour Dev Portfolio</h2>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={openDrawer}
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
      >
        <Menu setDrawerIsOpen={setDrawerIsOpen} />
      </Drawer>
    </div>
  )
}

export default Banner
