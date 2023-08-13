import React, { useRef, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import 'tailwindcss/tailwind.css';

const ImgGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const qrCodeRef = useRef(null);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setLoading(true);
    const res = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
    });
    setLoading(false);
    setResult(res.data.data[0].url);
  };

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleDownload = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const pngUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  const inputClass =
    'w-full px-4 py-2 rounded-md mb-4 text-lg placeholder-gray-500 placeholder-opacity-75';
  const headerClass =
    'text-center font-bold py-8 lg:py-24 text-5xl lg:text-6xl';
  const downloadButtonClass =
    'bg-[#001e1d] text-[#fffffe] hover:scale-105 py-2 px-4 rounded-md';

  return (
    <div
      name="Img"
      className="flex h-[120vh] flex-col items-center justify-center bg-[#065143] text-white"
    >
      {loading ? (
        <>
          <h2 className="text-white text-3xl md:text-4xl text-center">
            Generating Image...
          </h2>
          <div className="load"></div>
        </>
      ) : (
        <>
          <h1 className={headerClass}>DALL•E Image Generator</h1>
          <div className="mx-auto flex max-w-md flex-col items-center">
            <input
              type="text"
              className={inputClass}
              placeholder="Describe Your Image"
              value={prompt}
              onChange={handleInputChange}
            />
            <button
              className="bg-[#001e1d] text-[#fffffe] hover:scale-105 py-2 px-4 rounded font-bold"
              onClick={generateImage}
            >
              Generate Image
            </button>
            {result && (
              <img
                className="result-image mt-8 max-w-full h-auto"
                src={result}
                alt="Result"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ImgGenerator;
