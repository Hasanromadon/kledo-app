import React from 'react';

const InputWithLabel = ({ label, error, register, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium text-gray-700">{label}</label>
      <input
        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        {...register}
        {...props}
      />
       {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
};

export default InputWithLabel;
