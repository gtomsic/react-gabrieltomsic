import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#212529] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#023e7d]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full x-4 grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl md:text-4xl  font-bold pl">
            <p>Hi. I'm Gab, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the live of those around me. I specialize in createing software
              for clients ranging from individuals and small-business all the
              way to large enterprise corporation. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
