import React from "react";

const WorkCard = ({ project }) => {
  return (
    <div
      style={{ backgroundImage: `url(${project.image})` }}
      className="shadow-lg shadow-[#212529] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center">
        <span className="text-2xl font-bold text-white tracking-wider">
          {project.name}
        </span>
        <div className="pt-8 text-center flex justify-center">
          <a href="/">
            <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-600 font-bold text-lg rounded-md mr-2">
              View
            </button>
          </a>
          <a href="/">
            <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-600 font-bold text-lg rounded-md">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
