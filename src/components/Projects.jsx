import React from "react";
import TRANS from "../assets/work-assets/trans.png";
import CONTAINERS from "../assets/work-assets/containers.jpeg";
import WEBSERV from "../assets/work-assets/webserv.jpeg";
import DOCKER from "../assets/work-assets/docker.jpeg";
import MINISHELL from "../assets/work-assets/minishell.png";
import CUB3D from "../assets/work-assets/cub3d.png";

const Project = (props) => {
  return (
    <div id="projects" className="w-full h-auto bg-slate-900 rounded-lg shadow-2xl hover:bg-blue-900 transition duration-700 hover:scale-95">
      <div className="w-full h-64 rounded-t-lg">
        <img src={props.img} alt={props.name} className="w-full h-full rounded-t-lg" />
      </div>
      <div className="w-full h-auto rounded-b-lg flex flex-col justify-center">
        <h1 className="text-white text-xl font-black text-center py-4">
          {props.name}
        </h1>
        <p className="text-white text-center p-5 font-thin">{props.desc}</p>
        <div className="inline-flex justify-center items-center h-auto">
        <a target="_blank"  href={`${props.url}`} className="inline-flex justify-center items-center  text-white h-8 w-28 bg-teal-600 hover:bg-teal-700 transition duration-700 rounded-lg">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
      </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className=" h-auto w-full  bg-slate-800 p-10">
      <h1 className="text-5xl text-center text-white">Projects</h1>
      <div className="w-full h-auto flex justify-center px-6 mt">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-10 ">
          <Project name="FT_TRANSCENDANTE" desc="is the last 42 project The superficial purpose of this project is to implement a realtime game,
                     chat, group chat channel, friend's online-offline status, guild, guild war,
                     ranking system and tournament. All layouts are fully responsive." img={TRANS} url="https://github.com/mbifenzi/ft-transgender" />
          <Project name="ft_containers" desc="is a 42 project, It's a C++ project and was about recoding some containers from the STL." img={CONTAINERS} url="https://github.com/mbifenzi/ft_containers"/>
          <Project name="Webserv" desc="is a 42 project, recoding our own web server in C++, A program capable of running an HTTP server, handling requests, and parsing configuration files." img={WEBSERV} url="https://github.com/mbifenzi/webserv"/>
          <Project name="Inception" desc="Set up a small infrastructure composed of WordPress with LEMP Stack, (Nginx, MariaDB and PHP) using Docker / Docker-Compose." img={DOCKER} url="https://github.com/mbifenzi/inception"/>
          <Project name="Minishell" desc="this project is about recoding our own little bash. A program capable of parsing a prompt and launching executables with arguments, along with a few built-in functions." img={MINISHELL} url="https://github.com/mbifenzi/minishell"/>
          <Project name="Cub3d" desc="This project aims to code a 3D game using the raycasting technique, like Wolfestein, considered the first FPS game in the world." img={CUB3D} url="https://github.com/mbifenzi/cub3d"/>  
        </div>
      </div>
    </div>
  );
};

export default Projects;
