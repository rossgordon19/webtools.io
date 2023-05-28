import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Url from './components/Url';
import Footer from './components/Footer';
import QRCodeGenerator from './components/QRCodeGenerator';
import ImgGenerator from './components/ImgGenerator';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImgGenerator />
      <QRCodeGenerator />
      <Url />
      <Footer />
    </>
  );
}

export default App;
