import React from "react";
import imgSrc from "../assets/images/logo.png";
import Container from "./Container";

const Navbar = () => {
  return (
    <div
      style={{ boxShadow: " 0px 0px 12px 0px #1026490F" }}
      className="bg-white"
    >
      <Container>
        <div className="hidden font-semibold items-center md:flex justify-between p-4">
          <div>
            <img src={imgSrc} />
          </div>
          <div>
            <ul className="flex gap-10 items-center">
              <li>
                <a href="/">Crypto Taxes</a>
              </li>
              <li>
                <a href="/">Free Tools</a>
              </li>
              <li>
                <a href="/">Resource Center</a>
              </li>
              <li>
                <button className="bg-[#2870EA] text-white py-2 px-6 rounded-md">
                  Get started
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 md:hidden">
          <div>
            <img src={imgSrc} />
          </div>
          <button className="space-y-1 group">
            <div className="w-6 h-[3px] bg-black"></div>
            <div className="w-6 h-[3px] bg-black"></div>
            <div className="w-6 h-[3px] bg-black"></div>
            <ul
              style={{ boxShadow: " 0px 0px 12px 0px #1026490F" }}
              className="bg-white text-black font-semibold group-focus:-top-1 w-screen py-8 absolute -top-[999px] right-0 duration-150 flex flex-col space-y-3 justify-end"
            >
              <button className="px-10 pb-4 relative ml-auto">
                <div className="w-6 h-1 rotate-45 absolute bg-black"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
              </button>
              <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                <a>Crypto Taxes</a>
              </li>
              <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                <a>Free Tools</a>
              </li>
              <li className="flex justify-center w-full py-4 hover:bg-[#7AB3E84A]">
                <a>Resource Center</a>
              </li>
              <li>
                <button className="bg-[#2870EA] text-white py-2 px-6 rounded-md">
                  Get started
                </button>
              </li>
            </ul>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
