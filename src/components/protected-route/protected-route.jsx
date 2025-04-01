import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  console.log(auth.user);
  return auth.user ? children : <Navigate to="/not-allowed" replace />;
};

export default ProtectedRoute;
