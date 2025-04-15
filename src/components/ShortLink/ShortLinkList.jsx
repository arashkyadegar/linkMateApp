import React, { useState } from "react";
import { useEffect, useRef } from "react";
import MyTable from "../Table/Table";
import axios from "axios";
import { PaginationComponent } from "../pagination/pagination";
import { useNavigate } from "react-router-dom";
import { ToastSuccess, ToastFail } from "../Toast/ToastAlert";
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
      let x = confirm("yeah?");
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
    navigate(`/short-link/${id}`);
  };
  const visitOne = async (id) => {
    window.open(`http://localhost:3000/lnk/${id}`, "_blank");
  }
  const deleteOne = async (id) => {
    if (confirm("delete?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/short-links/${id}`,
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          ToastSuccess();
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4" dir="rtl">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-left">
          Short Link List
        </h4>
        <div className="max-w-4xl">
          <MyTable
            list={linkList.result}
            deleteOne={deleteOne}
            editOne={editOne}
            visitOne={visitOne}
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
