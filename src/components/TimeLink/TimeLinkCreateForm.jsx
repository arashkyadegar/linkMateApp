// import React, { useState } from "react";
// import axios from "axios";
// import PersianDatePicker from "../PersianDatePicker";
// import { ToastSuccess, ToastFail } from "../Toast/ToastAlert";
// import ShortenedTimeLink from "./ShortenedTimeLink";
// const TimeLinkCreateForm = () => {
//   const [formData, setFormData] = useState({
//     originalUrl: "",
//     shortCode: "",
//     isSingleUse: false,
//     expirationDate: new Date(),
//     createdAt: null, // Set by PersianDatePicker
//   });
//   const [errors, setErrors] = useState({}); // Tracks validation errors for each field
//   const [shortenedData, setShortenedData] = useState(null); // Manage the visibility of ShortenedLink

//   const handleSubmit = async (e) => {
//     // Prepare data for the API
//     const data = {
//       userId: "",
//       originalUrl: formData.originalUrl,
//       shortCode: formData.customShortlink,
//       visitCount: 0,
//       expirationDate: new Date(formData.expirationDate).toISOString(),
//       isSingleUse: formData.isSingleUse,
//       isUsed: false,
//     };

//     try {
//       // Make the API call
//       const response = await axios.post(
//         "http://localhost:3000/time-links/",
//         data,
//         {
//           withCredentials: true, // Handle credentials (cookies, etc.)
//         }
//       );

//       if (response.status === 201) {
//         // Set shortened link data
//         setShortenedData({
//           link:
//             import.meta.env.VITE_SERVERURL +
//             "/tlnk/" +
//             response.data.shortCode,
//         });
//         ToastSuccess("Success! The link has been shortened.");
//       }

//       // Clear errors after successful submission
//       setErrors({});
//     } catch (error) {
//       // Handle API errors
//       ToastFail(error.response?.status || "An error occurred.");
//       console.error("Error submitting data:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleDateChange = (selectedDate) => {
//     setFormData({ ...formData, expirationDate: new Date(selectedDate) });
//   };
  
//   const handleReset = () => {
//     setFormData({
//       originalUrl: "",
//       shortCode: "",
//       isSingleUse: false,
//       expirationDate: "",
//       createdAt: null, // Set by PersianDatePicker
//     });
//     setErrors({});
//     setShortenedData(null);
//   };
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4">
//       <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//         <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-left">
//           Create New secure Link
//         </h4>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Original URL Input */}
//           <div className="flex flex-col gap-4">
//             <label
//               htmlFor="original-url"
//               className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Original URL <span className="text-red-600 text-lg">*</span>
//             </label>
//             <input
//               type="url"
//               id="original-url"
//               name="originalUrl"
//               value={formData.originalUrl}
//               onChange={handleChange}
//               placeholder="https://example.com"
//               required
//               className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//             />
//           </div>

//           {/* Custom Shortlink Input */}
//           <div className="flex flex-col gap-4">
//             <label
//               htmlFor="shortlink"
//               className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Custom Shortlink
//             </label>
//             <input
//               type="text"
//               id="shortlink"
//               name="shortCode"
//               value={formData.shortCode}
//               onChange={handleChange}
//               placeholder="your-custom-link"
//               className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//             />
//             {errors.shortCode && (
//               <p className="text-sm text-red-500">{errors.shortCode}</p>
//             )}
//           </div>


