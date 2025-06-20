import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">fotovoid</h2>
          <p className="text-sm text-gray-400">
            Your source for free, AI-generated images. Use without limits — for personal or commercial projects.
          </p>
        </div>

        {/* Quick Links */}
        <div></div>


        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} fotovoid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
