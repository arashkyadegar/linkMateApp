// import React, { useState } from "react";
// import PersianDatePicker from "../PersianDatePicker";
// import axios from "axios";
// import { ToastSuccess, ToastFail, ToastConfilict } from "../Toast/ToastAlert";
// import ShortenedPasswordLink from "./shortendSecureLink";
// const SecureLinkCreateForm = () => {
//   const [formData, setFormData] = useState({
//     originalUrl: "",
//     shortCode: "",
//     password: "",
//     confirmPassword: "",
//     isSingleUse: false,
//     expirationDate: new Date(),
//     createdAt: null, // Set by PersianDatePicker
//   });
//   const [errors, setErrors] = useState({}); // Tracks validation errors for each field
//   const [shortenedData, setShortenedData] = useState(null); // Manage the visibility of ShortenedLink

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };
//   const handleDateChange = (selectedDate) => {
//     setFormData({ ...formData, expirationDate: selectedDate });
//   };

//   const validateFields = () => {
//     const errors = {};

//     setErrors(errors);
//     return Object.keys(errors).length === 0; // Return true if no errors
//   };
//   const handleReset = () => {
//     setFormData({
//       originalUrl: "",
//       shortCode: "",
//       password: "",
//       isSingleUse: false,
//       confirmPassword: "",
//       expirationDate: "",
//       createdAt: null, // Set by PersianDatePicker
//     });
//     setErrors({});
//     setShortenedData(null);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.expirationDate == "") {
//     }

//     if (validateFields()) {
//       const data = {
//         userId: "",
//         originalUrl: formData.originalUrl,
//         shortCode: formData.shortCode,
//         visitCount: 0,
//         passwordHash: formData.password,
//         isSingleUse: formData.isSingleUse,
//         expirationDate: formData.expirationDate
//           ? new Date(formData.expirationDate).toISOString()
//           : null,
//         isUsed: false,
//       };
//       try {
//         const response = await axios
//           .post("http://localhost:3000/password-links/", data, {
//             withCredentials: true,
//           })
//           .catch((error) => {
//             switch (error.status) {
//               case 409: {
//                 ToastConfilict(error.message);
//                 break;
//               }
//               case 400: {
//                 ToastFail(error.message);
//                 break;
//               }
//             }
//           });

//         setShortenedData({
//           link:
//             import.meta.env.VITE_SERVERURL +
//             "/slnk/" +
//             response.data.shortCode,
//         });
//         ToastSuccess("Success! The link has been created.");

//         setErrors({});
//       } catch (error) {
//         // if (error.response) {
//         //   ToastFail(error.response.message); // Access response status safely
//         //   console.error("Error submitting data:", error.response);
//         // } else {
//         //   ToastFail("An unexpected error occurred"); // Handle undefined response
//         //   console.error("Error:", error.message);
//         // }
//       }
//     }
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

//           {/* Password Input */}
//           <div className="flex flex-col gap-4">
//             <label
//               htmlFor="password"
//               className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Password <span className="text-red-600 text-lg">*</span>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//               required
//               className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//             />
//             {errors.password && (
//               <p className="text-sm text-red-500">{errors.password}</p>
//             )}
//           </div>

//           {/* Confirm Password Input */}
//           <div className="flex flex-col gap-4">
//             <label
//               htmlFor="confirmPassword"
//               className="sm:w-1/4 text-sm font-medium text-gray-700 dark:text-gray-300"
//             >
//               Confirm Password <span className="text-red-600 text-lg">*</span>
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Re-enter password"
//               required
//               className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//             />
//             {errors.confirmPassword && (
//               <p className="text-sm text-red-500">{errors.confirmPassword}</p>
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
//             <ShortenedPasswordLink
//               link={shortenedData.link}
//               qrCode={shortenedData.qrCode}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SecureLinkCreateForm;


import React, { useRef, useState } from "react";
import axios from "axios";
import PersianDatePicker from "../PersianDatePicker";
import ShortenedPasswordLink from "./shortendSecureLink";
import { ToastSuccess, ToastFail, ToastConfilict } from "../Toast/ToastAlert";

