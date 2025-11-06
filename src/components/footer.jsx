import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const icon1 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460631/facebook_1_iniwpn.png";
const icon2 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460680/instagram_nnvw28.png";
const icon3 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460721/telegram_nbovto.png";
const icon4 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460644/gps_obj9z6.png";
const icon5 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460624/email_gjpwbj.png";
const icon6 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460710/phone-call_guxvrs.png";
const icon7 ="https://res.cloudinary.com/djw0srhou/image/upload/f_auto,q_auto,w_1000/v1761460600/7693325_tiktok_social_media_logo_apps_icon_e0c9xw.png"
// import { useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const iconStyle =
    "w-6 h-6"; // consistent icon size and color
  const circleStyle =
   "w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(11,59,91)] hover:bg-white cursor-pointer cursor-pointer transition-all duration-200";

  return (
    <div className="flex flex-col">
    <div className="w-full flex flex-wrap md:flex-nowrap justify-around text-white mt-5 py-8 bg-black gap-6 md:px-20">
      
      {/* Address */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl">Address</h3>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className={circleStyle}>
              <img src={icon4} alt="Location" className={iconStyle} />
            </div>
            <span>Jimma, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={circleStyle}>
              <img src={icon6} alt="Phone" className={iconStyle} />
            </div>
            <div className="flex flex-col">
              <a href="tel:+251932453742">+251932453742</a>
              <a href="tel:+251900946999">+251900946999</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={circleStyle}>
              <img src={icon5} alt="Email" className={iconStyle} />
            </div>
            <a href="mailto:bashaashaastudio@gmail.com">bashaashaastudio@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Pages */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl">Pages</h3>
        <div className="flex flex-col gap-1 text-lg">
          {isLandingPage ? (
            <>
              <a className="hover:text-[rgb(11,59,91)]" href="#home">Home</a>
              <a className="hover:text-[rgb(11,59,91)]" href="#team">About</a>
              <a className="hover:text-[rgb(11,59,91)]" href="#services">Services</a>
              <a className="hover:text-[rgb(11,59,91)]" href="#gallery">Gallery</a>
              <a className="hover:text-[rgb(11,59,91)]" href="#contact">Contact</a>
            </>
          ) : (
            <Link className="hover:text-[rgb(11,59,91)]" to="/">Home</Link>
          )}
        </div>
      </div>

      {/* About Us + Socials */}
      <div className="flex flex-col gap-3 w-full max-w-md px-8 md:px-0">
        <div className="flex flex-col gap-2 mb-5">
          <h3 className="font-bold text-2xl">About Us</h3>
          <p className="text-justify text-lg text-gray-300 leading-relaxed">
            At Bashaashaa, we deliver professional videography and photography, 
            capturing every moment and story with creativity and care, based in Jimma, 
            Ethiopia and serving clients everywhere.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-2">
          <a href="https://www.facebook.com/abdusebashaashaa?mibextid=wwXIfr&mibextid=wwXIfr" className={circleStyle}>
            <img src={icon1} alt="Facebook" className={iconStyle} />
          </a>
          <a href="https://www.instagram.com/bashasha_studio?igsh=MTZqY213eHp4b3d1Mg==" className={circleStyle}>
            <img src={icon2} alt="Instagram" className={iconStyle} />
          </a>
          <a href="https://t.me/Bashaashaa_studio" className={circleStyle}>
            <img src={icon3} alt="Telegram" className={iconStyle} />
          </a>
          <a href="https://www.tiktok.com/@bashaashaastudiojimma?_t=ZM-8zUsFfJf1AD&_r=1" className={circleStyle}>
            <img src={icon7} alt="Tiktok" className={iconStyle} />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-500  py-4 border-t border-gray-700">
      &copy; Bashaashaa {year}. All Rights Reserved.
    </div>
    </div>
  );
}
