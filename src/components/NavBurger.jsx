import React from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export const Burger = ({ icone }) => (
  <a href="/" className="md:hidden text-3xl absolute right-8 top-6">
    <i className={icone}></i>
  </a>
);
const NavBurger = ({open, setOpen}) => {
  
  return open ? (
    <ImCross className="z-50 h-5 w-5 cursor-pointer  " onClick={() => setOpen(false)} />
  ) : (
    <GiHamburgerMenu
      className="z-50 h-5 w-5 cursor-pointer"
      onClick={() => setOpen(true)}
    />
  );
};

export default NavBurger;
