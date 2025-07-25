import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full p-6 mb-6 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">The requested resource was not found.</p>
      <Link href="/" className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200">Go Home</Link>
    </div>
  );
};

export default NotFound;