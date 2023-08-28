import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl sm:text-2xl mr-4">Dashboard</h3>
        </div>
      </div>
      <div className="flex flex-col mx-auto justify-center items-center bg-gray-200 sm:w-10/12 h-60 sm:h-96 rounded-3xl">
        <p className="text-lg sm:text-3xl font-bold text-gray-600 mb-2">Selamat Datang</p>
        <p className="sm:text-2xl font-bold text-gray-500">{auth.user?.name}</p>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
