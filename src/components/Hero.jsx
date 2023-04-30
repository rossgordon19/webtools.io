import React from 'react';
import { Link } from 'react-scroll';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // fade out animation
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  return (
    <div name="home" className="w-full h-screen bg-[#577590] text-[#fffffe]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
          className="text-5xl lg:text-7xl font-bold"
        >
          WebTools.io
        </motion.h1>

        <p className="text-2xl lg:text-4xl">Get Ahead with WebTools</p>
      </div>
    </div>
  );
};

export default Hero;
