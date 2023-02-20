import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

function Banner() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const menuItems = [
    ['Home', '20px', '/'],
    ['Skills', '20px'],
    ['Projects', '20px'],
    ['First Project', '40px', 'project/1'],
    ['Second Project', '40px', 'project/2'],
    ['Another Project', '40px', 'project/123'],
  ]

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
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuItems.map(([text, marginLeft, loc]) => {
              if (loc !== undefined) {
                return (
                  <React.Fragment key={text}>
                    <ListItem>
                      <Link
                        to={loc}
                        onClick={() => setDrawerIsOpen(false)}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <ListItemText sx={{ marginLeft }}>{text}</ListItemText>
                      </Link>
                    </ListItem>
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment key={text}>
                    <ListItem>
                      <ListItemText sx={{ marginLeft }}>{text}</ListItemText>
                    </ListItem>
                  </React.Fragment>
                )
              }
            })}
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default Banner
