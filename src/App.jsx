import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QrCode from './components/QrCode';
import Url from './components/Url';
import ImgFinder from './components/ImgFinder';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QrCode />
      <Url />
      <ImgFinder />
      <Footer />
    </>
  );
}

export default App;
