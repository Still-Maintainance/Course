import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" flex items-center justify-between px-6 py-3  gap-5 bg-white shadow-md">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src="/img/logo-udemy.svg" alt="Logo" className="h-8" />
          </Link>

         <Link 
         to="/explore"
         >
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            Explore
          </button></Link>

          

          <div className="relative w-[1100px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                aria-hidden="true"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="text-gray-500"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search for anything"
              className="w-full h-[45px] border border-gray-500 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            Udemy Business
          </button>
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            Teach on Udemy
          </button>
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            My Learning
          </button>

          <Link
            to="/cart"
            className="flex p-2 rounded focus:outline-none active:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <circle r="1" cy="21" cx="9"></circle>
              <circle r="1" cy="21" cx="20"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </Link>

          {/*Notification Button*/}

          <Link to="/notifications">
            <button className="p-2 rounded focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z" />
              </svg>
            </button>
          </Link>

          <div
            aria-hidden="true"
            className="user-profile-dropdown_dropdown-button-avatar__3RvHP ud-avatar ud-heading-sm flex items-center justify-center w-10 h-10 bg-black rounded-full text-white font-semibold"
          >
            AS
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
