import React from "react";
import CountUp from "react-countup";   // import countup
import img from "../assets/Canon eos 70d.jpeg";
import icon1 from "../assets/facebook (1).png";
import icon2 from "../assets/instagram.png";
import icon3 from "../assets/telegram.png";
import icon4 from "../assets/7693325_tiktok_social media_logo_apps_icon.png";
import "./home.css";

export default function Home() {
  const iconStyle = "w-6 h-6 cursor-pointer"; 
  const circleStyle =
    "w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(11,59,91)] hover:bg-white cursor-pointer transition-all duration-200";

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full items-center lg:items-start lg:w-220 lg:pl-35 px-5 flex gap-20 lg:px-0 lg:gap-6 justify-center flex-col py-10 relative">
        <h1 className="text-6xl text-center text-white font-bold lg:text-start lg:text-6xl 2xl:text-7xl mb-15">
          <span className="text-[rgb(11,59,91)]">Bashaashaa</span> Photography
          and Videography Company
        </h1>

        <div className="flex gap-5 md:gap-8 ">
          <div>
            <p className="text-5xl md:text-6xl text-white h1 text-center">
              <CountUp end={100} duration={3} separator="" />k+
            </p>
            <h1 className="text-xl md:text-2xl text-[rgb(11,59,91)] mb-2 text-center font-bold 2xl:text-3xl">
              Photography
            </h1>
          </div>
          <div>
            <p className="text-5xl md:text-6xl  text-white h1 text-center">
              <CountUp end={50} duration={3} />+
            </p>
            <h1 className="text-xl md:text-2xl text-[rgb(11,59,91)] mb-2 text-center font-bold 2xl:text-3xl">
              Videography
            </h1>
          </div>
          <div>
            <p className="text-5xl md:text-6xl  text-white h1 text-center">
              <CountUp end={5} duration={3} />+
            </p>
            <h1 className="text-xl md:text-2xl text-[rgb(11,59,91)] mb-2 text-bold text-center font-bold 2xl:text-3xl">
              Experience
            </h1>
          </div>
        </div>

        <div className="flex gap-5 lg:absolute lg:bottom-4">
          <a
            href="https://www.facebook.com/abdusebashaashaa?mibextid=wwXIfr&mibextid=wwXIfr"
            className={circleStyle}
          >
            <img src={icon1} alt="Facebook" className={iconStyle} />
          </a>
          <a
            href="https://www.instagram.com/bashasha_studio?igsh=MTZqY213eHp4b3d1Mg=="
            className={circleStyle}
          >
            <img src={icon2} alt="Instagram" className={iconStyle} />
          </a>
          <a href="https://t.me/Bashaashaa_studio" className={circleStyle}>
            <img src={icon3} alt="Telegram" className={iconStyle} />
          </a>
          <a
            href="https://www.tiktok.com/@bashaashaastudiojimma?_t=ZM-8zUsFfJf1AD&_r=1"
            className={circleStyle}
          >
            <img src={icon4} alt="Tiktok" className={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}
