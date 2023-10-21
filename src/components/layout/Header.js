// rafce -> React arrow function with export

import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import React, { useState } from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrowerToggle = () => {  
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrowerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant='h6'
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}>
        <RestaurantMenuIcon />
        My resturant
      </Typography>
      <Divider/>
        <ul className='mobile-navigation'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }} >
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrowerToggle}>

              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant='h6'
              component={"div"}
              sx={{ flexGrow: 1 }}>
              <RestaurantMenuIcon />
              My resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <box component="nav">
        <Drawer variant="temporary" open={mobileOpen} close={handleDrowerToggle} sx={{
          display: {xs:"block", sx:"none"},
          "& .MuiDrawer-paper":{
            boxSizing: "border-box",
            width: "240px"
          }
          }}
        >
          {drawer}
        </Drawer>
        </box>
        <Box>
      <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Header
