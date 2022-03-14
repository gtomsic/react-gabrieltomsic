import React from 'react';
import WorkCard from '../components/WorkCard';

import Working from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  const images = [Working, realEstate, Working, realEstate, Working];
  const renderCard = images.map((item) => <WorkCard image={item} />);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#212529]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#023e7d] ">
            Work
          </p>
          <p className="my-6 text-2xl">// Check our some of my recent work</p>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4">
          {renderCard}
        </div>
      </div>
    </div>
  );
};

export default Work;
