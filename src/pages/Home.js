import React from 'react';
import { HiArrowNarrowRight } from 'react-icons';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#212529]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#023e7d] text-2xl">Hi, my name is</p>
        <h1 className="text-white   text-4xl md:text-6xl my-2">Gabriel Tomsic</h1>
        <h2 className="text-gray-500  text-4xl md:text-6xl max-w-[700px]">
          I'm a full Stack Developer.
        </h2>
        <p className="text-gray-400 text-2xl text-justify mt-5">
          Two (2) years plus of self experience using cutting edge frameworks
          ReactJS, HTML/CSS, SASS, NodeJS, Javascript, Github and more...Tech is
          constantly evolving due to technological advances and the strategic
          development of new softwares and languages from various organizations.
          As a software engineer, I thrive in this fast-paced environment.
        </p>
        <div>
          {/* In order for arrow down to rotate we need to group to target hover */}
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-7 flex items-center hover:bg-[#023e7d] hover:border-[#023e7d]duration-300">
              View My Work
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
