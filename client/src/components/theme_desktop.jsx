import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '50px',
      fontFamily: 'Arima Variable',
      fontWeight: 700,
      color: 'black',
    },

    h6: {
      fontFamily: 'Manrope Variable',
      fontWeight: 550,
      color: '#434343',
    },

    h5: {
      fontFamily: 'Manrope Variable',
      fontWeight: 550,
      fontSize:'20px',
      color: 'Black',
    },

    body1:{
      fontFamily: 'Manrope Variable',
      color: '#6c6e6b',
    }
  },
});

export default theme;