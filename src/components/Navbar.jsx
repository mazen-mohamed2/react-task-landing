import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const navData = [
  { title: "Home", path: "/" },
  {
    title: "Landings",
    path: "/",
    dropdown: [
      { title: "page1", path: "/page1" },
      { title: "page2", path: "/page2" },
      { title: "page3", path: "/page3" },
    ],
  },
  {
    title: "Pages",
    path: "/",
    dropdown: [
      { title: "page4", path: "/page4" },
      { title: "page5", path: "/page5" },
      { title: "page6", path: "/page6" },
    ],
  },
  { title: "Docs", path: "/" },
  { title: "Help", path: "/" },
  { title: "Get it now", path: "/" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const menuRef = useRef();

  const handleDropdown = (title) => {
    setDropdown(dropdown === title ? null : title);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      // Additional logic to close dropdowns
      if (dropdown && menuRef.current) {
        const dropdownElements = menuRef.current.querySelectorAll('.dropdown-element');
        let isOutsideDropdown = true;
        dropdownElements.forEach(element => {
          if (element.contains(event.target)) {
            isOutsideDropdown = false;
          }
        });
        if (isOutsideDropdown) {
          setDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [dropdown]);


  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <img
        src={require("../utils/images/Logo.png")}
        className="w-[90px] h-[28px]"
        alt="logo"
      />

      <button
        className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        onClick={toggleMenu}
      >
        {!isOpen && <FiMenu />}
      </button>

      {/* Drawer for small screens */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center lg:hidden`}
      >
        <ul className="flex flex-col items-center  justify-center gap-7">
          <button
            className="text-xl absolute top-4 right-3  leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen && <IoMdClose />}
          </button>
          {navData.map((item, idx) => (
            <li key={idx} className="relative">
              <button
                className={`capitalize font-medium flex items-center ${item.title === "Get it now"
                    ? "text-blue-600 border border-blue-600 px-4 py-2 rounded-md"
                    : "text-gray-600 hover:text-gray-800"} `}
                onClick={() =>
                  item.dropdown ? handleDropdown(item.title) : null
                }
              >
                {item.title}
                {item.dropdown &&
                  (dropdown === item.title ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  ))}
              </button>

              {item.dropdown && dropdown === item.title && (
                <ul className="absolute left-0 mt-1 py-2 w-40 bg-white shadow-lg rounded-lg z-10">
                  {item.dropdown.map((e, idx) => (
                    <li key={idx} className="text-gray-600 hover:text-gray-800 px-4 py-2 hover:bg-gray-100">
                      {e.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Links for large screens */}
      <div className="hidden lg:flex relative justify-center flex-grow items-center">
        <ul className="flex flex-row items-center justify-center list-none ml-auto gap-7">
          {navData.map((item, idx) => (
            <li key={idx} className="relative">
              <button
                className={`capitalize font-medium flex items-center ${
                  item.title === "Get it now"
                    ? "text-blue-600 border border-blue-600 px-4 py-2 rounded-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() =>
                  item.dropdown ? handleDropdown(item.title) : null
                }
              >
                {item.title}
                {item.dropdown &&
                  (dropdown === item.title ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  ))}
              </button>

              {item.dropdown && dropdown === item.title && (
                <ul className="absolute left-0 mt-1 py-2 w-40 bg-white shadow-lg rounded-lg z-10">
                  {item.dropdown.map((dropdownItem, dropdownIdx) => (
                    <li
                      key={dropdownIdx}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      {dropdownItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
