import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PasswordProtectedRedirect = () => {
  const { id } = useParams(); // Retrieve the link ID from the URL params
  const [originalUrl, setOriginalUrl] = useState(null);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPasswordLink();
  }, []);


  const fetchPasswordLink = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:3000/password-links/passwordlink/" + id
      ); // Replace with your API endpoint
      const data = await response.json();

      setStatus(response.status);
      setOriginalUrl(data.originalUrl);
      console.log(data)
    } catch (error) {
      console.error("Error fetching passwordlink:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <p>Loading...</p>
          <span className="left-0.5 z-40">
            <img src="/loading.gif" alt="Loading" />
          </span>
        </div>
      ) : status === 302 ? (
        <div className="flex flex-col items-center justify-center">
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
        </div>
      ) : status === 410 ? (
        <div className="flex flex-col items-center justify-center">
          <p className=" text-gray-900 dark:text-gray-100">This short link has expired or is no longer available.</p>
          <span className="left-0.5 z-40">
            {/* <img src="/expired.gif" alt="Expired" /> */}
          </span>
        </div>
      ) : status === 404 ? (
        <div className="flex flex-col items-center justify-center">
          <p className=" text-gray-900 dark:text-gray-100">No matching short link was found.</p>
          <span className="left-0.5 z-40">
            {/* <img src="/notfound.gif" alt="Not Found" /> */}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className=" text-gray-900 dark:text-gray-100">An unexpected error occurred. Please try again later.</p>
          <span className="left-0.5 z-40">
            {/* <img src="/error.gif" alt="Error" /> */}
          </span>
        </div>
      )}
    </div>
  );
};

export default PasswordProtectedRedirect;
