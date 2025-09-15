import React, { useState, useEffect } from "react";
import img1 from "../assets/IMG_2864.JPG";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const teamMembers = [
    // { name: "Alice Johnson", role: "Photographer", img: img1 },
    // { name: "Michael Smith", role: "Editor", img: img1 },
    { name: "Abduselam Worku", role: "Creative Director", img: img1 },
  ];
 
  return (
    <div className="flex flex-col items-center gap-6 pb-10 mt-20">
      <h1
        className="text-[rgb(11,59,91)] text-3xl text-center h1 border-3 border-[rgb(11,59,91)] px-4 "
        data-aos="fade-down"
      >
        About Us
      </h1>

      <div className="flex flex-col px-10 justify-center items-center gap-15 md:w-2/4 md:flex-row md:px-0">
        <div className="">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="w-50 h-75 flex flex-col shadow-lg overflow-hidden group relative"
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
                  className="w-full h-55 object-cover"
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

        <div className="flex gap-6 flex-col md:w-200">
        
          <p className="text-justify text-xl text-white" data-aos="zoom-in">
            At Bashaashaa, we are passionate about capturing life's 
            precious moments and transforming them into timeless 
            masterpieces with creative photography and professional 
            video production.
          </p>

          <p className="text-justify text-xl text-white" data-aos="zoom-in">
            Led by Abduselam Worku, winner of the 2024 Visit Oromia 
            Best Cultural Photographer of the Year award, our team 
            combines passion, skill, and innovation to deliver 
            high-quality visuals that tell your story in the most beautiful way.
          </p>
        </div>
      </div>
      
    </div>
  );
}
