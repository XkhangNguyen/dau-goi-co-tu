import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  fontFamily: 'Manrope Variable',
  color: 'gray',
  marginBottom: '1px',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -5,
    width: '100%',
    height: '0px', // Start with 0 height
    background: 'white', // Change the color here to your desired underline color
    transition: 'bottom 0.3s ease, height 0.3s ease, background 0.3s ease', // Add a transition for the height property
  },
  '&:hover::after': {
    height: '1px', // Increase the height to the desired value when hovered
    bottom: -1,
    background: 'gray',
  },
}));

export default StyledTypography;