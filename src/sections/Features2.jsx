import React from "react";
import network from "../assets/network.png";
import network2 from "../assets/network2.svg";
import outline from "../assets/outline.png";

const Features2 = () => {
  return (
    <section
      id="features2"
      className="features2 w-full pt-[62px] pb-[30px] text-white"
    >
      <h1 className="text-center text-[24px] vsm:text-[40px] font-bold leading-[50px]">
        Why Flexbot stand out?
      </h1>

      <div className="xl:hidden mx-auto w-fit">
        <img className="w-fit vsm:w-[80vw]" src={network2} alt="network" />
      </div>

      <div className="hidden relative mt-[50px] xl:mt-[120px] xl:flex flex-col xl:flex-row gap-[20px] xl:gap-0 justify-center items-center">
        <div className="hidden relative xl:flex items-center justify-center">
          <img
            className="absolute top-[20%] left-[50%] translate-x-[-50%]"
            src={network}
            alt="network"
          />
          <img src={outline} alt="outline" />
        </div>

        <div className="desc left-[12%] top-[10%] flex-row-reverse xl:flex-row ">
          <div className="text">
            <p>User Centric design</p>
          </div>
          <div className="line w-[64px] xl:w-[135px]"></div>
          <div className="circle"></div>
        </div>
        <div className="desc left-[2.6%] top-[35%] flex-row-reverse xl:flex-row">
          <div className="text">
            <p>Web3 Authentication</p>
          </div>
          <div className="line w-[64px]"></div>
          <div className="circle"></div>
        </div>
        <div className="desc left-[4%] top-[60%] flex-row-reverse xl:flex-row">
          <div className="text">
            <p>Gasless trading</p>
          </div>
          <div className="line w-[64px]"></div>
          <div className="circle"></div>
        </div>
        <div className="desc left-[1%] top-[80%] flex-row-reverse xl:flex-row">
          <div className="text">
            <p>Omnichain infrastructure</p>
          </div>
          <div className="line w-[64px]"></div>
          <div className="circle"></div>
        </div>
        <div className="desc left-[59%] top-[10%]">
          <div className="circle"></div>
          <div className="line w-[64px] xl:w-[135px]"></div>
          <div className="text">
            <p>Cutting edging routing</p>
          </div>
        </div>
        <div className="desc left-[74%] top-[40%]">
          <div className="circle"></div>
          <div className="line w-[64px]"></div>
          <div className="text">
            <p>Account security</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
