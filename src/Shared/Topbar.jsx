import React from "react";
import CountDown from "../components/CountDown";

const Topbar = () => {
  return (
    <div className="md:flex justify-center bg-white py-3  px-4 sm:px-10 lg:px-20  font-Poppins overflow-hidden my-10 lg:my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[50px] h-[50px] mr-1 text-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <p className="lg:text-[40px] text-base tracking-tighter lg:tracking-normal leading-tight font-bold text-secondary animate-pulse">
            Welcome to Quazi Azher Ali Programming Contest - 2023
          </p>
        </div>
        <span className="text-secondary font-bold">
          <CountDown></CountDown>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
