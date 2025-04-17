import React from "react";
import { Link } from "react-router-dom";

export default function NotAllowed() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md max-w-md text-center">
        <h1 className="text-lg font-bold">Access Denied</h1>
        <p className="mt-2">You must 
        <span>
          <Link
            to="/login"
            className="inline-flex items-center p-1  text-blue-400 hover:text-blue-600 font-medium  leading-tight rounded-lg outline-none"
          >
            Login
          </Link>
        </span>
           to see this page.</p>

      </div>
    </div>
  );
}
