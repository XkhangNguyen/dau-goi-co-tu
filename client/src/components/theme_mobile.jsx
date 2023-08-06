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

    body1:{
      fontFamily: 'Manrope Variable',
    }
  },
});

export default theme;