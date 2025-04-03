import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PasswordProtectedRedirect = () => {
  const { id } = useParams(); // Retrieve the link ID from the URL params
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUnlock = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const response = await fetch(
        `http://localhost:3000/short-links/password-protected-link/${id}`, // Replace with your API endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );
      const data = await response.json();
      setStatus(response.status);

      if (response.ok && data.originalUrl) {
        window.location.href = data.originalUrl; // Redirect to the original URL
      } else {
        setErrorMessage("Invalid password. Please try again.");
      }
    } catch (error) {
      console.error("Error unlocking link:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-900 dark:text-gray-100">Unlocking...</p>
          <span>
            <img src="/loading.gif" alt="Loading" />
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl mb-4 text-gray-900 dark:text-gray-100">
            Password Protected Link
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="border p-2 mb-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={handleUnlock}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Unlock
          </button>
          {errorMessage && (
            <p className="text-red-500 mt-2">{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordProtectedRedirect;