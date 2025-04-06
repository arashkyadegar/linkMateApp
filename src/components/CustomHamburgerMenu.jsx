import React, { useState } from "react";
import DarkModeToggle from "./darkmode/darkmodeToggle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/hooks/AuthProvider";
const CustomHamburgerMenu = () => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const doNavigate = (link) => {
    navigate(link);
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state to show/hide the menu
  };

  return (
    <nav className=" dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <div className="flex flex-row-reverse gap-1">
          <DarkModeToggle />
          {/* login toggle */}
          <button
            onClick={() => doNavigate("/dashboard")}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
          <button
            onClick={() => doNavigate("/login")}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button
            data-collapse-toggle="navbar-dropdown"
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <a href="#" className="flex items-center space-x-3">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LinkMate.ir
          </span>
        </a>
        <div className={isOpen ? "block w-full " : "hidden w-full "}>
          <ul className=" w-full flex flex-col text-left font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50  dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={() => doNavigate("/short-link")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Short-Link
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => doNavigate("/short-link-list")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Short-Link-List
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => doNavigate("password-protected-link")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Password-Protected-Link
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => doNavigate("/password-protected-link-list")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                password-protected-Link-List
              </a>
            </li>
            <li>
              <a
                onClick={() => doNavigate("auto-expire-link")}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Auto_Expire_Link
              </a>
            </li>
            <li>
              <a
                onClick={() => doNavigate("about")}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About-us
              </a>
            </li>
            <li>
              <a
                onClick={() => doNavigate("services")}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => doNavigate("contact")}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact-us
              </a>


            </li>
            <li>
              <a
                onClick={() => auth.logout()}
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Log-Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomHamburgerMenu;
