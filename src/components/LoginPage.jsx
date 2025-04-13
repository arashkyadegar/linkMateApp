import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/hooks/AuthProvider"

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const emailTxtRef = useRef();
  const passworsTxtRef = useRef();
  const doNavigate = (link) => {
    navigate(link);

  };
  async function loginSubmit() {

    console.log(emailTxtRef.current.value)
    const data = {
      email: "ssss@gmail.com",
      password: "1@Adsdd321",
    };

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
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-[400px] dark:bg-gray-900 dark:text-gray-200">
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className="mb-4">
            <input
              ref={emailTxtRef}
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="mb-4">
            <input
              ref={passworsTxtRef}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            />
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
            onClick={loginSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg dark:bg-blue-700"
          >
            LOGIN
          </button>
          <div className="text-center mt-4">
          <button
              onClick={() => { doNavigate('/register') }}
              className="text-blue-500 dark:text-blue-400">
              Register now
            </button>
          </div>
          <div className="text-center my-4 text-gray-500 dark:text-gray-400">
            or
          </div>
          <div className="space-y-2">
            {/* <button className="w-full bg-blue-800 text-white py-2 rounded-lg dark:bg-blue-900">
              LOGIN WITH FACEBOOK
            </button> */}
            <button className="w-full bg-red-500 text-white py-2 rounded-lg dark:bg-red-700">
              LOGIN WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
