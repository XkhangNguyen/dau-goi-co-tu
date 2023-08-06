import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import '@fontsource-variable/manrope';
import '@fontsource-variable/arima';
import heroBackground from './../../assets/images/hero.jpg'
import botGoiDauImg from './../../assets/images/bot_goi_dau.jpg'
import useCheckMobileScreen from '../../components/checkMobileScreen';

const HomePage = () => {
  const isMobile = useCheckMobileScreen();

  const renderTilte = (text, alignText) => (
          <Typography
            variant="h1"
            sx={{
              textAlign: alignText,
              paddingTop: isMobile ? '30px' : '50px',
            }}
          >
            {text}
          </Typography>
  );

  const renderTitleDescription = (text, alignText) => (
    <Typography
            variant="h6"
            sx={{
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
      imageSrc: botGoiDauImg,
      title: 'DẦU GỘI BỒ KẾT THẢO MỘC',
      description: 'Description for Image 2',
    },
    {
      imageSrc: botGoiDauImg,
      title: 'SỮA TẮM GỪNG NGHỆ',
      description: 'Description for Image 3',
    },
    {
      imageSrc: botGoiDauImg,
      title: 'BỘT GỘI ĐẦU 15 VỊ',
      description: 'Description for Image 1',
    },
  ];

  return (
    <div>
      <Container 
        maxWidth='false'
        sx={{
          height: 'auto',
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
              height: isMobile ? '250px' : '720px',
              width: 'inherit',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          >
            
          </Box>

          {renderTilte("SẢN PHẨM TIÊU BIỂU", 'left')}
          {renderTitleDescription("Những sản phẩm được làm tại nhà sử dụng những nguồn cung cấp xanh, sạch và bền vững.", 'left')}

        <Grid container spacing={5} justifyContent="center" sx={{paddingTop:"10px"}}>
        {itemList.map((item, index) => (
          <Grid item key={index}>
            <Box component="a" href="/" sx={{ textAlign: 'left', textDecoration:'none', color: 'inherit' }}>
              <img src={item.imageSrc} alt={`Image ${index + 1}`} style={{ width: isMobile ? '210px' : '280px', height: isMobile ? '300px' : '400px' }} />
              <Typography variant="h6" sx={{paddingTop: '8px' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: '4px' }}>
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
