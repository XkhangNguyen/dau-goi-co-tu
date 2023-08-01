import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import ContactBackground from './../../assets/images/bot_goi_dau.jpg'; // Replace with your contact page background image

const ContactPage = () => {
  return (
    <Container 
        maxWidth='false'
        sx={{
          //backgroundColor:'#FFEBCD',
          height: '100vh',
          width: '1080px',
          margin: '0 auto',
          maxWidth: '100%',
          textAlign: 'center',
          paddingTop: '24px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Arima Variable',
            fontWeight: 700,
            marginBottom: '10px',
          }}
        >
          LIÊN HỆ VỚI CÔ TƯ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Manrope Variable',
            marginBottom: '40px',
          }}
        >
          Hãy chọn cách phù hợp với bạn. Tận hưởng những sản phẩm được tạo ra dành cho những người yêu thiên nhiên như bạn từ cô Tư.
        </Typography>
      </Container>
  );
};

export default ContactPage;
