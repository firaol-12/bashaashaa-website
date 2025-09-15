import React, { useState, useEffect } from "react";
import img1 from "../assets/model/photo_2025-09-04_22-32-24.jpg";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const teamMembers = [
    { name: "Alice Johnson", role: "Photographer", img: img1 },
    { name: "Michael Smith", role: "Editor", img: img1 },
    { name: "Sophia Lee", role: "Creative Director", img: img1 },
  ];

  return (
    <div className="flex flex-col items-center gap-6 pb-10 mt-20">
      <h1
        className="text-[rgb(11,59,91)] text-3xl text-center h1"
        data-aos="fade-down"
      >
        Our Team
      </h1>

      <p
        className="text-xl text-white text-center px-6 md:px-20 lg:px-100 "
        data-aos="zoom-in"
      >
        Meet the talented individuals behind our work, dedicated to bringing
        creativity and passion to every project.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-6 w-full px-6 md:px-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="w-60 flex flex-col shadow-lg overflow-hidden group relative"
            onTouchStart={() => handleTouch(index)}
          >
            {/* Hover / tap zoom effect */}
            <div
              className={`transform transition-transform duration-500 ${
                activeIndex === index ? "scale-110" : "scale-100"
              } group-hover:scale-110`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Info box */}
            <div className="bg-[rgb(11,59,91)] text-white p-4 text-center">
              <h2 className="font-bold text-lg">{member.name}</h2>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
