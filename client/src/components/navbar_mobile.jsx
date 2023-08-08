import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, Collapse, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logoImg from './../assets/images/logo_CoTu.png';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import '@fontsource-variable/manrope';

const navTabs = [
  {
    text: 'SẢN PHẨM',
    dropdownItems: [
      { text: 'Dầu gội', href: '/subitem1' },
      { text: 'Sữa tắm', href: '/subitem2' },
      { text: 'Bột gội đầu', href: '/subitem3' },
    ],
  },
  {
    text: 'GIỚI THIỆU',
    dropdownItems: [
      { text: 'Câu chuyện của cô Tư', href: '/subitem3' },
      { text: 'Lịch sử phát triển', href: '/subitem4' },
      { text: 'Thành tích', href: '/subitem4' },
      { text: 'Blog', href: '/subitem4' },
    ],
  },
];

const navLinks = [
  {
    text : 'Liên hệ',
    href: '/contact',
  },
]

const MobileNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <>
    <AppBar 
      position='sticky' 
      color='transparent' 
      sx={{ 
        zIndex: "100", 
        backgroundColor: "white", 
        boxShadow: scrolled ?'0px 4px 8px rgba(0, 0, 0, 0.1)': 'none',
      }} >
        <Toolbar>
          <Box flexGrow={1} flexBasis={0} display={'flex'}>
            <IconButton edge='start' color='inherit' aria-label='menu' onClick={toggleDrawer} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                flex: '0.9',
                width: 'auto',
                display: 'flex',
                alignSelf: 'center', 
              }}>                
              <Box
              component="a"
              href="/"
              sx={{
                backgroundImage: `url(${logoImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                height: '60px',
                width: '60px',
                margin: '0 auto',
                maxWidth: '100%',
              }}>
                                  
              </Box>
            </Typography>
          </Box>
        </Toolbar>
    </AppBar>

    <Drawer anchor='left' open={openDrawer} onClose={toggleDrawer} sx={{ '& .MuiDrawer-paper': { width: '80%' } }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        sx={{
          flex: '1',
          width: 'auto',
          display: 'flex',
          alignSelf: 'center', 
        }}
      >
        <Box
          component="a"
          href="/"
          sx={{
            backgroundImage: `url(${logoImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '60px',
            width: '60px',
            margin: '0 auto',
            maxWidth: '100%',
          }}
        >
        </Box>
      </Typography>
      
      <CloseRoundedIcon
        onClick={toggleDrawer} 
        sx={{ 
          fontSize: '30px', 
          paddingRight :'15px',
        }} />
    </Box>

      <List>
        {navTabs.map((tab, index) => (
          <React.Fragment key={index}>
              <ListItem 
                button onClick={() => handleDropdownToggle(index)}
                sx={{
                  paddingLeft: '40px',
                }}
              >
                <ListItemText 
                  primary={tab.text} 
                  primaryTypographyProps={{
                    fontFamily:'Manrope Variable', 
                    fontSize: '18px',
                    fontWeight:'bold',
                  }} 
                />
                {openDropdown === index ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            
            <Collapse in={openDropdown === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {tab.dropdownItems.map((item, subIndex) => (
                  <ListItem button key={subIndex} component='a' href={item.href} onClick={toggleDrawer} sx={{ textDecoration: 'none', pl: 4 }}>
                    <ListItemText 
                      primary={item.text} 
                      primaryTypographyProps={{
                        paddingLeft: '10px',
                        fontFamily:'Manrope Variable', 
                        fontSize: '17px',
                        fontWeight:'500',
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}

        {navLinks.map((link, index) => (
          <React.Fragment key={index}>
            <Box paddingTop={'16px'}>
              <ListItem 
                component='a' 
                href = {link.href} 
                sx={{ 
                  paddingLeft: '40px',
                  color:'inherit', 
                  textDecoration: 'none', 
                  fontFamily:'Manrope Variable',  
                  fontSize:'15px',  
                }}>
                {link.text}
              </ListItem>
            </Box>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
    </>
  );
};

export default MobileNavbar;
