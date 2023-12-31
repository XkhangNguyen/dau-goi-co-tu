import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '30px',
      fontFamily: 'Arima Variable',
      fontWeight: 700,
      color: 'black',
    },

    h6: {
      fontSize:'18px',
      fontFamily: 'Manrope Variable',
      fontWeight: 550,
      color: 'Black',
    },

    h5: {
      fontFamily: 'Manrope Variable',
      fontWeight: 900,
      fontSize:'15px',
      color: 'Black',
    },

    body1:{
      fontWeight: 700,
      fontFamily: 'Manrope Variable',
      color: '#6c6e6b',
    }
  },
});

export default theme;