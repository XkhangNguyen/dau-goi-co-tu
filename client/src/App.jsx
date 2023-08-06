import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/navbar_mobile";
import Footer from "./components/footer";
import HomePage from "./scenes/homePage";
import ContactPage from "./scenes/contactPage";

import useCheckMobileScreen from "./components/checkMobileScreen";
import { ThemeProvider } from "@emotion/react";
import desktopTheme from "./components/theme_desktop"
import mobileTheme from "./components/theme_mobile"

function App() {
  const isMobile = useCheckMobileScreen();
  return (
    <div className="app">
      {!isMobile ? <Navbar/> : <MobileNavbar/>}
      <ThemeProvider theme = {!isMobile ? desktopTheme : mobileTheme}>
        <BrowserRouter> 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <Footer />
    </div>
    
  )
}

export default App
