import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Test1 = () => {
  return (
    <nav>
      <ul className="header">
        <li>
        <Link
      activeClass="active"
      to="section1"
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}>
         Section 1
     </Link>
        </li>
        <li>
        <Link
      activeClass="active"
      to="section2"
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}>
         Section 2
     </Link>
        </li>
        <li>Section 3</li>
        <li>Section 4</li>
      </ul>
    </nav>
  )
}

export default Test1