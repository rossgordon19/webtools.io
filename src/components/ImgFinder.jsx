import React, { useState } from 'react';
import axios from 'axios';

const ImgFinder = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_PIXABAY_API_KEY
        }&q=${input}&image_type=photo`
      );
      const images = response.data.hits;
      if (images.length > 0) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setImages([randomImage]);
      } else {
        setImages([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const inputClass = 'border-2 border-gray-300 rounded-lg p-2 mb-4';
  const headerClass =
    'font-bold text-5xl lg:text-6xl py-12 lg:py-24 text-center';
  const searchButtonClass =
    'hover:scale-105 bg-[#577590] text-[#fffffe] text-white font-bold py-2 px-4 rounded transition-all duration-200';

  return (
    <div
      name="Img"
      className="flex h-screen w-full flex-col items-center justify-center bg-[#EBEBEB] text-[#001e1d]"
    >
      <h1 className={headerClass}>Stock Image Finder</h1>
      <div className="search-bar mb-8 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search images..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={inputClass}
        />
        <button onClick={searchImages} className={searchButtonClass}>
          Search
        </button>
      </div>
      <div className="image-results">
        {images[0] && (
          <div className="image-item flex h-64 w-full items-center justify-center">
            <img
              src={images[0].webformatURL}
              alt={images[0].tags}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgFinder;
