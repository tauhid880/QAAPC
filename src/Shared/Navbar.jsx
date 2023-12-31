import React, { useState } from "react";

import { HashLink, HashLink as Link } from "react-router-hash-link";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = (
    <>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <HashLink
          smooth
          to="#top"
          aria-label="home"
          title="home"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Home
        </HashLink>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <Link
          smooth
          to="#about"
          aria-label="about"
          title="about"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          About
        </Link>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <Link
          smooth
          to="#rules"
          aria-label="registration"
          title="registration"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Contest Rule
        </Link>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <Link
          smooth
          to="#registration"
          aria-label="registration"
          title="registration"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Registration
        </Link>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <Link
          smooth
          to="#awards"
          aria-label="awards"
          title="awards"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Awards
        </Link>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <Link
          smooth
          to="#gallery"
          aria-label="gallery"
          title="gallery"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Gallery
        </Link>
      </li>
      <li className="hover:border-b-2 border-b-primary duration-100 normal-case">
        <Link
          smooth
          to="#contactUs"
          aria-label="contactUs"
          title="contactUs"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-tight text-primary transition-colors duration-200 hover:text-deep-purple-accent-400"
              : "font-medium tracking-tight text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          }
        >
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="py-3.5 mx-auto px-4 sm:px-10 lg:px-20 font-Poppins sticky top-0 bg-[#331D2C] opacity-95 text-white z-50 shadow-sm">
        <div className="relative flex items-center justify-between z-30">
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="" className="w-10 mr-2 rounded-full" />
            <span className="text-[#F2EE9D] font-normal text-[14px] lg:text-xl font-Poppins lg:tracking-tight lg:leading-tight ">
              Quazi Azher Ali
              <span className="font-normal font-Poppins text-[14px] lg:text-xl">
                {" "}
                Programming Contest
              </span>
            </span>
          </Link>
          <ul className=" items-center hidden space-x-5 lg:flex text-[16px] tracking-wide uppercase">
            {menu}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-[#e4d0d0] border rounded shadow-sm z-30">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="#top" className="inline-flex items-center">
                        <img
                          src={logo}
                          alt=""
                          className="w-10 mr-2 rounded-full"
                        />
                        <span className="text-secondary font-medium text-3xl tracking-widest leading-6">
                          QAAPC
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 text-black">{menu}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
