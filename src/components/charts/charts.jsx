import React, { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MonotoneChart from "./monotone";
import CityPieChart from "./pieChart";
const ChartsList = () => {

    const { id } = useParams();

    const [charts, setCharts] = useState([]);

    useEffect(() => {
        getAll();
    }, []);


    const getAll = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/visit-logs/${id}`,
                {
                    withCredentials: true,
                }
            );

            const visitData = response.data.map(log => ({
                date: new Date(log.createdAt).toLocaleDateString(), // Converts timestamp to readable format
                city: log.city,// You can customize this based on actual data needs
            }));

            setCharts(visitData);
        } catch (error) {
            // ToastFail(error.response.status);
            console.error("Error submitting data:", error);
        }
    };
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4" >
            <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-row justify-between">
                    <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-left">
                        Charts
                    </h4>
                    <CityPieChart visitLogs={charts} />
                </div>

            </div>
        </div>
    );
};

export default ChartsList;

