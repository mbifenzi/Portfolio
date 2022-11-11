import React from "react";
import reactLogo from "../assets/about-assets/react.png";
import cLogo from "../assets/about-assets/c.png";
import cppLogo from "../assets/about-assets/c++.png";
import jsLogo from "../assets/about-assets/js.png";
import nodeLogo from "../assets/about-assets/node.png";
import dockerLogo from "../assets/about-assets/docker.png";

export const Icona = (props) => {
  console.log(props.animate);
  return (
    <img
      className={
        "w-24 p-3 rounded-3xl bg-sky-200 bg-opacity-5 hover:bg-opacity-20 transform duration-300 shadow-2xl " +
        props.animate
      }
      src={props.icon}
      alt={props.alt}
    />
  );
};
const About = () => {
  return (
    <>
      <div id="about" className=" bg-slate-900 shadow-2xl p-10">
        <h1 className="text-center text-white text-6xl ">About me</h1>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 bg-slate-900  h-auto ">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={require("/Users/mbifenzi/Desktop/reactPortfolio/portfolio/src/assets/mbifenzi.jpeg")}
              alt="mbifenzi"
              className="rounded-3xl gap-10"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h1 className="mt-6 text-white text-xl font-thin">
              Hello, my name is Mohamed Bifenzi and I am a full stack developper
              and a student at{" "}
              <a
                className="text-green-300 hover:text-green-500 transition duration-500"
                href="http://www.1337.ma"
              >
                @1337
              </a>{" "}
              located in Morocco, I thoroughly enjoy creating new things and I
              am always looking for new challenges, Seeing ideas and concepts
              come to life is one of my favorite parts of the development
              process.
            </h1>
            <div className="w-full">
              <h1 className="text-xl text-white font-thin text-center py-9 md:text-4xl">
                Tools and Technologies I Use :
              </h1>
              <div className="flex flex-wrap justify-center gap-10 shadow-3xl items-center">
                <Icona
                  icon={reactLogo}
                  alt="c lang"
                  animate=" animate-refloat"
                />
                <Icona icon={cLogo} alt="c lang" animate="animate-float" />
                <Icona
                  icon={cppLogo}
                  alt="c++ lang"
                  animate=" animate-refloat"
                />
                <Icona icon={jsLogo} alt="js lang" animate="animate-float" />
                <Icona
                  icon={nodeLogo}
                  alt="js lang"
                  animate="animate-refloat"
                />
                <Icona icon={dockerLogo} alt="docker" animate="animate-float" />
                <div className="h-40 bg-blue-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
