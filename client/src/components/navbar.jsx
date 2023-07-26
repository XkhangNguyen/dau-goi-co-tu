import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/manrope';

const pages = ['Our Products', 'About Us', 'Contact Us'];

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderCustomMenuItem = (element) => {
    return (
      <Typography variant="h6" sx={{fontFamily:'Open Sans Regular 400', display: 'inline-block', margin: '0 16px' }}>
        {element}
      </Typography>
    );
  };
  
  const renderTextAlignWithIcon = (text) => (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <span>{text}</span>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                borderRadius: '15%',
                backgroundColor: 'transparent',
                transition: 'background-color 0.3s',
                '&:hover': {
                    backgroundColor: '#FAF0E6',
                },
            }}
        >
            <ArrowDropDownIcon/>
        </div>
    </div>
  );

  return (
    <AppBar position='static' color='transparent'>
        <Container maxWidth="false" disableGutters>
            <Toolbar disableGutters justifyContent='space-between'>
                <Box flexGrow={1} display={'flex'} justifyContent={'flex-start'} flexBasis={0}>
                    {renderCustomMenuItem(renderTextAlignWithIcon('Giới Thiệu'))}
                    {renderCustomMenuItem(renderTextAlignWithIcon('Sản Phẩm'))}
                    {renderCustomMenuItem('Liên Lạc')}
                </Box>

                <Box flexGrow={1} flexBasis={0} display={'flex'} justifyContent="center">
                    <Typography
                            justifyContent='center'
                            variant="h4"
                            component="a"
                            href="/"
                            sx={{
                                fontFamily: 'Manrope Variable',
                                display: 'flex',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                        }}>
                            Cô Tư
                    </Typography>
                </Box>

                <Box flexGrow={1} display={'flex'} justifyContent={'flex-end'} flexBasis={0}>
                    {renderCustomMenuItem('Mua Ngay')}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default NavigationBar;
