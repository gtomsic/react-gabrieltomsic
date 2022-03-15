import * as React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full bg-[#212529]">
      <div className="flex justify-between items-center h-[80px] px-6 text-gray-300 max-w-[1000px] mx-auto">
        <div>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <img src={Logo} alt="Gabriel Logo" style={{ width: "40px" }} />
          </Link>
        </div>

        <ul className="hidden md:flex">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            <li>Skills</li>
          </Link>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <li>Work</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
        {/* Hamburger  */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 text-3xl rounded-md border-2 border-gray-600 p-1"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full  h-screen bg-[#212529] flex flex-col justify-center items-center text-center duration-500"
          }
        >
          <ul>
            <Link
              onClick={handleClick}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="py-6 text-4xl">Home</li>
            </Link>
            <Link
              onClick={handleClick}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="py-6 text-4xl">About</li>
            </Link>
            <Link
              onClick={handleClick}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="py-6 text-4xl">Skills</li>
            </Link>
            <Link
              onClick={handleClick}
              to="work"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="py-6 text-4xl">Work</li>
            </Link>
            <Link
              onClick={handleClick}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="py-6 text-4xl">Contact</li>
            </Link>
          </ul>
        </div>
        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
              <a
                className="flex justify-between items-center w-full text-gray-100"
                href="/"
              >
                GitHub
                <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Facebook
                <FaFacebook size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                LinkedIn
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-700">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Resume
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
