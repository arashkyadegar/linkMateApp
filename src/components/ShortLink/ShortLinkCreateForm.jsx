// import React, { useState } from "react";
// import axios from "axios";
// import ShortenedLink from "./shortendLink";
// import { ToastSuccess, ToastFail } from "../Toast/ToastAlert";

// const ShortLinkCreateForm = () => {
//   const [formData, setFormData] = useState({
//     originalUrl: "",
//     customShortlink: "",
//     isSingleUse: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [shortenedData, setShortenedData] = useState(null); // Manage the visibility of ShortenedLink

//   const handleReset = () => {
//     setFormData({
//       originalUrl: "",
//       customShortlink: "",
//       isSingleUse: false,
//     });
//     setErrors({});
//     setShortenedData(null);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form behavior
//     // Prepare data for the API
//     const data = {
//       userId: "",
//       originalUrl: formData.originalUrl,
//       shortCode: formData.customShortlink,
//       visitCount: 0,
//       isSingleUse: formData.isSingleUse,
//       isUsed: false,
//     };

//     try {
//       // Make the API call
//       const response = await axios.post(
//         "http://localhost:3000/short-links/",
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
//             "/lnk/" +
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
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4" >
//       <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//         <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-left">
//           Create New Short Link
//         </h4>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Original URL Input */}
//           <div>
//             <label
//               htmlFor="originalUrl"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Original URL <span className="text-red-600 text-lg">*</span>
//             </label>
//             <input
//               type="url"
//               id="originalUrl"
//               name="originalUrl"
//               placeholder="https://example.com"
//               value={formData.originalUrl}
//               onChange={handleChange}
//               className={`block w-full px-4 py-2 text-sm border ${
//                 errors.originalUrl
//                   ? "border-red-500"
//                   : "border-gray-300 focus:border-blue-500"
//               } rounded-lg focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
//             />
//             {errors.originalUrl && (
//               <span className="text-red-500 text-sm">{errors.originalUrl}</span>
//             )}
//           </div>

//           {/* Custom Shortlink Input */}
//           <div>
//             <label
//               htmlFor="customShortlink"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Custom Shortlink
//             </label>
//             <input
//               type="text"
//               id="customShortlink"
//               name="customShortlink"
//               placeholder="your-custom-link"
//               value={formData.customShortlink}
//               onChange={handleChange}
//               className={`block w-full px-4 py-2 text-sm border ${
//                 errors.customShortlink
//                   ? "border-red-500"
//                   : "border-gray-300 focus:border-blue-500"
//               } rounded-lg focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
//             />
//             {errors.customShortlink && (
//               <span className="text-red-500 text-sm">
//                 {errors.customShortlink}
//               </span>
//             )}
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
//               Reset
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
//             <ShortenedLink
//               link={shortenedData.link}
//               qrCode={shortenedData.qrCode}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShortLinkCreateForm;

import React, { useRef, useState } from "react";
import axios from "axios";
import ShortenedLink from "./shortendLink";
import { ToastSuccess, ToastFail } from "../Toast/ToastAlert";

const ShortLinkCreateForm = () => {
  const originalUrlRef = useRef(null);
  const customShortlinkRef = useRef(null);
  const isSingleUseRef = useRef(null);
  const [shortenedData, setShortenedData] = useState(null); // Use state for shortened link data
  const [errors, setErrors] = useState({}); // Store validation errors

  const handleReset = () => {
    if (originalUrlRef.current) originalUrlRef.current.value = "";
    if (customShortlinkRef.current) customShortlinkRef.current.value = "";
    if (isSingleUseRef.current) isSingleUseRef.current.checked = false;
    setErrors({});
    setShortenedData(null); // Reset shortened data
  };

  const validateInputs = () => {
    const validationErrors = {};
    const originalUrl = originalUrlRef.current?.value;
    const customShortlink = customShortlinkRef.current?.value;

    // Validate Original URL
    if (!originalUrl) {
      validationErrors.originalUrl = "Original URL is required.";
    } else {
      try {
        new URL(originalUrl); // Check if it's a valid URL
      } catch {
        validationErrors.originalUrl = "Please enter a valid URL.";
      }
    }

    // Validate Custom Shortlink
    if (customShortlink) {
      if (!/^[a-zA-Z0-9-_]+$/.test(customShortlink)) {
        validationErrors.customShortlink =
          "Custom shortlink can only contain letters, numbers, '-' and '_'.";
      } else if (customShortlink.length > 30) {
        validationErrors.customShortlink =
          "Custom shortlink cannot exceed 30 characters.";
      }
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    if (!validateInputs()) return; // Exit if validation fails

    // Prepare data for the API
    const data = {
      userId: "",
      originalUrl: originalUrlRef.current?.value,
      shortCode: customShortlinkRef.current?.value,
      visitCount: 0,
      isSingleUse: isSingleUseRef.current?.checked,
      isUsed: false,
    };

    try {
      // Make the API call
      const response = await axios.post(
        "http://localhost:3000/short-links/",
        data,
        {
          withCredentials: true, // Handle credentials (cookies, etc.)
        }
      );

      if (response.status === 201) {
        // Update shortened link data
        setShortenedData({
          link:
            import.meta.env.VITE_SERVERURL +
            "/lnk/" +
            response.data.shortCode,
        });
        ToastSuccess("Success! The link has been shortened.");
      }
    } catch (error) {
      // Handle API errors
      ToastFail(error.response?.status || "An error occurred.");
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-left">
          Create New Short Link
        </h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Original URL Input */}
          <div>
            <label
              htmlFor="originalUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Original URL <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="url"
              id="originalUrl"
              name="originalUrl"
              placeholder="https://example.com"
              ref={originalUrlRef}
              className={`block w-full px-4 py-2 text-sm border ${
                errors.originalUrl
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } rounded-lg focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
            />
            {errors.originalUrl && (
              <span className="text-red-500 text-sm">{errors.originalUrl}</span>
            )}
          </div>

          {/* Custom Shortlink Input */}
          <div>
            <label
              htmlFor="customShortlink"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Custom Shortlink
            </label>
            <input
              type="text"
              id="customShortlink"
              name="customShortlink"
              placeholder="your-custom-link"
              ref={customShortlinkRef}
              className={`block w-full px-4 py-2 text-sm border ${
                errors.customShortlink
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } rounded-lg focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
            />
            {errors.customShortlink && (
              <span className="text-red-500 text-sm">
                {errors.customShortlink}
              </span>
            )}
          </div>

          {/* Single Use Checkbox */}
          <div className="flex items-center">
            <input
              id="isSingleUse"
              name="isSingleUse"
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

          {/* Submit and Reset Buttons */}
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

        {/* Conditionally Render ShortenedLink */}
        {shortenedData && (
          <div className="mt-8">
            <ShortenedLink
              link={shortenedData.link}
              qrCode={shortenedData.qrCode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortLinkCreateForm;