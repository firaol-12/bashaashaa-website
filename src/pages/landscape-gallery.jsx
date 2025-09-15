import React, { useState ,useEffect} from "react";
import AOS from "aos";

import img2 from "../assets/landscape/cover.JPG"
import img1 from "../assets/landscape/IMG_0139.JPG"
import img3 from "../assets/landscape/IMG_0143.JPG"
import img4 from "../assets/landscape/IMG_0144.JPG"
import img5 from "../assets/landscape/IMG_1454.JPG"
import img6 from "../assets/landscape/IMG_20250905_130603_872.JPG"
import img7 from "../assets/landscape/IMG_3098.JPG"
import img8 from "../assets/landscape/IMG_3099.JPG"
import img9 from "../assets/landscape/IMG_3102.JPG"
import img10 from "../assets/landscape/IMG_3491.JPG"
import img11 from "../assets/landscape/IMG_3495.JPG"
import img12 from "../assets/landscape/IMG_3500.JPG"
import img13 from "../assets/landscape/IMG_3506.JPG"
import img14 from "../assets/landscape/IMG_3508.JPG"
import img15 from "../assets/landscape/IMG_3532.JPG"
import img16 from "../assets/landscape/IMG_3590.JPG"
import img17 from "../assets/landscape/IMG_5235.JPG"
import img18 from "../assets/landscape/IMG_5237.JPG"
import img19 from "../assets/landscape/IMG_5238.JPG"
import img20 from "../assets/landscape/IMG_5306.JPG"
import img21 from "../assets/landscape/IMG_5309.JPG"
import img22 from "../assets/landscape/IMG_5311.JPG"
import img23 from "../assets/landscape/IMG_5313.JPG"
import img24 from "../assets/landscape/IMG_5367.JPG"
import img25 from "../assets/landscape/IMG_5374.JPG"
import img26 from "../assets/landscape/IMG_5376.JPG"
import img27 from "../assets/landscape/IMG_5378.JPG"
import img28 from "../assets/landscape/IMG_7671.JPG"
import img29 from "../assets/landscape/IMG_7693.JPG"
import img30 from "../assets/landscape/IMG_8500.JPG"
import img31 from "../assets/landscape/IMG_8504.JPG"
import img32 from "../assets/landscape/IMG_8505.JPG"
import img33 from "../assets/landscape/IMG_8520.JPG"
import img34 from "../assets/landscape/IMG_8522.JPG"
import img35 from "../assets/landscape/IMG_8532.JPG"
import img36 from "../assets/landscape/IMG_8880.JPG"
import img37 from "../assets/landscape/IMG_9232.JPG"
import img38 from "../assets/landscape/img__.JPG"
import img39 from "../assets/landscape/photo_2025-09-05_06-46-24.jpg"
import img40 from "../assets/landscape/photo_2025-09-05_06-46-34.jpg"
import img41 from "../assets/landscape/photo_2025-09-05_06-47-18.jpg"
import img42 from "../assets/landscape/photo_2025-09-05_06-47-24.jpg"
import img43 from "../assets/landscape/photo_2025-09-05_06-47-31.jpg"
import img44 from "../assets/landscape/photo_2025-09-05_06-47-42.jpg"
import img45 from "../assets/landscape/IMG_20250905_130603_977.JPG"
import img46 from "../assets/landscape/IMG_20250905_130604_035.JPG"


export default function Landscape(){
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
        img12, img13,img14,img15,img46,
        img16, img17, img18,img19,
        img20, img21, img22,img23,
        img24, img25,img26,img27,img45,
        img28, img29, img30,img31,
        img32, img33, img34,img35,
        img40, img41, img42,img43,
        img44
        
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
              Landscape
            </h1>
            <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
              <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">
                    Showcasing the beauty of nature through stunning landscape photography.
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
      