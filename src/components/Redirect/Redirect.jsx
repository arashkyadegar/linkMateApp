import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RedirectComponent = () => {
  const { id } = useParams();
  const [originalUrl, setOriginalUrl] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchShortLink = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:3000/short-links/shortlink/" + id
      ); // Replace with your API endpoint
      const data = await response.json();

      setStatus(response.status);
      setOriginalUrl(data.originalUrl);
    } catch (error) {
      console.error("Error fetching shortLink:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchShortLink();
  }, []);

  useEffect(() => {
    if (originalUrl) {
      window.location.href = originalUrl; // Redirect once fetched
    }
  }, [originalUrl]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <p>Loading...</p>
          <span className="left-0.5 z-40">
            <img src="/loading.gif" alt="Loading" />
          </span>
        </div>
      ) : status === 302 ? (
        <div className="flex flex-col items-center justify-center">
          <p>Redirecting to the original URL...</p>
          <span className="left-0.5 z-40">
            <img src="/loading.gif" alt="Redirecting" />
          </span>
        </div>
      ) : status === 410 ? (
        <div className="flex flex-col items-center justify-center">
          <p>This short link has expired or is no longer available.</p>
          <span className="left-0.5 z-40">
            {/* <img src="/expired.gif" alt="Expired" /> */}
          </span>
        </div>
      ) : status === 404 ? (
        <div className="flex flex-col items-center justify-center">
          <p>No matching short link was found.</p>
          <span className="left-0.5 z-40">
            {/* <img src="/notfound.gif" alt="Not Found" /> */}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p>An unexpected error occurred. Please try again later.</p>
          <span className="left-0.5 z-40">
            {/* <img src="/error.gif" alt="Error" /> */}
          </span>
        </div>
      )}
    </div>
  );
};

export default RedirectComponent;
