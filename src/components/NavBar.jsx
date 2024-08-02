import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <>
      <nav className="border-b shadow-sm rounded-b bg-[#fff] py-2 px-4">
        <ul className="no-underline flex justify-between">
          <div className="">
            <li className="text-sm">Primary</li>
            <h1 className="no-underline font-bold text-primary">Dashboard</h1>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <span className="border-2 p-2 rounded-full">MB</span>
            <Link to={`/preview/${user?.userName}`}>Preview</Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
