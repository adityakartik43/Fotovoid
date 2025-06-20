import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/apis">APIs</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );


  return (
    <>
      {/* Navbar Container */}
      <div className="navbar bg-base-100 shadow-sm shadow-gray-900 px-4 md:px-10 font-semibold flex justify-between items-center z-20 sticky top-0">

        {/* Left - Logo + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Hamburger (mobile only) */}
          <button className="lg:hidden" onClick={() => setIsOpen(true)}>
            <FaBars className="text-2xl" />
          </button>

          {/* Logo */}
          <a className="btn btn-ghost text-xl">fotovoid</a>
          </div>
        

        {/* Desktop Navigation + Login Button */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal px-1 gap-4">{NavItems}</ul>
          <Link to='/login' className="btn bg-blue-700 hover:bg-pink-700 text-white transition-transform duration-300 hover:scale-110">
            LOGIN
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">fotovoid</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        <ul className="p-4 space-y-4 text-white font" onClick={()=> setIsOpen(false)}>
          {NavItems}
          <li>
            <Link to='/login' className="btn bg-blue-700 hover:bg-pink-700 text-white w-full mt-4">LOGIN</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
