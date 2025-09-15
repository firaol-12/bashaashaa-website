import React, { useState ,useEffect} from "react";
import AOS from "aos";

import img2 from "../assets/travel/cover.JPG"
import img1 from "../assets/travel/IMG_0463.JPG"
import img3 from "../assets/travel/IMG_0478.JPG"
import img4 from "../assets/travel/IMG_0479.JPG"
import img5 from "../assets/travel/IMG_0480.JPG"
import img6 from "../assets/travel/IMG_0495.JPG"
import img7 from "../assets/travel/IMG_0526.JPG"
import img8 from "../assets/travel/IMG_1525.JPG"
import img9 from "../assets/travel/IMG_2810.JPG"
import img10 from "../assets/travel/IMG_2814.JPG"
import img11 from "../assets/travel/IMG_2816.JPG"
import img12 from "../assets/travel/IMG_2817.JPG"
import img13 from "../assets/travel/IMG_2818.JPG"
import img14 from "../assets/travel/IMG_2819.JPG"
import img15 from "../assets/travel/IMG_2820.JPG"
import img16 from "../assets/travel/IMG_2822.JPG"
import img17 from "../assets/travel/IMG_2824.JPG"
import img18 from "../assets/travel/IMG_2825.JPG"
import img19 from "../assets/travel/IMG_2826.JPG"
import img20 from "../assets/travel/IMG_2830.JPG"
import img21 from "../assets/travel/IMG_2832.JPG"
import img22 from "../assets/travel/IMG_2833.JPG"
import img23 from "../assets/travel/IMG_2838.JPG"
import img24 from "../assets/travel/IMG_2840.JPG"
import img25 from "../assets/travel/IMG_2843.JPG"
import img26 from "../assets/travel/IMG_2844.JPG"
import img27 from "../assets/travel/IMG_2852.JPG"
import img28 from "../assets/travel/IMG_2854.JPG"
import img29 from "../assets/travel/IMG_7400.JPG"
import img30 from "../assets/travel/IMG_8667.JPG"
import img31 from "../assets/travel/photo_2025-09-06_12-05-13.jpg"
import img32 from "../assets/travel/photo_2025-09-06_12-07-21.jpg"
import img33 from "../assets/travel/photo_2025-09-06_12-07-13.jpg"
import img34 from "../assets/travel/photo_2025-09-06_12-06-56.jpg"
import img35 from "../assets/travel/photo_2025-09-06_12-06-48.jpg"
import img36 from "../assets/travel/photo_2025-09-06_12-06-42.jpg"
import img37 from "../assets/travel/photo_2025-09-06_12-06-31.jpg"
import img38 from "../assets/travel/photo_2025-09-06_12-06-20.jpg"
import img39 from "../assets/travel/photo_2025-09-06_12-06-09.jpg"
import img40 from "../assets/travel/photo_2025-09-06_12-05-59.jpg"
import img41 from "../assets/travel/photo_2025-09-06_12-05-47.jpg"
import img42 from "../assets/travel/photo_2025-09-06_12-05-38.jpg"
import img43 from "../assets/travel/photo_2025-09-06_12-05-32.jpg"

export default function Travel(){
    useEffect(() => {
      AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // animate every time element scrolls in view
      mirror: true,
    });
    }, []);
    const images = [
        img1, img3,img10,img8,
        img9, img3, img6,img4,
        img7, img5, img2,img11,
        img36, img37,img38,img39,
        img12, img13,img14,img15,
        img16, img17, img18,img19,
        img20, img21, img22,img23,
        img24, img25,img26,img27,
        img28, img29, img30,img31,
        img32, img33, img34,img35,
        img40, img41, img42,img43
        
      ];
    
      // Track tapped image on mobile
        const [activeIndex, setActiveIndex] = useState(null);
      
        const handleTouch = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
        return (
          <div className="flex flex-col justify-center items-center gap-6 py-20">
            <h1 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4 "
              data-aos="fade-down" 
              data-aos-once="true"
            >
              Travel
            </h1>
            <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
              <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">
                Wherever your journey takes you, we capture it with cinematic visuals and creative photography.
              </p>
            </div>
      
            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 px-15 gap-5 py-8 md:px-10 lg:px-38 ">
              {images.map((src, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="relative overflow-hidden rounded-xl shadow-lg mb-6 break-inside-avoid group"
                  onTouchStart={() => handleTouch(index)}
                >
                  {/* Image */}
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full transform transition-transform duration-500 
                      ${activeIndex === index ? "scale-110" : "scale-100"}
                      group-hover:scale-110`}
                  />
      
                  {/* Dark overlay */}
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center 
                      transition-opacity duration-500 
                      ${activeIndex === index ? "opacity-100" : "opacity-0"} 
                      group-hover:opacity-100`}
                  >
                    {/* <Eye className="text-white w-10 h-10" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      