import React from "react";

//import navigation data
import { navigation } from "../data";

//import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px] justify-items-center">
        {navigation.map((item, index) => {
          return (
            <li
              className=" font-medium text-white px-1.5 py-1.5 rounded-lg hover:bg-accent cursor-pointer"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
