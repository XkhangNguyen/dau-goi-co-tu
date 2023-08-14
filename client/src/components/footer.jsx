import React from 'react';
import { Box, Container, Typography, ListItem } from '@mui/material';
import zaloLogo from './../assets/images/logo_Zalo.png';
import facebookLogo from './../assets/images/logo_Facebook.png';
import StyledTypography from './styledTypography';
import useCheckMobileScreen from './checkMobileScreen';


const Footer = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        py:'5vh',
        marginTop:'5vh',
        width: '100%',
        minHeight:'15vh',
      }}
    >
      <Container maxWidth="false">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexDirection= {isMobile ? 'column' : 'row' }
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Manrope Variable',
                fontWeight: 700,
                marginBottom: '2vh',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              CÔ TƯ
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Manrope Variable',
                color: 'gray',
                marginBottom:'2vh',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Địa Chỉ: 83/1C, Phạm Văn Bạch, P.15, Q.Tân Bình, TP.HCM<br />
            </Typography>
          </Box>

          <Box mt={{ xs: 2, sm: 0 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Manrope Variable',
                fontWeight: 700,
                marginBottom: '2vh',
              }}
            >
              TRUY CẬP NHANH
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <StyledTypography variant="body1" component='a' href="/" sx={{marginBottom:'2vh'}}>
                  TRANG CHỦ
                </StyledTypography>
                {/* <StyledTypography variant="body1" component='a' href="/san-pham" sx={{marginBottom:'2vh'}}>
                  SẢN PHẨM
                </StyledTypography> */}
                <StyledTypography variant="body1" component='a' href="/gioi-thieu" sx={{marginBottom:'2vh'}}>
                  GIỚI THIỆU
                </StyledTypography>
                <StyledTypography variant="body1" component='a' href="/lien-he" sx={{marginBottom:'2vh'}}>
                  LIÊN HỆ
                </StyledTypography>
            </Box>
          </Box>
          <Box mt={{ xs: 2, sm: 0, textAlign: 'center',   }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Manrope Variable',
                fontWeight: 700,
                mb: 2,
              }}
            >
              LIÊN HỆ VỚI CÔ TƯ
            </Typography>
            <Box display="flex" justifyContent="center" gap = '20px'>
              <Box>
                  <img 
                    src={zaloLogo} 
                    style={{ width: '75px', height: '75px' }}
                  />

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontFamily: 'Manrope Variable', 
                      paddingTop: '1vh', 
                      color: 'gray',
                    }}>
                    0913767029
                  </Typography>
              </Box>

              <Box>
                  <img 
                    src={facebookLogo} 
                    style={{ width: '75px', height: '75px' }} 
                  />
                  <StyledTypography
                    variant="body1"
                    sx={{ 
                      fontFamily: 'Manrope Variable', 
                      paddingTop: '1vh', 
                      color: 'gray',
                    }}>
                     <a 
                      href='https://www.facebook.com/phuong.lethihong.7'
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{textDecoration:'none', height:'2px',color: 'gray' }}>
                        Le Hong Phuong 
                    </a>
                    </StyledTypography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
