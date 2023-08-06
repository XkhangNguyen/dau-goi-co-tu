import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const navLinks = [
    { text: 'SẢN PHẨM', href: '#products' },
    { text: 'GIỚI THIỆU', href: '#about' },
    // Add more navigation links here
  ];

  return (
    <>
      <AppBar position='fixed' color='transparent' sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            CÔ TƯ
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={openDrawer} onClose={toggleDrawer} sx={{ '& .MuiDrawer-paper': { width: '80%' } }}>
        <List>
          {navLinks.map((link, index) => (
            <ListItem button key={index} component='a' href={link.href} onClick={toggleDrawer} sx={{ textDecoration: 'none' }}>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
