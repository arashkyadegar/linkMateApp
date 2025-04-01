import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const PersianDateTimePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null); // Initialize with null for compatibility

  const handleChange = (date) => {
    setSelectedDateTime(date); // Updates the state with the selected date
  };

  return (
    <div className="centered-container">
      <DatePicker
        selected={selectedDateTime} // Passes the state
        onChange={handleChange} 
        className="flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        dateFormat="yyyy/MM/dd HH:mm" // Adds a date-time format for Persian-style selection
        showTimeSelect // Allows time selection
        timeIntervals={15} // Sets time intervals (e.g., 15 minutes)
      />
    </div>
  );
};

export default PersianDateTimePicker;