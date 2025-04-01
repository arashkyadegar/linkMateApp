import React, { useState } from "react";
import { DateTimeInput } from "react-hichestan-datetimepicker";

const PersianDateTimePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  return (
    <div className="centered-container">
      <DateTimeInput
        className="responsive-picker flex-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        value={selectedDateTime}
        name="persianDateTime"
        onChange={handleChange}
      />
    </div>
  );
};

export default PersianDateTimePicker;
