import React from "react";
import { HomeIcon, TruckIcon,ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { getFirstPathSegment } from "../utils/getFirstPathSegment";

const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: HomeIcon,
  },
  {
    label: "Shipping Comps",
    path: "/shippings",
    icon: TruckIcon,
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = getFirstPathSegment(location.pathname);

  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <div className="bg-[#E0E0E0] text-white w-1/6 h-full min-h-screen flex flex-col justify-between">
      <div className="mt-12 space-y-2">
        {routes.map((route, i) => (
          <Link
            key={route.label + i}
            className={`flex justify-center sm:justify-start items-center border-b border-b-gray-300 px-0 sm:px-4 py-2 hover:text-primary-hover ${
              pathName === route.path ? "text-primary" : ""
            }`}
            to={route.path}
          >
            <route.icon className="mr-0 sm:mr-2" width={20} height={20} /> <span className="hidden sm:inline">{route.label}</span>
          </Link>
        ))}
      </div>
      <div onClick={handleLogout} className="flex items-center justify-center font-semibold bg-primary py-4 cursor-pointer ">
      <ArrowRightOnRectangleIcon width={20} height={20}/> <button className="hidden sm:block text-white ml-3">Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
