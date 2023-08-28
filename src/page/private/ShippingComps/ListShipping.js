import React, { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import SearchInput from "../../../components/SearchInput";
import { useQuery } from "react-query";
import { getShippingComps } from "../../../api/shipping-comps";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";

const ListShipping = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["shippingComps", searchQuery], () =>
    getShippingComps(searchQuery)
  );

  const filteredData = data?.data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <div className="flex items-center justify-between mb-4 sm:mb-0">
          <h3 className="font-bold text-lg sm:text-2xl mr-4">Shipping Comps</h3>
          <PlusCircleIcon
            onClick={() => navigate("/shippings/add")}
            className="text-blue-500 cursor-pointer hover:text-blue-600 h-6 w-6 sm:w-8 sm:h-8"
            width={30}
            height={30}
          />
        </div>
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center mx-auto mt-8">
          <Spinner />
        </div>
      ) : (
        <div>
          {filteredData && filteredData.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
             Tidak ada yang ditampilkan
            </div>
          ) : (
            <div>
              <div className="bg-gray-100 rounded-md p-3">
                <span className="font-bold text-lg">Nama</span>
              </div>
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    navigate(`/shippings/edit/${item.id}`, { state: item })
                  }
                  className="p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <span className="block py-1 text-gray-500 font-semibold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
};

export default ListShipping;
