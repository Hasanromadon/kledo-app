import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">The requested page could not be found.</p>
      </div>
    </div>
  );
};

export default NotFound;
