"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log("aiman",pathname);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#mobileMenu") && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  // console.log(router);
  

  return (
    <header className="flex items-center justify-between px-4 py-4 md:justify-around md:px-6 lg:px-10 border-b border-gray-300 bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="https://aerotech-uk.co.uk/wp-content/uploads/2022/11/AeroTechLogoDefault-1.png"
          alt="AeroTech Logo"
          className="w-32 h-auto"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link
          href="/"
          className={`text-lg font-semibold ${pathname === "/" ? "text-red-600" : ""} text-gray-800 hover:text-red-600 relative group`}
        >
          HOME
          <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
          ${pathname === "/" ? "scale-x-100" : 'scale-x-0'}`}></span>
        </Link>
        <Link
          href="/contact"
          className={`text-lg font-semibold ${pathname === "/contact" ? "text-red-600" : ""} text-gray-800 hover:text-red-600 relative group`}
        >
          CONTACT
          <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left
          ${pathname === "/contact" ? "scale-x-100" : 'scale-x-0'}`}></span>
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown with Search Input */}
      {menuOpen && (
        <div
          id="mobileMenu"
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-300 p-4 space-y-4 z-50"
        >
          <Link
            href="/"
            className="block text-lg font-semibold text-gray-800 hover:text-red-600 relative group"
          >
            HOME
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            href="/contact"
            className="block text-lg font-semibold text-gray-800 hover:text-red-600 relative group"
          >
            CONTACT
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          {/* Search Input */}
          <div className="mt-2">
            <form className="flex items-center border rounded-lg px-3 py-1">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm-2-8h4m-2 0v4m0-4v-4"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full outline-none text-gray-700"
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
