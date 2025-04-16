import React from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetched } from '../redux/user';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const storedInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;
  const [user, setUser] = useState(storedInfo?.email);

  const navigate = useNavigate();

  const login = (data) => {
    setTimeout(() => {
      const obj = { ...data };
      setUser(data.user);
      dispatch(fetched(data.user))
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    }, 0);
  };

  const logout = () => {
    setUser(null);
    dispatch(fetched(null))
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
