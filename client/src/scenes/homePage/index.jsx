import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import '@fontsource-variable/manrope';
import '@fontsource-variable/arima';
import heroBackground from './../../assets/images/hero.jpg'
import botGoiDauImg from './../../assets/images/bot_goi_dau.jpg'

const HomePage = () => {
  const renderTilte = (text, alignText) => (
          <Typography
            variant="h1"
            sx={{
              fontSize: '50px',
              fontFamily: 'Arima Variable',
              fontWeight: 700,
              color: 'Black',
              textAlign: alignText,
              paddingTop: '50px',
            }}
          >
            {text}
          </Typography>
  );

  const renderTitleDescription = (text, alignText) => (
    <Typography
            variant="h6"
            sx={{
              fontFamily: 'Manrope Variable',
              fontWeight: 550,
              color: 'Black',
              textAlign: alignText,
              paddingTop: '16px',
              paddingBottom:'10px'
            }}
          >
            {text}
          </Typography>
  );

  const itemList = [
    {
      imageSrc: botGoiDauImg, // Replace with the image source URL
      title: 'DẦU GỘI BỒ KẾT THẢO MỘC',
      description: 'Description for Image 2',
    },
    {
      imageSrc: botGoiDauImg, // Replace with the image source URL
      title: 'SỮA TẮM GỪNG NGHỆ',
      description: 'Description for Image 3',
    },
    {
      imageSrc: botGoiDauImg, // Replace with the image source URL
      title: 'BỘT GỘI ĐẦU 15 VỊ',
      description: 'Description for Image 1',
    },
  ];

  return (
    <div>
      <Container 
        maxWidth='false'
        sx={{
          //backgroundColor:'#FFEBCD',
          height: '100vh',
          width: '1080px',
          margin: '0 auto',
          maxWidth: '100%',
        }}
      >
          {renderTilte("CÔNG THỨC HOÀN TOÀN TỪ THIÊN NHIÊN", 'center')}
          {renderTitleDescription("Chăm sóc tóc và cơ thể của bạn với những thành phần tự nhiên và hương thơm tuyệt vời.", 'center')}
          
          <Box
            sx={{
              backgroundImage: `url(${heroBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              height: '720px',
              width: 'inherit',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          >
            
          </Box>

          {renderTilte("Ghi gi do", 'left')}
          {renderTitleDescription("Ghi gif ddos", 'left')}

        <Grid container spacing={5} justifyContent="center" sx={{paddingTop:"10px"}}>
        {itemList.map((item, index) => (
          <Grid item key={index}>
            <Box component="a" href="/" sx={{ textAlign: 'left', textDecoration:'none', color: 'inherit' }}>
              <img src={item.imageSrc} alt={`Image ${index + 1}`} style={{ width: '300px', height: '400px' }} />
              <Typography variant="h6" sx={{ fontFamily: 'Manrope Variable', fontWeight: 600, paddingTop: '8px' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Manrope Variable', paddingTop: '4px' }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
          ))}
        </Grid>
        </Container>

    </div>
  );
};

export default HomePage;
