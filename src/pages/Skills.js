import React from 'react';

import Node from '../assets/node.png';
import Javascript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import Github from '../assets/github.png';
import Css from '../assets/css.png';
import Html from '../assets/html.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#212529] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#023e7d]  ">
            Skills
          </p>
          <p className="my-4 text-2xl">// Frameworks I used to worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#212529] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={ReactJS} alt="Javascript Icon" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="shadow-md shadow-[#212529] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Node} alt="Javascript Icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#212529] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Github} alt="Javascript Icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#212529] hover:scale-110 duration-500 cursor-pointer">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="Javascript Icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#212529] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Html} alt="Javascript Icon" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#212529] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Css} alt="Javascript Icon" />
            <p className="my-4">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
