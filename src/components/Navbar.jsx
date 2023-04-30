import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  // navbar toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#577590] text-[#fffffe]"
    >
      <div>
        <h1 className="font-bold text-xl cursor-pointer mb-2 lg:mb-0">
          <Link to="home" smooth={true} duration={500}>
            WebTools.io
          </Link>
        </h1>
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex">
        <li className="hover:scale-105 cursor-pointer px-4">
          <Link to="QR" smooth={true} duration={500}>
            QR Code Generator
          </Link>
        </li>

        <li className="hover:scale-110 px-4 cursor-pointer">
          <Link to="Url" smooth={true} duration={500}>
            URL Shortener
          </Link>
        </li>
        <li className="hover:scale-105 px-4 cursor-pointer">
          <Link to="Img" smooth={true} duration={500}>
            Stock Image Finder
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 text-[#03071e]">
        {!nav ? (
          <button className="hamburger hamburger-vortex" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        ) : (
          <button
            className="hamburger hamburger--vortex is-active"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#577590] text-[#fffffe] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl hover:scale-110 cursor-pointer transform transition">
          <Link to="QR" smooth={true} duration={500} onClick={handleClick}>
            QR Code Generator
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 cursor-pointer transform transition">
          <Link to="Url" smooth={true} duration={500} onClick={handleClick}>
            URL Shortener
          </Link>
        </li>
        <li className="py-6 text-4xl hover:scale-110 cursor-pointer transform transition">
          <Link to="Img" smooth={true} duration={500} onClick={handleClick}>
            Stock Image Finder
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
