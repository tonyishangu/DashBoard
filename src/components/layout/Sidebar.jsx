import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaUsers, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${open ? "w-64" : "w-20"} bg-gray-800 text-white transition-all`}
    >
      <button className="p-4" onClick={() => setOpen(!open)}>
        {" "}
        ☰{" "}
      </button>
      <ul className="mt-5 space-y-4">
        <li>
        <Link to="/" className="flex items-center gap-3 px-4">
          <FaChartBar /> {open && "Dashboard"}
        </Link>
        </li>

        <Link to="/users" className="flex items-center gap-3 px-4">
          <FaUsers /> {open && "Users"}
        </Link>

        <Link to="/settings" className="flex items-center gap-3 px-4">
          <FaCog /> {open && "Settings"}
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
