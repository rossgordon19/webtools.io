import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Url from './components/Url';
import ImgFinder from './components/ImgFinder';
import Footer from './components/Footer';
import QRCodeGenerator from './components/QRCodeGenerator';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QRCodeGenerator />
      <Url />
      <ImgFinder />
      <Footer />
    </>
  );
}

export default App;
