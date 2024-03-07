import React from "react";
import imgSrc from "../assets/images/getStarted.png";
import TrendingCoins from "./TrendingCoins";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8 ">{children}</div>
      <div className="col-span-4">
        <div className="bg-[#0052FE] rounded-lg text-white flex flex-col justify-center items-center p-8">
          <h3 className="font-bold text-center text-2xl leading-10 pb-6">
            Get Started with KoinX for FREE
          </h3>
          <p className="text-center">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <img src={imgSrc} alt="demo image" className="py-6" />
          <div>
            <button className="text-black bg-white flex gap-2 items-center py-2 px-4 rounded-lg">
              Get started For FREE
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9583 5.9952L1.45834 5.9952"
                  stroke="#0F1629"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.91684 0.974793L13.9585 5.99479L8.91684 11.0156"
                  stroke="#0F1629"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="my-6">
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
};

export default Layout;
