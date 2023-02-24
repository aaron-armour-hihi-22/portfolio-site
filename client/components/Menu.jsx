import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

function Menu({ setDrawerIsOpen }) {
  const menuItems = [
    ['Home', '20px', '/#'],
    ['About Me', '20px', '/#about'],
    ['Skills', '20px', '/#skills'],
    ['Projects', '20px', '/#projects'],
    ['First Project', '40px', 'project/1'],
    ['Second Project', '40px', 'project/2'],
    ['Another Project', '40px', 'project/123'],
    ['Contact', '20px', '/#contact'],
  ]

  return (
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
  )
}

export default Menu
