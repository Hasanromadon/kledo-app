import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex bg-[#BDBDBD]">
        <Sidebar />
        <main className="mt-11 flex-1 p-4">
          <div className="bg-white h-full rounded-md p-6">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
