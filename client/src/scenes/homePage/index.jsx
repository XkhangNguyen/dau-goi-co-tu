import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import '@fontsource-variable/manrope';
import '@fontsource-variable/arima';
import heroBackground from './../../assets/images/hero.jpg'
import botGoiDauImg from './../../assets/images/bot_goi_dau.jpg'
import useCheckMobileScreen from '../../components/checkMobileScreen';
import ingredientsImg from './../../assets/images/ingredients.jpg'

const HomePage = () => {
  const isMobile = useCheckMobileScreen();

  const renderTilte = (text, alignText) => (
          <Typography
            variant="h1"
            sx={{
              textAlign: alignText,
              paddingTop: isMobile ? '4vh' : '5vh',
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
              paddingTop: '2.5vh',
              paddingBottom:'2vh'
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
              height: isMobile ? '40vh' : '720px',
              width: 'inherit',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          >
            
          </Box>

          {renderTilte("SẢN PHẨM TIÊU BIỂU", isMobile ? 'center' : 'left')}
          {renderTitleDescription("Những sản phẩm được làm tại nhà sử dụng những nguồn cung cấp xanh, sạch và bền vững. Cô Tư cam kết mang đến cho bạn trải nghiệm chăm sóc bản thân hiệu quả và thân thiện với môi trường. ", isMobile ? 'center' : 'left')}

        <Grid container spacing={5} justifyContent="center" sx={{paddingTop:"2vh", paddingBottom:'8vh'}}>
        {itemList.map((item, index) => (
          <Grid item key={index}>
            <Box component="a" href="/" sx={{ textAlign: isMobile ? 'center' : 'left', textDecoration:'none', color: 'inherit' }}>
              <img src={item.imageSrc} alt={`Image ${index + 1}`} style={{ width: isMobile ? '30vh' : '280px', height: isMobile ? '40vh' : '400px' }} />
              <Typography variant="h5" sx={{paddingTop: '1vh' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: '0.5vh' }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
          ))}
        </Grid>

        <Box 
          display="flex" 
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems={'center'}
          sx={{
            paddingTop: '1vh', 
            paddingBottom: isMobile ? 0 : '50px'
          }}
        >
          <Box flex="1" paddingRight={isMobile ? 0 : "4vh"} marginTop={isMobile ? '-8vh' : '-10vh'}>
            {renderTilte("NGUYÊN LIỆU QUEN THUỘC CỦA NGƯỜI VIỆT",  isMobile ? 'center' : 'left')}
            {renderTitleDescription("Sử dụng các loại thảo mộc đặc trưng của Việt Nam, những sản phẩm của cô Tư luôn đem lại cảm giác thân thuộc nhưng lại rất mới mẻ.", isMobile ? 'center' : 'left')}
          </Box>
          
          <Box flex="1">
            <Box
                sx={{
                  backgroundImage: `url(${ingredientsImg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  height: isMobile ? '60vh' : '500px',
                  width: isMobile ? '50vh' : 'inherit',
                  margin: '0 auto',
                  maxWidth: '100%',
                  marginTop:isMobile ? '2vh' : 0,
                }}
            >
                
            </Box>
          </Box>
        </Box>

        </Container>

    </div>
  );
};

export default HomePage;
