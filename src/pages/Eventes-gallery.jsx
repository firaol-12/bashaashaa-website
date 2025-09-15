import React, { useState ,useEffect} from "react";
import AOS from "aos";

import img1 from "../assets/events/IMG_2806.JPG"
import img2 from "../assets/events/IMG_2809.JPG"
import img3 from "../assets/events/cover.jpg"
import img4 from "../assets/events/IMG_2812.JPG"
import img5 from "../assets/events/IMG_2813.JPG"
import img6 from "../assets/events/IMG_2855.JPG"
import img7 from "../assets/events/IMG_2857.JPG"
import img8 from "../assets/events/IMG_2860.JPG"
import img9 from "../assets/events/IMG_2861.JPG"
import img10 from "../assets/events/IMG_2863.JPG"
import img11 from "../assets/events/IMG_2867.JPG"
import img12 from "../assets/events/IMG_2872.JPG"
import img13 from "../assets/events/IMG_2873.JPG"
import img14 from "../assets/events/IMG_2874.JPG"
import img15 from "../assets/events/IMG_2875.JPG"
import img16 from "../assets/events/IMG_4799.JPG"
import img17 from "../assets/events/photo_2025-04-04_11-52-32.jpg"
import img18 from "../assets/events/photo_2025-08-17_11-28-20.jpg"
import img19 from "../assets/events/photo_2025-09-05_11-28-20.jpg"
import img20 from "../assets/events/photo_2025-09-05_11-28-25.jpg"
import img21 from "../assets/events/photo_2025-09-05_11-28-35.jpg"
import img22 from "../assets/events/photo_2025-09-05_11-28-40.jpg"
import img23 from "../assets/events/photo_2025-09-05_11-28-45.jpg"
import img24 from "../assets/events/photo_2025-09-05_11-28-49.jpg"
import img25 from "../assets/events/photo_2025-09-05_11-28-54.jpg"
import img26 from "../assets/events/photo_2025-09-05_11-28-59.jpg"
import img27 from "../assets/events/photo_2025-09-05_11-29-04.jpg"
import img28 from "../assets/events/photo_2025-09-05_11-29-11.jpg"
import img29 from "../assets/events/photo_2025-09-05_11-29-16.jpg"
import img30 from "../assets/events/photo_2025-09-05_11-29-24.jpg"
import img31 from "../assets/events/photo_2025-09-05_11-29-28.jpg"
import img32 from "../assets/events/photo_2025-09-05_11-29-33.jpg"
import img33 from "../assets/events/photo_2025-09-05_11-29-38.jpg"
import img34 from "../assets/events/photo_2025-09-05_11-29-43.jpg"
import img35 from "../assets/events/photo_2025-09-05_11-29-47.jpg"
import img36 from "../assets/events/photo_2025-09-05_11-29-54.jpg"
import img37 from "../assets/events/photo_2025-09-05_11-29-59.jpg"
import img38 from "../assets/events/photo_2025-09-05_11-30-05.jpg"
import img39 from "../assets/events/photo_2025-09-05_11-30-11.jpg"
import img40 from "../assets/events/photo_2025-09-05_11-30-16.jpg"
import img41 from "../assets/events/photo_2025-09-05_11-30-23.jpg"
import img42 from "../assets/events/photo_2025-09-05_11-30-31.jpg"
import img43 from "../assets/events/photo_2025-09-05_11-30-36.jpg"
import img44 from "../assets/events/photo_2025-09-05_11-30-42.jpg"
import img45 from "../assets/events/photo_2025-09-05_11-30-49.jpg"
import img46 from "../assets/events/photo_2025-09-05_11-30-58.jpg"
import img47 from "../assets/events/photo_2025-09-05_11-31-02.jpg"
import img48 from "../assets/events/photo_2025-09-05_11-31-07.jpg"
import img49 from "../assets/events/photo_2025-09-05_11-31-18.jpg"
import img50 from "../assets/events/photo_2025-09-05_11-31-12.jpg"
import img51 from "../assets/events/photo_2025-09-05_11-31-23.jpg"
import img52 from "../assets/events/photo_2025-09-05_11-31-27.jpg"
import img53 from "../assets/events/photo_2025-09-05_11-31-37.jpg"
import img54 from "../assets/events/photo_2025-09-05_11-31-43.jpg"
import img55 from "../assets/events/photo_2025-09-05_11-31-49.jpg"
import img56 from "../assets/events/photo_2025-09-05_11-31-55.jpg"
import img57 from "../assets/events/photo_2025-09-05_11-31-59.jpg"
import img58 from "../assets/events/photo_2025-09-05_11-32-10.jpg"
import img59 from "../assets/events/photo_2025-09-05_11-32-15.jpg"
import img60 from "../assets/events/photo_2025-09-05_11-32-23.jpg"
import img61 from "../assets/events/photo_2025-09-05_11-32-29.jpg"
import img62 from "../assets/events/photo_2025-09-05_11-32-34.jpg"
import img63 from "../assets/events/photo_2025-09-05_11-32-39.jpg"
import img64 from "../assets/events/photo_2025-09-05_11-32-45.jpg"
import img65 from "../assets/events/photo_2025-09-05_11-32-52.jpg"
import img66 from "../assets/events/photo_2025-09-05_11-32-57.jpg"
import img67 from "../assets/events/photo_2025-09-05_11-33-03.jpg"
import img68 from "../assets/events/photo_2025-09-05_11-33-09.jpg"
import img69 from "../assets/events/photo_2025-09-05_11-33-33.jpg"
import img70 from "../assets/events/photo_2025-09-05_11-33-37.jpg"


export default function WeddingImage(){
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false, // animate every time element scrolls in view
        mirror: true,
      });
    }, []);

    const images = [
        img12, img16, img26, img2, img14,
        img9,img36,img37,img38, img5, img6, img11,img4,
        img7, img15,img13,img19,img17,img18,img20,img21,
        img22, img23, img24, img25, img27,
        img28,img10,img8, img29, img30, img31, img32, img33,img34,
        img35,img39,img40,img41,img42,
        img43, img44, img45, img3, img46, img47,img58,
        img49, img50,img1,img51, img52, img53, img54,
        img56, img57, img48,img55,img66, img67,img68,
        img59, img60,img61,img62, img63, img64,img65,
        img69, img70
      ];
    
      // Track tapped image on mobile
      const [activeIndex, setActiveIndex] = useState(null);
    
      const handleTouch = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return(
        <div className="flex flex-col justify-center items-center gap-6 py-20">
      <h1 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4 "
        data-aos="fade-down" 
        data-aos-once="true"
      >
        Events
      </h1>
      <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
        <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">
            From small gatherings to grand celebrations, we preserve your special moments.
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
    )
}