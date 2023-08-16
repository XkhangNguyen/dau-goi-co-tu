import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/navbar_mobile";
import Footer from "./components/footer";
import HomePage from "./scenes/homePage";
import ContactPage from "./scenes/contactPage";
import ProductPage from "./scenes/productPage";
import AboutPage from "./scenes/aboutPage" 

import useCheckMobileScreen from "./components/checkMobileScreen";
import { ThemeProvider } from "@emotion/react";
import desktopTheme from "./components/theme_desktop"
import mobileTheme from "./components/theme_mobile"
import { Analytics } from '@vercel/analytics/react';

function App() {
  const isMobile = useCheckMobileScreen();
  return (
    <div className="app">
      {!isMobile ? <Navbar/> : <MobileNavbar/>}
      <ThemeProvider theme = {!isMobile ? desktopTheme : mobileTheme}>
        <BrowserRouter> 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lien-he" element={<ContactPage />} />
              <Route path="/san-pham/:sanpham" element={<ProductPage />} />
              <Route path="/gioi-thieu" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <Footer />
      <Analytics />
    </div>

  )
}

export default App
