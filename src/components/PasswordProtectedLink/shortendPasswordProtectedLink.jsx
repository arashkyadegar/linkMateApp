import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const ShortenedPasswordLink = ({ link }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg rounded-t-none border-t-4 border-blue-600 dark:bg-gray-800 dark:border-blue-500">
      <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-right">
        Your Shortened Link
      </h4>

      {/* Link Display */}
      <div className="flex flex-col gap-4 mb-6">
        <label
          htmlFor="shortenedLink"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Shortened Link
        </label>
        <input
          type="text"
          id="shortenedLink"
          value={link}
          readOnly
          className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>

      {/* QR Code Display and Buttons */}
      <div className="flex flex-col gap-4">
        <label
          htmlFor="qrCode"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          QR Code
        </label>
        <div className="flex justify-center items-center">
          {/* Animated QR Code Container */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:border-4 hover:border-yellow-400">
            <QRCodeCanvas
              value={link}
              className="w-48 h-48 bg-white p-2 rounded-lg shadow-md border-4 border-gray-300"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={copyToClipboard}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Copy Link
          </button>
          <button
            onClick={downloadQRCode}
            className="px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortenedPasswordLink;
