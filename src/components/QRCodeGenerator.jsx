import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [qrValue, setQrValue] = useState('');
  const [qrColor, setQrColor] = useState('#000000');
  const qrCodeRef = useRef(null);

  const handleInputChange = (e) => {
    setQrValue(e.target.value);
  };

  const handleDownload = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const pngUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  const colorButtons = [
    { color: '#000000', className: 'bg-black' },
    { color: '#FF0000', className: 'bg-red-500' },
    { color: '#0000FF', className: 'bg-blue-500' },
    { color: '#FFA500', className: 'bg-orange-500' },
  ];

  const handleColorChange = (color) => {
    setQrColor(color);
  };

  const ColorButton = ({ color, className, onClick }) => (
    <button
      className={`h-8 w-8 rounded-full ${className} hover:scale-105`}
      onClick={() => handleColorChange(color)}
      style={{ backgroundColor: color }}
    />
  );

  const inputClass =
    'w-full text-center px-4 py-2 rounded-md mb-4 text-lg placeholder-gray-500 placeholder-opacity-75';
  const headerClass =
    'text-center font-bold py-8 lg:py-24 text-5xl lg:text-6xl';
  const downloadButtonClass =
    'bg-[#001e1d] text-[#fffffe] hover:scale-105 py-2 px-4 rounded-md';

  return (
    <div
      name="QR"
      className="flex h-screen flex-col items-center justify-center bg-[#129490] text-white"
    >
      <h1 className={headerClass}>QR Code Generator</h1>
      <div className="mx-auto flex max-w-md flex-col items-center">
        <input
          type="text"
          className={inputClass}
          placeholder="Enter URL Here"
          value={qrValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-center space-x-4 py-4">
          {colorButtons.map((button) => (
            <ColorButton
              key={button.color}
              color={button.color}
              className={button.className}
            />
          ))}
        </div>
        {qrValue && (
          <div className="my-4" ref={qrCodeRef}>
            <QRCode value={qrValue} size={256} fgColor={qrColor} />
          </div>
        )}
        {qrValue && (
          <div className="flex justify-center space-x-4 py-4">
            <button className={downloadButtonClass} onClick={handleDownload}>
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
