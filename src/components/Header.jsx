import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link, animateScroll as scroll } from "react-scroll";

export const Icona = ({ icon, url, alt }) => (
  <a href={url} target="_blank" rel="noreferrer">
    <i
      src={icon}
      alt={alt}
      className={
        "text-white w-fit text-5xl rounded-full p-2 hover:text-black \
         bg-black border border-white-5 hover:bg-slate-300 hover:bg-opacity-50 \
         hover:rotate-[360deg] transition duration-700 " +
        icon
      }
    />
  </a>
);

export const Header = () => {
  return (
    <div id="home" className="bg-brand h-screen bg-cover bg-center ">
      <div className="flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-6xl text-white ">
          Hi, I'm{" "}
          <span className="text-teal-00 text-7xl hover:text-slate-500 transition duration-500">
            Mohamed Bifenzi
          </span>
        </h1>
        <h2 className="text-3xl font-thin text-white py-5">
          I'm a{" "}
          <span className="text-teal-500">
            <TypeAnimation
              sequence={[
                "Web Developer", // Types 'One'
                1000, // Waits 1s
                "Mobile Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Video Content Creator",
                2000, // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "30px" }}
            />
          </span>
        </h2>
        <h1></h1>
        <div className="w-full flex gap-x-10 justify-center items-center">
          <Icona
            icon="fa-github-alt fa-brands"
            url="https://github.com/mbifenzi"
            alt="Github"
          />
          <Icona
            icon="fa-twitter fa-brands"
            url="https://twitter.com/mbifenzi"
            alt="Twitter"
          />
          <Icona
            icon="fa-linkedin-in fa-brands"
            url="https://www.linkedin.com/in/mohamed-bifenzi-83ba51221/"
            alt="Linkedin"
          />

          <Icona
            icon="fa-instagram fa-brands"
            url="https://www.instagram.com/mohamed_bifenzi/"
            alt="Instagram"
          />
        </div>
        <Link className="cursor-pointer flex justify-center bottom-0 absolute"
        to="about"  spy={true} smooth={true} offset={0} duration={500} >
        <svg
          className="animate-bounce w-10 h-10 text-white bottom rounded-full  border-2 border-white p-2 hover:text-black hover:bg-white hover:bg-opacity-50 hover:rotate-[360deg] transition duration-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
