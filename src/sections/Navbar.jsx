import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mt-[29px] vsm:mt-0 mx-[20px] vsm:mx-0 rounded-[8px] vsm:rounded-0 bg-[#0A0B21] vsm:bg-transparent flex items-center justify-between border border-[#3B3B49] vsm:border-none px-[20px] xmd:px-[50px] xl:px-[80px] py-[8px] vsm:py-[20px] text-white">
      <h1 className="text-[22px] font-bold">FlexBot</h1>

      <ul
        className={`${
          !isOpen && "hidden xmd:flex"
        } absolute z-[20] left-0 top-[90px] w-screen xmd:w-fit xmd:static flex flex-col xmd:flex-row gap-[40px] items-center py-[14px] px-[50px] xmd:rounded-[12px] bg-[#0A0B21] border border-[#3B3B49]`}
      >
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="hero"
            smooth={true}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="features"
            smooth={true}
            duration={500}
          >
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="roadmap"
            smooth={true}
            duration={1000}
          >
            Roadmap
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </ScrollLink>
        </li>

        <a
          href="https://t.me/UseFlexBot"
          target="blank"
          className="block xmd:hidden bg-[#AD36C5] rounded-[12px] text-sm py-[14px] px-[20px]"
        >
          Sign Up
        </a>
      </ul>

      <a
        href="https://t.me/UseFlexBot"
        target="blank"
        className="hidden xmd:block bg-[#AD36C5] rounded-[12px] text-sm py-[14px] px-[20px]"
      >
        Sign Up
      </a>

      <button className="xmd:hidden">
        {isOpen ? (
          <FaTimes
            className="text-[25px] text-[red]"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars className="text-[25px]" onClick={() => setIsOpen(true)} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
