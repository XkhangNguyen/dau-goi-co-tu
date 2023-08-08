import React, { useState } from 'react';
import { Grid, Container, Typography, Box, Button, Snackbar, Alert } from '@mui/material';
import zaloLogo from './../../assets/images/logo_Zalo.png';
import facebookLogo from './../../assets/images/logo_Facebook.png';
import useCheckMobileScreen from '../../components/checkMobileScreen';

const ContactPage = () => {
  const isMobile = useCheckMobileScreen();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

    const itemList = [
        {
          imageSrc: zaloLogo,
          title: 'ZALO',
          description: 'Số điện thoại: 0916265599',
          type: 'zalo',
          copyText: '0916265599',
        },
        {
          imageSrc: facebookLogo,
          title: 'FACEBOOK',
          description: 'Nhắn tin với cô Tư qua Facebook',
          type: 'facebook',
          link: 'https://www.facebook.com/phuong.lethihong.7',
        },
    ];


    const handleCopyText = (item) => {
      switch (item.type) {
        case 'zalo':
          // Handle the text copying logic for items of type 'text'
          const textarea = document.createElement('textarea');
          textarea.value = item.copyText;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          setAlertMessage('Đã copy số điện thoại .');
          setAlertOpen(true);
          break;
        case 'facebook':
          window.open(item.link, '_blank');
          break;
        default:
          // Handle the default case if needed
          break;
      }
    };

    const handleCloseAlert = () => {
      setAlertOpen(false);
    };

    const renderButtonText = (type) => {
      let text = '';

      switch(type){
        case 'zalo':
          text = 'Copy Số Điện Thoại';
          break;
        case 'facebook':
          text = 'Mở Facebook';
          break;
        default:
          break; 
      }

      return text
    };

  return (
    <Container 
        maxWidth='false'
        sx={{
          minHeight: '65vh',
          height:'auto',
          width: '1080px',
          margin: '0 auto',
          maxWidth: '100%',
          textAlign: 'center',
          paddingTop: '4vh',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Arima Variable',
            fontWeight: 700,
            marginBottom: '1vh',
          }}
        >
          LIÊN HỆ VỚI CÔ TƯ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Manrope Variable',
            marginBottom: '5vh',
          }}
        >
          Hãy chọn phương thức phù hợp. Tận hưởng những sản phẩm được cô Tư tạo ra dành cho những người yêu thiên nhiên như bạn.
        </Typography>

        <Grid 
          container spacing={isMobile ? 8 : 15} 
          justifyContent="center" 
          sx={{paddingTop:"2vh"}}
        >
        {itemList.map((item, index) => (
          <Grid item key={index}>
            <Box 
              sx={{ 
                textAlign: 'center',
                maxWidth: '200px',
              }}>
              <img 
                src={item.imageSrc} 
                alt={`Logo ${index + 1}`} 
                style={{ width: '200px', height: '200px' }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: 'Manrope Variable', 
                  fontWeight: 'bold',
                  paddingTop: '1vh' 
                }}>
                {item.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize:'14px',
                  fontFamily: 'Manrope Variable', 
                  paddingTop: '0.5vh', 
                  whiteSpace: 'normal', 
                }}>
                {item.description}
              </Typography>
              
              <Button 
                variant="contained" 
                onClick={() =>  handleCopyText(item)} 
                sx={{
                  backgroundColor:'black', 
                  fontFamily: 'Manrope Variable', 
                  fontWeight: 'bold',
                  marginTop: '1vh', 
                  borderRadius:'0%', 
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}>  
                {renderButtonText(item.type)}
              </Button>
            </Box>
          </Grid>
          ))}
        </Grid>

        <Snackbar 
          open={alertOpen} 
          autoHideDuration={2000} 
          onClose={handleCloseAlert} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '220px' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </Container>
  );
};

export default ContactPage;
