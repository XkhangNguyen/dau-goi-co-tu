import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Collapse , Grid, Paper, Container, Typography, Box } from '@mui/material';
import useCheckMobileScreen from './../../components/checkMobileScreen'
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductContent = ({ title, price, quantity, imageSrc, ingredients, usage, howToUse }) => {
  const isMobile = useCheckMobileScreen();
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [howToUseOpen, setHowToUseOpen] = useState(false);
  const [usageOpen, setUsageOpen] = useState(false);

  const handleIngredientsToggle = () => {
    setIngredientsOpen(!ingredientsOpen);
  };
 
  const handleHowToUseToggle = () => {
    setHowToUseOpen(!howToUseOpen);
  };
  
  const handleUsageToggle = () => {
    setUsageOpen(!usageOpen);
  };


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
        
          <Box 
            display="flex" 
            flexDirection={isMobile ? 'column' : 'row'}
            alignItems={isMobile ? 'left' : 'center'}
          >
            <Box flex="1" sx={{ 
              height: isMobile ? '80vw' : '40vh',
              width: '100%',
            }}>
              <Box
                sx={{
                  backgroundImage: `url(${imageSrc})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  height: 'inherit',
                  width: 'inherit',
                  margin: '0 auto',
                  maxWidth: '100%',
                  maxHeight:'100%',
                }}
              >
                
              </Box>
            </Box>
            <Box 
              flex="1" 
              sx={{
                paddingLeft:isMobile ? 0 : "4vh",
                paddingBottom: isMobile? '5vh': 0,
                textAlign: isMobile ? 'center' : 'left',
              }}>

              <Typography
                variant="h6"
                sx={{
                  fontWeight:'800',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF4500',
                }}
                >
                  {price + ' VNĐ'}
              </Typography>

              <Button 
                variant="contained" 
                to="/lien-he"
                component={Link} 
                sx={{
                  backgroundColor:'black', 
                  fontFamily: 'Manrope Variable', 
                  fontWeight: 'bold',
                  margin: '1vh 0', 
                  borderRadius:'0%', 
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}>  
                MUA NGAY
              </Button>

              <Typography
                variant="h6"
              >
                {'Số lượng: ' + quantity}
              </Typography>

            </Box>
          </Box>

          <Box>
            <Grid container sx={{display: 'flex', justifyContent: 'center'  }}>
              <Grid>
                <Paper elevation={3} sx={{ padding: '2vh', marginBottom:'1.5vh' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <IconButton onClick={handleIngredientsToggle}>
                      {ingredientsOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </IconButton>
                    <IconButton onClick={handleIngredientsToggle}>
                      <Typography variant="h5">NGUYÊN LIỆU</Typography>
                    </IconButton>
                  </Box>
                  <Collapse in={ingredientsOpen}>
                    <Typography variant="body1" paddingLeft={'2vh'}>
                      {ingredients}
                    </Typography>
                  </Collapse>
                </Paper>

                <Paper elevation={3} sx={{ padding: '2vh', marginBottom:'1vh' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <IconButton onClick={handleUsageToggle}>
                      {usageOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </IconButton>
                    <IconButton onClick={handleUsageToggle}>
                      <Typography variant="h5">CÔNG DỤNG</Typography>
                    </IconButton>
                  </Box>
                  <Collapse in={usageOpen}>
                      {usage.map((item, index) => (
                        <Typography key={index} variant="body1" paddingLeft={'2vh'}>
                          {'- ' + item}
                        </Typography>
                      ))}             
                  </Collapse>
                </Paper>

                <Paper elevation={3} sx={{ padding: '2vh', marginBottom:'1.5vh' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <IconButton onClick={handleHowToUseToggle}>
                    {howToUseOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </IconButton>
                    <IconButton onClick={handleHowToUseToggle}>
                      <Typography variant="h5">HƯỚNG DẪN SỬ DỤNG</Typography>
                    </IconButton>
                  </Box>
                  <Collapse in={howToUseOpen}>
                    {howToUse.map((item, index) => (
                      <Typography key={index} variant="body1" paddingLeft={'2vh'}>
                        {'- ' + item}
                      </Typography>
                    ))}                   
                  </Collapse>
                </Paper>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProductContent;
