import React from 'react';

const WorkCard = ({ image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#212529] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider">
          ReactJS Application
        </span>
        <div className="pt-8 text-center">
          <a href="/">
            <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-600 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href="/">
            <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-600 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