//           {/* Custom DateTime Picker Input */}
//           <div className="flex flex-col gap-4">
//             <label
//               htmlFor="createdAt"
//               className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Date-Time
//             </label>
//             <PersianDatePicker
//               selectedDate={formData.expirationDate} // Pass the selected date state
//               onDateChange={handleDateChange} // Handle date change
//             />
//           </div>
//           {/* Single Use Checkbox */}
//           <div className="flex items-center">
//             <input
//               id="isSingleUse"
//               name="isSingleUse"
//               type="checkbox"
//               checked={formData.isSingleUse}
//               onChange={handleChange}
//               className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
//             />
//             <label
//               htmlFor="isSingleUse"
//               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Make it single use
//             </label>
//           </div>
//           {/* Submit Button */}
//           <div className="flex justify-end gap-2">
//             <button
//               onClick={handleReset}
//               type="button"
//               className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
//             >
//               reset
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
//             >
//               Create
//             </button>
//           </div>
//         </form>
//         {/* Conditionally Render ShortenedLink */}
//         {shortenedData && (
//           <div className="mt-8">
//             <ShortenedTimeLink
//               link={shortenedData.link}
//               qrCode={shortenedData.qrCode}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TimeLinkCreateForm;

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import PersianDatePicker from "../PersianDatePicker";
import { ToastSuccess, ToastFail } from "../Toast/ToastAlert";
import ShortenedTimeLink from "./ShortenedTimeLink";
import { useNavigate } from "react-router-dom";
const TimeLinkCreateForm = () => {
    const navigate = useNavigate();
  const originalUrlRef = useRef("");
  const shortCodeRef = useRef("");
  const isSingleUseRef = useRef(false);

  const [expirationDate, setExpirationDate] = useState(new Date()); // State for PersianDatePicker
  const [errors, setErrors] = useState({});
  const [shortenedData, setShortenedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!originalUrlRef.current.value) {
      newErrors.originalUrl = "Original URL is required.";
    }
    if (shortCodeRef.current.value && !/^[\w-]+$/.test(shortCodeRef.current.value)) {
      newErrors.shortCode = "Custom Shortlink must contain only letters, numbers, or dashes.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = {
      userId: "",
      originalUrl: originalUrlRef.current.value,
      shortCode: shortCodeRef.current.value || undefined,
      visitCount: 0,
      expirationDate: expirationDate.toISOString(),
      isSingleUse: isSingleUseRef.current.checked,
      isUsed: false,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/time-links/",
        data,
        { withCredentials: true }
      );
      if (response.status === 201) {
        setShortenedData({
          link: import.meta.env.VITE_SERVERURL + "/tlnk/" + response.data.shortCode,
        });
        ToastSuccess("Success! The link has been shortened.");
        setErrors({});
      }
    } catch (error) {
      ToastFail(error.response?.status || "An error occurred.");
      console.error("Error submitting data:", error);
    }
  };

  const handleReset = () => {
    originalUrlRef.current.value = "";
    shortCodeRef.current.value = "";
    isSingleUseRef.current.checked = false;
    setExpirationDate(new Date()); // Reset PersianDatePicker state
    setErrors({});
    setShortenedData(null);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row justify-between">
          <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-left">
            Create new Time Link
          </h4>
          <div>
            <button
              onClick={() => navigate('/time-link-list')}
              type="submit"
              className="px-6 py-2 text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              list
            </button>
          </div>


        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="original-url"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Original URL <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="url"
              id="original-url"
              ref={originalUrlRef}
              placeholder="https://example.com"
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            {errors.originalUrl && (
              <p className="text-sm text-red-500">{errors.originalUrl}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="shortlink"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Custom Shortlink
            </label>
            <input
              type="text"
              id="shortlink"
              ref={shortCodeRef}
              placeholder="your-custom-link"
              className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            {errors.shortCode && (
              <p className="text-sm text-red-500">{errors.shortCode}</p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="expirationDate"
              className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Expiration Date
            </label>
            <PersianDatePicker
              selectedDate={expirationDate}
              onDateChange={(date) => setExpirationDate(date)}
            />
          </div>

          <div className="flex items-center">
            <input
              id="isSingleUse"
              type="checkbox"
              ref={isSingleUseRef}
              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="isSingleUse"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make it single use
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={handleReset}
              type="button"
              className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </div>
        </form>
        {shortenedData && (
          <div className="mt-8">
            <ShortenedTimeLink link={shortenedData.link} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLinkCreateForm;