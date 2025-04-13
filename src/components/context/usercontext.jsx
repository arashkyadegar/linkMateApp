import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Provide the context to components
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("user"));

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};