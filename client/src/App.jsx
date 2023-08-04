import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./scenes/homePage";
import ContactPage from "./scenes/contactPage";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  )
}

export default App
