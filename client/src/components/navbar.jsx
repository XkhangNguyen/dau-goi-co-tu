import React, { useState, useEffect, useRef  } from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '@fontsource-variable/manrope';
import logoImg from './../assets/images/logo_CoTu.png';


const NavigationBar = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  //const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const productDropdownRef = useRef(null);
  //const aboutDropdownRef = useRef(null);
  const productIconRef = useRef(null);
  //const aboutIconRef = useRef(null);  

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function clickOutSideIconBox(ref, exceptionRef, onClickOutSide){
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (exceptionRef.current.contains(event.target)){
          return;
        }
  
        // Check if the clicked target is inside the dropdown
        if (
          ref.current && !ref.current.contains(event.target) 
        ) {
          onClickOutSide();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, onClickOutSide]);
  }


  clickOutSideIconBox(productDropdownRef, productIconRef, () => setShowProductDropdown(false));
  //clickOutSideIconBox(aboutDropdownRef, aboutIconRef, () => setShowAboutDropdown(false));

  const handleProductDropdownToggle = () => {
    setShowProductDropdown((prevShowProductDropdown) => !prevShowProductDropdown);
    //setShowAboutDropdown(false);
  };

  // const handleAboutDropdownToggle = () => {
  //   setShowAboutDropdown((prevShowAboutDropdown) => !prevShowAboutDropdown);
  //   setShowProductDropdown(false);
  // };

  const renderCustomNavItem = (element) => (
      <Typography 
        variant="h6" 
        sx={{
          fontFamily:'Manrope Variable', fontWeight: 'bold', fontSize:'15px',
          display: 'inline-block', margin: '0 16px' 
        }}>
          {element}
      </Typography>
  );

  const renderCustomNavItemWithLink = (element, source) => (
    <Typography 
      variant="h6"
      component="a"
      href = {source} 
      sx={{
        color:'inherit',
        textDecoration:'none',
        fontFamily:'Manrope Variable', fontWeight: 'bold', fontSize:'15px',
        display: 'inline-block', margin: '0 16px' 
      }}>
        {element}
    </Typography>
  );


  
  const renderTextAlignWithIcon = (text, handleDropDownToggle, iconId, iconRef) => (
    <Box id={iconId}  sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <span>{text}</span>
        <Box
            ref={iconRef}
            onClick={handleDropDownToggle}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 4px',
                borderRadius: '15%',
                background: 'transparent',
                '&:hover': {
                    background: '#F5F5F5',
                },
            }}
        >
            <ArrowDropDownIcon/>
        </Box>
    </Box>
  );

  const renderDropDownMenu = (dropDownItems, parentElement, dropDownRef) => {
    const {top, height, left, width} = parentElement.getBoundingClientRect();
    return (
      <Box
        ref={dropDownRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          backgroundColor: 'white',
          top: `${top + height + 6}px`,
          left: `${left - width/5.5}px`,
          width: '220px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: "0 0 10px 0"
        }}
      >                  
        {dropDownItems.map((item, index) => (
        <React.Fragment key={`dropdown-item-${index}`}> {/* Add a unique key prop for each item */}
          {item}
        </React.Fragment>
      ))}
      </Box>
    );
  };

  const renderDropDownItem = (text, source) => (
      <Typography 
        variant="h6"  
        fontSize={14}
        component="a"
        href = {source}
        sx={{
          color:'inherit',
          textDecoration:'none',
          fontFamily:'Manrope Variable', 
          fontWeight: 750,  
          padding: '8px 0px 8px 16px',
          background: 'transparent',
          '&:hover': {
            background: '#F5F5F5',
          },
      }}>
        {text}
      </Typography>
  );


  return (
    <AppBar 
      position='sticky' 
      color='transparent' 
      sx={{ 
        zIndex: "100", 
        backgroundColor: "white", 
        boxShadow: scrolled ?'0px 4px 8px rgba(0, 0, 0, 0.1)': 'none',
      }} >
        <Container maxWidth="false" disableGutters>
            <Toolbar disableGutters>
               
              <Box sx={{ flexGrow: 1.5, display: 'flex', justifyContent: 'flex-start', flexBasis: 0 }}>
                      {renderCustomNavItem(renderTextAlignWithIcon('SẢN PHẨM', handleProductDropdownToggle, 'product-icon', productIconRef))}
                      {showProductDropdown && renderDropDownMenu([
                        renderDropDownItem('DẦU GỘI', '/san-pham/dau-goi'),
                        renderDropDownItem('SỮA TẮM', '/san-pham/sua-tam'),
                        renderDropDownItem('BỘT GỘI ĐẦU', '/san-pham/bot-goi-dau'),
                        ],
                        document.getElementById('product-icon'),
                        productDropdownRef
                      )}
                      

                      {/* {renderCustomNavItem(renderTextAlignWithIcon('GIỚI THIỆU', handleAboutDropdownToggle, 'about-icon', aboutIconRef))}
                      {showAboutDropdown && renderDropDownMenu([
                        renderDropDownItem('CÂU CHUYỆN CỦA CÔ TƯ', '/gioi-thieu/cau-chuyen-cua-co-tu'),
                        renderDropDownItem('LỊCH SỬ PHÁT TRIỂN', '/gioi-thieu/lich-su-phat-trien'),
                        renderDropDownItem('THÀNH TÍCH', '/gioi-thieu/thanh-tich'),
                        renderDropDownItem('BLOG', '/gioi-thieu/blog'),
                        ],
                        document.getElementById('about-icon'),
                        aboutDropdownRef
                      )} */}

                      {renderCustomNavItemWithLink(' GIỚI THIỆU','/gioi-thieu')} 
                      {renderCustomNavItemWithLink('LIÊN HỆ','/lien-he')}
              </Box>

              <Box flexGrow={1} flexBasis={0} display={'flex'} justifyContent="center">
                <Typography
                  justifyContent='center'
                  component="a"
                  href="/"
                  sx={{
                    display: 'flex',
                  }}
                >            
                <Box
                  sx={{
                    backgroundImage: `url(${logoImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    height: '80px',
                    width: '80px',
                    margin: '0 auto',
                    maxWidth: '100%',
                  }}>             
                                
                 </Box>           
                </Typography>
              </Box>

              <Box flexGrow={1.5} display={'flex'} justifyContent={'flex-end'} flexBasis={0}>
                {renderCustomNavItemWithLink('MUA NGAY','/lien-he')}
              </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default NavigationBar;
