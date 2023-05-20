import React, { useState } from 'react';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false); // Add this state

  const handleInputChange = (e) => {
    setLongUrl(e.target.value);
    setIsCopied(false); // Reset the copied status when user types in input field
  };

  const handleShorten = async () => {
    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          longUrl
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        setShortUrl(data.shorturl);
        setIsCopied(false); // Reset the copied status here
      } else {
        throw new Error('Failed to shorten URL');
      }
    } catch (error) {
      console.error('Error shortening URL:', error.message);
      // Handle error condition, such as displaying an error message to the user
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        console.log('URL copied to clipboard');
        setIsCopied(true); // Set the copied status when the URL is copied
      })
      .catch((error) => {
        console.error('Error copying URL to clipboard:', error);
      });
  };

  const handleClear = () => {
    setLongUrl('');
    setShortUrl('');
    setIsCopied(false);
  };

  const inputClass =
    'w-full px-4 py-2 rounded-md mb-4 text-lg placeholder-gray-500 placeholder-opacity-75';
  const headerClass =
    'text-center font-bold py-8 lg:py-24 text-5xl lg:text-6xl';
  const downloadButtonClass =
    'bg-[#001e1d] text-[#fffffe] hover:scale-105 py-2 px-4 rounded-md';
  const copyButtonClass =
    'bg-[#001e1d] text-[#fffffe] hover:scale-105 py-2 px-4 rounded-md mt-4';
  const clearButtonClass =
    'bg-[#001e1d] text-[#fffffe] hover:scale-105 py-2 px-4 rounded-md mt-2';
  const shortUrlClass = 'text-black';
  const originalUrlClass = 'text-black';

  return (
    <div name="Url" className="flex flex-col items-center justify-center h-screen bg-[#83b78f] text-[#001e1d]">
      <h1 className={headerClass}>URL Shortener</h1>
      {shortUrl ? (
        <div className="mx-auto max-w-md flex flex-col items-center">
          <p className="text-center mb-4 text-2xl">Original URL:</p>
          <a
            href={longUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline ${originalUrlClass}`}
          >
            {longUrl}
          </a>
          <p className="text-center mt-4 mb-4 text-2xl">Shortened URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline ${shortUrlClass}`}
          >
            {shortUrl}
          </a>
          <button className={copyButtonClass} onClick={handleCopy}>
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
          <button className={clearButtonClass} onClick={handleClear}>
            Clear and Start Over
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-md flex flex-col items-center">
          <input
            type="text"
            className={inputClass}
            placeholder="Enter URL Here"
            value={longUrl}
            onChange={handleInputChange}
          />
          <button
            className={downloadButtonClass}
            onClick={handleShorten}
            disabled={!longUrl}
          >
            Shorten
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
