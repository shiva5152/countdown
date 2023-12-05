"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import MyCountdown from "./coundown";
import Typewriter from "typewriter-effect";

const Text = () => {
  const textRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        y: "-=10",
        stagger: 0.5,
      });
      t1.from(
        "#box",
        {
          xPercent: "100",
          duration: 1,
          ease: "power4.out",
        },
        0
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex flex-col sm:flex-row gap-10 relative mt-[0] md:items-center sm:mt-12 z-40 justify-between "
      ref={textRef}
    >
      <div>
        <p className="text-gray-200 hidden sm:block border-[0.1px] border-gray-400 sm:w-fit w-full text-center  mb-[1rem] p-2 sm:p-3 bg-[#19131e] sm:px-4 rounded-lg ">
          Free and secure trading terminal
        </p>
        <div className="text-[28px] sm:text-[48px] sm:max-w-[75%] leading-snug font-bold font-Orbitron">
          <div id="title-1" className="text-grad">
            Paving The Way To
          </div>
          <div
            id="title-2"
            className="text-[#af46c9] flex flex-col sm:flex-row  gap-2"
          >
            {/* Solve problem<span className="text-[#7d3cba]">.</span> */}
            <span>Intelligent Crypto</span>
            <span className=" block">
              <Typewriter
                options={{
                  strings: ["Trading!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-[14px] md:text-[18px]  mt-6 leading-snug font-bold font-Orbitron">
            Ace perpetual trading and stay ahead in the dynamic world of
            cryptocurrencies with FLEXBOT.
          </p>
        </div>

        <button className="button-glow mt-6 bg-[#8d2fe6] font-[8px] sm:font-medium rounded-[15px] items-center flex p-2 sm:p-2">
          <span className=" bg-white rounded-full p-1 sm:p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#b782fc"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>{" "}
          <span className="px-1 sm:px-4">Coming Soon</span>
        </button>

        <MyCountdown />
      </div>
      {/* <div className="">
        <div
          id="box"
          className="w-[300px] h-[300px] transform rotate-12 relative mt-[0] sm:mt-[-50px]"
        >
          <Image src={"/image/robo.png"} fill={true} alt="box" />
          <div className="gradient-circle absolute left-[50%] bottom-[50%]  -z-30"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Text;
