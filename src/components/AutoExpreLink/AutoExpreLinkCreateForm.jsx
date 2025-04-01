import React from "react";
import PersianDatePicker from "../PersianDatePicker";

const AutoExpreLinkCreateForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shortlink created!");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4" dir="rtl">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-right">
          Create New Auto Expire Link
        </h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Original URL Input */}
          <div className="flex flex-col  gap-4">
            <label
              htmlFor="original-url"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Original URL
            </label>
            <input
              type="url"
              id="original-url"
              name="original-url"
              placeholder="https://example.com"
              required
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {/* Custom Shortlink Input */}
          <div className="flex flex-col  gap-4">
            <label
              htmlFor="shortlink"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Custom Shortlink (Optional)
            </label>
            <input
              type="text"
              id="shortlink"
              name="shortlink"
              placeholder="your-custom-link"
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          {/* Custom DateTime Picker Input */}
          <div className="flex flex-col  gap-4">
            <label
              htmlFor="original-url"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Date-Time
            </label>
            <PersianDatePicker />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
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

export default AutoExpreLinkCreateForm;
