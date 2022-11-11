import React from "react";
import NavBurger from "./NavBurger";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  let links = [
    { name: "Home", url: "" },
    { name: "About", url: "about" },
    { name: "My Works", url: "projects" },
    { name: "Contact me", url: "contact" },
  ];
  return (
    <>
      <div className="w-full bg-slate-900 items-center fixed h-fit flex justify-between px-8 md:justify-around text-white z-10">
        <div className="w-1/4 text-center  justify-center">
      
        <Link className="cursor-pointer text-3xl font-bold py-5 hover:scale-95 transform duration-500 min-w-max"
      activeClass="active"
      to="home"
     spy={true}
     smooth={true}
     offset={0}
     duration={500}>
        MBifenzi
     </Link>
        </div>
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="hidden md:flex md:items-center justify-between md:z-auto md:static transition-all duration-500 ease-in">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="p-5 text-xl hover:text-teal-800 hover:scale-95 transform duration-500">
                  <Link className="cursor-pointer" to={link.url} spy={true} smooth={true} offset={-100} duration={500}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center md:hidden">
            <NavBurger open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>

        <nav>
          <ul className={`absolute md:hidden bg-slate-900 text-white w-full transform ease-in-out duration-500 flex items-center p-10 flex-col ${open ? "top-16" : "-top-[350px]"}`}>
            {links.map((link, index) => (
              <li
                key={index}
                className="p-5 text-xl hover:text-teal-800 hover:scale-95 transform duration-500"
              >
                <Link className="cursor-pointer" to={link.url} spy={true} smooth={true} offset={-100} duration={500}> {link.name} </Link>
              </li>
            ))}
          </ul>
        </nav>
    </>
  );
};
export default NavBar;
