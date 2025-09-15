import React, { useState ,useEffect} from "react";
import AOS from "aos";
import img1 from "../assets/model/photo_2025-09-04_22-30-35.jpg"
import img2 from "../assets/model/photo_2025-09-04_22-31-04.jpg"
import img3 from "../assets/model/photo_2025-09-04_22-31-09.jpg"
import img4 from "../assets/model/photo_2025-09-04_22-31-20.jpg"
import img5 from "../assets/model/photo_2025-09-04_22-31-25.jpg"
import img6 from "../assets/model/photo_2025-09-04_22-31-30.jpg"
import img7 from "../assets/model/photo_2025-09-04_22-31-30.jpg"
import img8 from "../assets/model/photo_2025-09-04_22-31-36.jpg"
import img9 from "../assets/model/photo_2025-09-04_22-31-43.jpg"
import img10 from "../assets/model/photo_2025-09-04_22-31-48.jpg"
import img11 from "../assets/model/photo_2025-09-04_22-31-54.jpg"
import img12 from "../assets/model/photo_2025-09-04_22-32-02.jpg"
import img13 from "../assets/model/photo_2025-09-04_22-32-10.jpg"
import img14 from "../assets/model/photo_2025-09-04_22-32-14.jpg"
import img15 from "../assets/model/photo_2025-09-04_22-32-20.jpg"
import img16 from "../assets/model/photo_2025-09-04_22-32-24.jpg"
import img17 from "../assets/model/photo_2025-09-04_22-32-31.jpg"
import img18 from "../assets/model/photo_2025-09-04_22-32-37.jpg"
import img19 from "../assets/model/photo_2025-09-04_22-32-41.jpg"
import img20 from "../assets/model/photo_2025-09-04_22-32-46.jpg"
import img21 from "../assets/model/photo_2025-09-04_22-32-51.jpg"
import img22 from "../assets/model/photo_2025-09-04_22-32-57.jpg"
import img23 from "../assets/model/photo_2025-09-04_22-33-01.jpg"
import img24 from "../assets/model/photo_2025-09-04_22-33-06.jpg"
import img25 from "../assets/model/photo_2025-09-04_22-33-16.jpg"
import img26 from "../assets/model/photo_2025-09-04_22-33-23.jpg"
import img27 from "../assets/model/photo_2025-09-04_22-33-28.jpg"
import img28 from "../assets/model/photo_2025-09-04_22-33-32.jpg"
import img29 from "../assets/model/photo_2025-09-04_22-33-38.jpg"
import img30 from "../assets/model/photo_2025-09-04_22-33-44.jpg"
import img31 from "../assets/model/photo_2025-09-04_22-33-49.jpg"
import img32 from "../assets/model/photo_2025-09-04_22-33-56.jpg"
import img33 from "../assets/model/photo_2025-09-04_22-34-00.jpg"
import img34 from "../assets/model/photo_2025-09-04_22-34-05.jpg"
import img35 from "../assets/model/photo_2025-09-04_22-34-12.jpg"
import img36 from "../assets/model/photo_2025-09-04_22-34-17.jpg"
import img37 from "../assets/model/photo_2025-09-04_22-34-23.jpg"
import img38 from "../assets/model/photo_2025-09-04_22-34-27.jpg"
import img39 from "../assets/model/photo_2025-09-04_22-34-32.jpg"
import img40 from "../assets/model/photo_2025-09-04_22-34-40.jpg"
import img41 from "../assets/model/photo_2025-09-04_22-34-44.jpg"
import img42 from "../assets/model/photo_2025-09-04_22-34-50.jpg"
import img43 from "../assets/model/photo_2025-09-04_22-34-56.jpg"
import img44 from "../assets/model/photo_2025-09-04_22-35-00.jpg"
import img45 from "../assets/model/photo_2025-09-04_22-35-07.jpg"
import img46 from "../assets/model/photo_2025-09-04_22-35-12.jpg"
import img47 from "../assets/model/photo_2025-09-04_22-35-20.jpg"
import img48 from "../assets/model/photo_2025-09-04_22-35-24.jpg"
import img49 from "../assets/model/photo_2025-09-04_23-40-11.jpg"
import img50 from "../assets/model/photo_2025-09-04_23-40-25.jpg"
import img51 from "../assets/model/photo_2025-09-04_23-40-37.jpg"
import img54 from "../assets/model/photo_2025-09-04_23-40-43.jpg"
import img52 from "../assets/model/photo_2025-09-04_23-40-48.jpg"
import img53 from "../assets/model/photo_2025-09-04_23-40-53.jpg"



// import { Eye } from "lucide-react"; // nice icon (needs `lucide-react`)
import "./gallary.css";

export default function Models() {
  
  const images = [
    img1, img2, img3, img4, img5,
    img7, img10, img11, img12,
    img13, img14, img15, img16,
     img9, img17, img18, img6,
     img49, img50, img51, img52,
    img19, img20, img21, img23, img24,
    img25, img26, img27,img46, img47,
     img8, img28, img29, img30, img22,
    img31, img32, img33,img44, img43, img45,
    img34, img35, img36, img37, img38, img39,
    img40, img41, img42, img48,
    img53,img54
  ];
   useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false, // animate every time element scrolls in view
        mirror: true,
      });
      }, []);
  
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
        Model
      </h1>
      <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
        <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">
            Stylish and creative model photography that captures confidence and beauty.
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
