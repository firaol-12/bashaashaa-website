import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./survices.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

const widding= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761453545/w8_dglet0.jpg";
const graduation= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460074/g6_nsxx0s.jpg";
const kids= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761456587/photo_2025-08-31_22-27-36_hnent9.jpg";
const family= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761456614/photo_2025-08-31_22-28-21_twd2dy.jpg";
const events= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761459783/e2-min_hkaqba.jpg";
const models= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761454149/cover_jhki0l.jpg"
const birthday= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761457314/photo_2025-09-04_23-06-10_bjt04e.jpg"
const travel= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761455341/cover-min_yyu8xc.jpg"
const landscape= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761457690/cover_myk3bv.jpg"
const videography= "https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460495/v_cover_o0ennc.jpg"

export default function Survices() {
  const [activeCard, setActiveCard] = useState(null);

  

  const handleCardClick = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="flex flex-col my-5 justify-center items-center mb-10">
      <h2
        className="text-3xl my-2 text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4 2xl:text-5xl"
        data-aos="fade-down"
        data-aos-once="true"
      >
        Services
      </h2>
      <div className="px-6 md:px-20 lg:px-100  flex justify-center items-center my-3">
        <p className="text-xl text-[rgb(255,255,255)] text-center text-bold 2xl:text-2xl  2xl:py-5" data-aos="zoom-in" data-aos-once="true">
          We provide professional videography and photography 
          services to capture your moments with clarity, creativity, and style.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 p-6 md:px-10 lg:px-30">
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(10)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 10
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={videography} alt="Wedding" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Videography</h3>
                </div>
                
                 <a
                    href="https://www.youtube.com/@bashaashaa-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                      ${activeCard === 10 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                    >
                      View More
                    </button>
                  </a>
              </div>
            </div>
          </div>
        </div>


        {/* Wedding (AOS on STATIC WRAPPER) */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(0)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 0
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={widding} alt="Wedding" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Wedding</h3>
                </div>
                
                <Link to={"/wedding"}>
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 0 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Maternity */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(1)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 1
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={graduation} alt="Maternity" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Graduation</h3>
                </div>
                <Link to="/Graduation">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 1 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Kids */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(2)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 2
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={kids} alt="Kids" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Kids</h3>
                </div>
                <Link to="/Kids">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 2 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>


        {/* Family */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(3)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 3
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={family} alt="Family" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3  className="lar text-xl">Family</h3>
                </div>
                <Link to="/Family">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 3 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(4)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 4
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={events} alt="Events" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Events</h3>
                </div>
                <Link to="/Events">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 4 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(5)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 5
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={models} alt="Events" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3  className="lar text-xl">Models</h3>
                </div>
                <Link to="/Models">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 5 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Events */}
        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(6)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 6
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={birthday} alt="Events" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Birthday</h3>
                </div>
                <Link to="/birthday">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 6 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(7)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 7
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={travel} alt="Events" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3 className="lar text-xl">Travel</h3>
                </div>
                <Link to="/travel">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 7 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-once="true">
          <div
            onClick={() => handleCardClick(8)}
            className={`w-45 h-65 border mb-5 transform transition-transform duration-300 group ${
              activeCard === 8
                ? "border-[rgb(11,59,91)] -translate-y-5 border-4"
                : "hover:-translate-y-5 hover:border-4 hover:border-[rgb(11,59,91)]"
            }`}
          >
            <img className="w-full h-full object-cover" src={landscape} alt="Events" />
            <div className="relative ml-5">
              <div className="absolute -top-12 -right-7 w-38 h-18 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center transition-all duration-300">
                <div className="flex flex-col items-center">
                  <h3  className="lar text-xl">Landscape</h3>
                </div>
                <Link to="/landscape">
                  <button
                    className={`px-3 py-1 cursor-pointer border-[rgb(11,59,91)] border-2 text-[rgb(11,59,91)] text-sm transition-all duration-300 my-1
                    ${activeCard === 8 ? "bg-[rgb(11,59,91)] text-white" : "group-hover:bg-[rgb(11,59,91)] group-hover:text-white"}`}
                  >
                    View More
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>              
      </div>
    </section>
  );
}
