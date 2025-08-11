import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {motion} from "framer-motion"
import { GiStoneCrafting } from "react-icons/gi";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "Process", path: "#process" },
  { name: "Case Study", path: "#case-study" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Call to Action", path: "#cta" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    setMenuOpen(false); // close mobile menu on link click
  };

  return (
    <>
      <motion.nav
      initial={{opacity: 0, y:-100}}
      animate ={{opacity : 1, y:0}}
      transition={{duration: 0.5}}

      className="flex justify-between px-10 items-center py-4 bg-gradient-to-r from-primary to-secondary text-white fixed top-0 w-full z-50">
        <div className="logo flex gap-2 items-center">
          <GiStoneCrafting className="w-10 h-10" />
          <h1 className="text-2xl font-bold">
            Craftentials
          </h1>
        </div>

        <ul className="font-bold md:flex text-md gap-4 hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <a
                href={link.path}
                onClick={handleLinkClick}
                className="transition duration-300 hover:text-primary"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-3xl cursor-pointer text-primary" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-transparent backdrop-blur-3xl transform transition-transform duration-300 ease-in-out z-50  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center justify-center gap-6 mt-10 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <a
                href={link.path}
                onClick={handleLinkClick}
                className="transition duration-300 hover:text-primary"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
