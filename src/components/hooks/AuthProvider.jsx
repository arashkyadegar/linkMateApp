import React from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;
  const [user, setUser] = useState(storedInfo?.email);
  // const [token, setToken] = useState(storedInfo?.token || "");
  // const [roles, setRoles] = useState(storedInfo?.roles || []);
  // const [departmentId, setDepartmentId] = useState(
  //   storedInfo?.departmentId || ""
  // );
  const navigate = useNavigate();

  const login = (data) => {
    setTimeout(() => {
      const obj = { ...data };
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    }, 0);
  };

  const logout = () => {
    setUser(null);
    // setToken("");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        // token, roles, departmentId,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
