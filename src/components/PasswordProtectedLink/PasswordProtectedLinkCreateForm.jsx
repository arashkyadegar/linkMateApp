import React, { useState } from "react";
import PersianDatePicker from "../PersianDatePicker";
import axios from "axios";
import { ToastSuccess, ToastFail } from "../Toast/ToastAlert";

const PasswordProtectedLinkCreateForm = () => {
  const [formData, setFormData] = useState({
    originalUrl: "",
    shortCode: "",
    password: "",
    confirmPassword: "",
    isSingleUse: false,
    expirationDate: "",
    createdAt: null, // Set by PersianDatePicker
  });
  const [errors, setErrors] = useState({}); // Tracks validation errors for each field

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDateChange = (selectedDate) => {
    console.log(selectedDate)
    setFormData({ ...formData, expirationDate: selectedDate });
  };

  const validateFields = () => {
    const errors = {};

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };
  const handleReset = () => {
    setFormData({
      originalUrl: "",
      shortCode: "",
      password: "",
      isSingleUse: false,
      confirmPassword: "",
      expirationDate: "",
      createdAt: null, // Set by PersianDatePicker
    });
    setErrors({});
    setShortenedData(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      const data = {
        userId: "",
        originalUrl: formData.originalUrl,
        shortCode: formData.customShortlink,
        visitCount: 0,
        passwordHash: formData.password,
        isSingleUse: formData.isSingleUse,
        expirationDate: formData.expirationDate,
        isUsed: false,
      };
      try {
        console.log(data)
        const response = await axios.post(
          "http://localhost:3000/password-links/",
          data,
          {
            withCredentials: true,
          }
        );

        if (response.status == "201") {
          setShortenedData({
            link:
              import.meta.env.VITE_SERVERURL_SHORTLINK +
              "/passwordlink/" +
              response.data.shortCode,
          });
          ToastSuccess("Success! The link has been created.");
        }

        setErrors({});
      } catch (error) {
        ToastFail(error.response.status);
        console.error("Error submitting data:", error);
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4" dir="rtl">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-right">
          Create New Password Protected Link
        </h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Original URL Input */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="original-url"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Original URL
            </label>
            <input
              type="url"
              id="original-url"
              name="originalUrl"
              value={formData.originalUrl}
              onChange={handleChange}
              placeholder="https://example.com"
              required
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {/* Custom Shortlink Input */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="shortlink"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Custom Shortlink (Optional)
            </label>
            <input
              type="text"
              id="shortlink"
              name="shortCode"
              value={formData.shortCode}
              onChange={handleChange}
              placeholder="your-custom-link"
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            {errors.shortCode && (
              <p className="text-sm text-red-500">{errors.shortCode}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="password"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="confirmPassword"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Custom DateTime Picker Input */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="createdAt"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Date-Time
            </label>
            <PersianDatePicker onDateChange={handleDateChange} />
          </div>
          {/* Single Use Checkbox */}
          <div className="flex items-center">
            <input
              id="isSingleUse"
              name="isSingleUse"
              type="checkbox"
              checked={formData.isSingleUse}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="isSingleUse"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make it single use
            </label>
          </div>
          {/* Submit Button */}
          <div className="flex justify-end gap-2">
            <button
              onClick={handleReset}
              type="button"
              className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
            >
              reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtectedLinkCreateForm;
