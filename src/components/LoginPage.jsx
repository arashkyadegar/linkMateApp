import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/hooks/AuthProvider";

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for the specific field
  };

  const validateForm = () => {
    const newErrors = {};
    const { email, password } = formValues;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const loginSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (!validateForm()) return;

    const data = { email: formValues.email, password: formValues.password };

    try {
      const response = await axios.put(
        "http://localhost:3000/auth/signin",
        data,
        { withCredentials: true }
      );
      auth.login(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px] dark:bg-gray-900 dark:text-gray-200">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={loginSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <div className="flex items-center justify-between text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 dark:text-blue-400">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg dark:bg-green-700 dark:hover:bg-green-600"
          >
            Register now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;