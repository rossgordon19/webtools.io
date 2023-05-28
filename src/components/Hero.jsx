import React from 'react';
import { Link } from 'react-scroll';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // fade out animation
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  return (
    <div name="home" className="h-screen w-full bg-[#243447] text-[#fffffe]">
      {/* Container */}
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity }}
          className="text-5xl font-bold lg:text-7xl"
        >
          WebTools.io
        </motion.h1>

        <p className="text-2xl lg:text-4xl">Get Ahead with WebTools</p>
      </div>
    </div>
  );
};

export default Hero;
