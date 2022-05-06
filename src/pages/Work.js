import React from "react";
import WorkCard from "../components/WorkCard";

import work1 from "../assets/projects/project-1.png";
import work2 from "../assets/projects/project-2.png";
import work3 from "../assets/projects/project-3.png";

const Work = () => {
  const images = [
    {
      name: "E-commerce",
      image: work1,
      link: "https://gstop-client.herokuapp.com/",
      github: "https://github.com/gtomsic/gstop_eCommerce",
    },
    {
      name: "Aworw | Social Network",
      image: work2,
      link: "https://awrow.com/login",
      github: "https://github.com/gtomsic/gstop_eCommerce",
    },
  ];
  const renderCard = images.map((item) => <WorkCard project={item} />);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#212529]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#023e7d] ">
            Work
          </p>
          <p className="my-6 text-2xl">// Check some of my recent work</p>
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
