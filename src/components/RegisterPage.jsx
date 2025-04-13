import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/AuthProvider";

const RegisterPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const emailTxtRef = useRef();
  const passworsTxtRef = useRef();
  const passwordConfirmTxtRef = useRef();
  const [errors, setErrors] = React.useState({});

  const doNavigate = (link) => {
    navigate(link);
  };

  const validateForm = () => {
    const newErrors = {};
    const email = emailTxtRef.current.value;
    const password = passworsTxtRef.current.value;
    const confirmPassword = passwordConfirmTxtRef.current.value;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  async function registerSubmit() {
    if (!validateForm()) return; // Stop submission if validation fails

    const data = {
      email: emailTxtRef.current.value,
      password: passworsTxtRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        data
      );
      console.log(response.data)
      // navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-[400px] dark:bg-gray-900 dark:text-gray-200">
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <input
              ref={emailTxtRef}
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
          </div>
          <div className="mb-4">
            <input
              ref={passworsTxtRef}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
            {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
          </div>
          <div className="mb-4">
            <input
              ref={passwordConfirmTxtRef}
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>{errors.confirmPassword}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={registerSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-lg dark:bg-blue-700"
            >
              REGISTER
            </button>
            <div className="space-y-2">
              <button
                onClick={() => {
                  doNavigate("/login");
                }}
                className="w-full bg-red-500 text-white py-2 rounded-lg dark:bg-red-700"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;