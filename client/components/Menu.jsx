import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

function Menu({ setDrawerIsOpen }) {
  const menuItems = [
    ['Home', '20px', '/'],
    ['Skills', '20px'],
    ['Projects', '20px'],
    ['First Project', '40px', 'project/1'],
    ['Second Project', '40px', 'project/2'],
    ['Another Project', '40px', 'project/123'],
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
