import React, { useState } from "react";
import { useEffect, useRef } from "react";
import MyTable from "../Table/Table";
import axios from "axios";
const ShortLinkList = () => {
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:3000/short-links/findbyuserid", {
        withCredentials: true,
      });
      setLinkList(response.data)
      console.log(response.data)
    } catch (error) {
      // ToastFail(error.response.status);
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4" dir="rtl">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-right">
          Short Link List
        </h4>
        <div className="max-w-4xl">
          <MyTable list={linkList.result}  />
        </div>
      </div>
    </div>
  );
};
export default ShortLinkList;
