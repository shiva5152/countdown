"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import MyCountdown from "./coundown";

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
      className="flex flex-col sm:flex-row gap-10 relative mt-[0] md:items-center sm:mt-[150px] z-40 justify-between "
      ref={textRef}
    >
      <div>
        {/* <p className="text-[#c9c9c9] mb-[1rem]">All-in-one solution</p> */}
        {/* <div className="text-[28px] md:text-[64px] leading-snug font-bold font-Orbitron">
          <h1 id="title-1">
            Innovate<span className="text-[#8d2fe6]">.</span>
          </h1>
          <h1 id="title-2 ">
            Solve problem<span className="text-[#8d2fe6]">.</span>
          </h1>
          <h1 id="title-3">
            Innovate some more<span className="text-[#8d2fe6]">.</span>
          </h1>
        </div> */}
        <MyCountdown />
      </div>
      <div className="">
        <div
          id="box"
          className="w-[300px] h-[300px] transform rotate-12 relative mt-[0] sm:mt-[-50px]"
        >
          <Image src={"/image/box.webp"} fill={true} alt="box" />
          <div className="gradient-circle absolute left-[50%] bottom-[50%]  -z-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Text;
