import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from './Menu'

function MenuButton() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  function openDrawer() {
    setDrawerIsOpen(true)
  }

  return (
    <div className="menu-button">
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={openDrawer}
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

export default MenuButton
