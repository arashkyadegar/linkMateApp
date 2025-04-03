import React from "react";

const TableRTL = ({ list = [] }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg" dir="rtl">
      <div className="flex flex-col justify-end  my-4">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                originalUrl
              </th>
              <th scope="col" className="px-6 py-3">
                shortCode
              </th>
              <th scope="col" className="px-6 py-3">
                visitCount
              </th>
              <th scope="col" className="px-6 py-3">
                ISSingleuse
              </th>
              <th scope="col" className="px-6 py-3">
                ISused
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.originalUrl}{" "}
                </td>
                <td className="px-6 py-4">{item.shortCode}</td>
                <td className="px-6 py-4">{item.visitCount}</td>
                <td className="px-6 py-4">{item.isSingleUse ? "Yes" : "Not"}</td>
                <td className="px-6 py-4">{item.isUsed ? "Used" : "Not"}</td>
                <td className="px-6 py-4 flex gap-4">
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button className="font-medium text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-6 space-x-2">
          {/* <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled
          >
            Previous
          </button> */}



          {/* <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TableRTL;
