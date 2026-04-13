import React from 'react';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-white">
      <div className="max-w-xl text-center">
        <div className="flex justify-center mb-10">
  <svg
    className="w-full h-auto max-w-sm"
    viewBox="0 0 500 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="250" cy="150" r="140" fill="#2E6B53" opacity="0.2" />

    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="sans-serif"
      fontWeight="800"
      fontSize="160"
      fill="#064E3B"
      className="drop-shadow-lg"
    >
      404
    </text>
  </svg>
</div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Woops!
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#064E3B]">
         This page could not be found.
        </h2>

        <p className="text-lg text-[#064E3B] mb-10">
        Not sure how you got here? Don’t worry, the path you followed doesn’t 
        exist on our map. It might be a typo, or the page may have been removed.
        </p>

       <div className="flex justify-center">
        <Link
        to="/"
        className="flex items-center gap-2 px-8 py-3 bg-[#34D399] text-[#064E3B] 
        font-semibold rounded-full shadow-lg hover:bg-[#6EE7B7] transition duration-300 transform hover:scale-105"
        >
        <IoHome className="text-lg" />
        <span>Go Homepage</span>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
