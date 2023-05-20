import React, { useState } from 'react';
import axios from 'axios';

const ImgFinder = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${input}&image_type=photo`);
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

  return (
    <div name="Img" className="flex flex-col items-center justify-center w-full h-screen bg-[#EBEBEB] text-[#001e1d]">
      <h1 className="font-bold text-5xl lg:text-6xl py-24">
        Stock Image Finder
      </h1>
      <div className="search-bar flex items-center justify-center mb-8">
        <input 
          type="text" 
          placeholder="Search images..." 
          onChange={(e) => setInput(e.target.value)} 
          value={input}
          className="border-2 border-gray-300 rounded-lg p-2 mr-4"
        />
        <button 
          onClick={searchImages} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
      <div className="image-results">
        {images[0] && (
          <div className="image-item w-full h-64 flex items-center justify-center">
            <img src={images[0].webformatURL} alt={images[0].tags} className="object-contain max-w-full max-h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgFinder;
