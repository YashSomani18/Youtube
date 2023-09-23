import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-72 bg-white space-y-6">
      <ul className="space-y-2">
        <li>
          <Link className="text-blue-600 hover:text-blue-800 transition-colors duration-150" to="/">Home</Link>
        </li>
        <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Shorts</li>
        <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Videos</li>
        <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Live</li>
      </ul>
      <div>
        <h1 className="font-bold text-xl border-b border-gray-300 pb-2 mb-2">Subscription</h1>
        <ul className="space-y-2">
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Music</li>
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Sports</li>
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Gaming</li>
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Movies</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-xl border-b border-gray-300 pb-2 mb-2">Watch Later</h1>
        <ul className="space-y-2">
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Music</li>
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Sports</li>
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Gaming</li>
          <li className="hover:text-gray-600 cursor-pointer transition-colors duration-150">Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