const SecureLinkCreateForm = () => {
  const originalUrlRef = useRef(null);
  const customShortlinkRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const isSingleUseRef = useRef(null);
  const expirationDateRef = useRef(null);
  const [shortenedData, setShortenedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleReset = () => {
    if (originalUrlRef.current) originalUrlRef.current.value = "";
    if (customShortlinkRef.current) customShortlinkRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (confirmPasswordRef.current) confirmPasswordRef.current.value = "";
    if (isSingleUseRef.current) isSingleUseRef.current.checked = false;
    if (expirationDateRef.current) expirationDateRef.current.value = "";
    setErrors({});
    setShortenedData(null);
  };

  const validateInputs = () => {
    const validationErrors = {};
    const originalUrl = originalUrlRef.current?.value;
    const customShortlink = customShortlinkRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!originalUrl) {
      validationErrors.originalUrl = "Original URL is required.";
    } else {
      try {
        new URL(originalUrl);
      } catch {
        validationErrors.originalUrl = "Please enter a valid URL.";
      }
    }

    if (customShortlink) {
      if (!/^[a-zA-Z0-9-_]+$/.test(customShortlink)) {
        validationErrors.customShortlink =
          "Custom shortlink can only contain letters, numbers, '-' and '_'.";
      } else if (customShortlink.length > 30) {
        validationErrors.customShortlink =
          "Custom shortlink cannot exceed 30 characters.";
      }
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const data = {
      userId: "",
      originalUrl: originalUrlRef.current?.value,
      shortCode: customShortlinkRef.current?.value,
      passwordHash: passwordRef.current?.value,
      isSingleUse: isSingleUseRef.current?.checked,
      expirationDate: expirationDateRef.current?.value
        ? new Date(expirationDateRef.current?.value).toISOString()
        : null,
      isUsed: false,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/password-links/",
        data,
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setShortenedData({
          link:
            import.meta.env.VITE_SERVERURL +
            "/slnk/" +
            response.data.shortCode,
        });
        ToastSuccess("Success! The secure link has been created.");
      }
    } catch (error) {
      const status = error.response?.status;
      if (status === 409) ToastConfilict(error.response?.data?.message);
      else ToastFail("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
          Create New Secure Link
        </h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="originalUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Original URL <span className="text-red-600">*</span>
            </label>
            <input
              type="url"
              id="originalUrl"
              name="originalUrl"
              ref={originalUrlRef}
              placeholder="https://example.com"
              className={`block w-full px-4 py-2 text-sm border ${
                errors.originalUrl
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } rounded-lg focus:ring-blue-500`}
            />
            {errors.originalUrl && (
              <span className="text-red-500 text-sm">{errors.originalUrl}</span>
            )}
          </div>

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
              ref={customShortlinkRef}
              placeholder="your-custom-link"
              className={`block w-full px-4 py-2 text-sm border ${
                errors.customShortlink
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } rounded-lg focus:ring-blue-500`}
            />
            {errors.customShortlink && (
              <span className="text-red-500 text-sm">
                {errors.customShortlink}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              placeholder="Enter password"
              className={`block w-full px-4 py-2 text-sm border ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } rounded-lg focus:ring-blue-500`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              ref={confirmPasswordRef}
              placeholder="Re-enter password"
              className={`block w-full px-4 py-2 text-sm border ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } rounded-lg focus:ring-blue-500`}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="expirationDate"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Expiration Date
            </label>
            <PersianDatePicker ref={expirationDateRef} />
          </div>

          <div className="flex items-center">
            <input
              id="isSingleUse"
              name="isSingleUse"
              type="checkbox"
              ref={isSingleUseRef}
              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-blue-300"
            />
            <label
              htmlFor="isSingleUse"
              className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Single Use
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 text-white bg-red-600 rounded-lg"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-600 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>

        {shortenedData && (
          <div className="mt-8">
            <ShortenedPasswordLink
              link={shortenedData.link}
              qrCode={shortenedData.qrCode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SecureLinkCreateForm;