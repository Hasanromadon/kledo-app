import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import profilePicture from "../assets/profile-picture.png";
import { getFirstPathSegment } from "../utils/getFirstPathSegment";

const routes = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Login",
    path: "/auth",
  },
];

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const pathName = getFirstPathSegment(location.pathname);

  return (
    <header className="bg-primary text-white fixed w-full h-11">
      <div className="h-full mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold ml-5">KLEDO TEST</h1>
        <nav className="h-full flex items-center">
          {user ? (
            <div className="px-4 flex items-center">
              <img
                className="mr-2"
                src={profilePicture}
                width={30}
                height={30}
                alt=""
              />{" "}
              <span>{user.name}</span>
            </div>
          ) : (
            routes.map((route) => (
              <Link
                to={route.path}
                key={route.name}
                className={`${pathName === route.path ? 'bg-black ' : ''}hover:bg-black h-full px-4 flex items-center`}
              >
                {route.name}
              </Link>
            ))
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
