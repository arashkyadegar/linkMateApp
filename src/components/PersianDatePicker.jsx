import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const PersianDateTimePicker = ({ selectedDate, onDateChange }) => {
  const handleDateSelect = (date) => {
    onDateChange(date); // Call the parent's callback
  };

  return (
    <div className="centered-container">
      <DatePicker
        selected={selectedDate} // This sets the selected date in the DatePicker
        onChange={(date) => handleDateSelect(date)}
        className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        dateFormat="yyyy/MM/dd HH:mm"
        showTimeSelect
        timeIntervals={15}
      />
    </div>
  );
};
export default PersianDateTimePicker;;