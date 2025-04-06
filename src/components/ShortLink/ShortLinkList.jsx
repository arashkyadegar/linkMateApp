import React, { useState } from "react";
import { useEffect, useRef } from "react";
import MyTable from "../Table/Table";
import axios from "axios";
import { PaginationComponent } from "../pagination/pagination";
import { useNavigate } from "react-router-dom";
const ShortLinkList = () => {
  const navigate = useNavigate();
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/short-links/findbyuserid",
        {
          withCredentials: true,
        }
      );
      setLinkList(response.data);
    } catch (error) {
      // ToastFail(error.response.status);
      console.error("Error submitting data:", error);
    }
  };

  const nextpage = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/short-links/findbyuserid?page=${page}`,
        {
          withCredentials: true,
        }
      );
      setLinkList(response.data);
    } catch (error) {
      // ToastFail(error.response.status);
      console.error("Error submitting data:", error);
    }
  };

  const editOne = async (id) => {
    console.log(id)
    navigate(`/short-link/${id}`);
  };

  const deleteOne = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/short-links/${id}`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
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
          <MyTable
            list={linkList.result}
            deleteOne={deleteOne}
            editOne={editOne}
          />
          <div className="flex flex-row-reverse gap-2 justify-center mt-6">
            <PaginationComponent
              total={linkList.totalCount}
              page={linkList.page}
              onClick={nextpage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortLinkList;
