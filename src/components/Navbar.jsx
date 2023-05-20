import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  // navbar toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed flex h-[80px] w-full items-center justify-between bg-[#577590] px-4 text-[#fffffe]">
      <div>
        <h1 className="mb-2 cursor-pointer text-xl font-bold lg:mb-0">
          <Link to="home" smooth={true} duration={500}>
            WebTools.io
          </Link>
        </h1>
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex">
        <li className="cursor-pointer px-4 hover:scale-105">
          <Link to="QR" smooth={true} duration={500}>
            QR Code Generator
          </Link>
        </li>

        <li className="cursor-pointer px-4 hover:scale-110">
          <Link to="Url" smooth={true} duration={500}>
            URL Shortener
          </Link>
        </li>
        <li className="cursor-pointer px-4 hover:scale-105">
          <Link to="Img" smooth={true} duration={500}>
            Stock Image Finder
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="z-10 text-[#03071e] md:hidden">
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
            : 'absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#577590] text-[#fffffe]'
        }
      >
        <li className="transform cursor-pointer py-6 text-4xl transition hover:scale-110">
          <Link to="QR" smooth={true} duration={500} onClick={handleClick}>
            QR Code Generator
          </Link>
        </li>
        <li className="transform cursor-pointer py-6 text-4xl transition hover:scale-110">
          <Link to="Url" smooth={true} duration={500} onClick={handleClick}>
            URL Shortener
          </Link>
        </li>
        <li className="transform cursor-pointer py-6 text-4xl transition hover:scale-110">
          <Link to="Img" smooth={true} duration={500} onClick={handleClick}>
            Stock Image Finder
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
