import React from "react";
import Navbar from "./Navbar";
import heroImg from "../assets/heroImg.png";
import { useEffect } from "react";
import oneInch from "../assets/1inch.svg";
import arcana from "../assets/arcana.svg";
import dydx from "../assets/dydx.svg";
import layerzeroImg from "../assets/layerzero.svg";

const Hero = () => {
  useEffect(() => {
    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    const textArray = ["Trading!", "Trading!", "Trading!"];

    let textArrayIndex = 0;
    let charIndex = 0;

    const erase = () => {
      if (charIndex > 0) {
        cursor.classList.remove("blink");
        typedText.textContent = textArray[textArrayIndex].slice(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, 80);
      } else {
        cursor.classList.add("blink");
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
          textArrayIndex = 0;
        }
        setTimeout(type, 1000);
      }
    };

    const type = () => {
      if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove("blink");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      } else {
        cursor.classList.add("blink");
        setTimeout(erase, 1000);
      }
    };

    type();
  }, []);
  return (
    <div id="hero" className="w-full relative overflow-hidden">
      <Navbar />

      <div className="absolute top-[70%] left-0 w-full h-fit">
        <div className="w-[70%] h-[94.41px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[226.88px]" />
        <div className="w-[70%] h-[94.41px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[226.88px]" />
        <div className="w-[70%] h-[94.41px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[226.88px]" />
        <div className="w-[70%] h-[94.41px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[226.88px]" />
        <div className="w-[70%] h-[94.41px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[226.88px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-violet-700 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
        <div className="w-[80%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
      </div>

      <section className="hero relative w-full pt-[40px] vsm:pt-[80px] xl:pt-[100px] flex flex-col gap-[60px] xl:gap-0 items-center xl:items-start xl:flex-row px-[16px] vsm:px-[20px] xmd:px-[50px] xl:pl-[80px]">
        <div className="z-[19] w-fit xl:w-[65%]">
          <p className="vsm:mx-auto xl:mx-0 w-fit py-[4px] px-[8px] vsm:px-[16.50px] vsm:pt-3.5 vsm:pb-[11px] bg-[#0A0B21] text-center rounded-xl border border-[#3B3B49] text-white text-[8px] vsm:text-base">
            Free and secure trading terminals
          </p>
          <h1 className="vsm:text-center xl:text-left mt-[3px] vsm:mt-[27px] mb-[12px] text-slate-300 text-[40px] vsm:text-6xl font-bold font-spaceGrotesk leading-[1.3] vsm:leading-[60px]">
            Paving The Way To Intelligent Crypto{" "}
            <span className="block vsm:inline">
              <span class="typed-text "></span>
              <span class="inline cursor blink">&nbsp;</span>
            </span>
          </h1>
          <p className="mb-[27px] w-full vsm:w-[85%] xmd:w-[60%] xl:w-fit mx-auto xl:mx-0 vsm:text-center xl:text-left text-white text-[16px] vsm:text-xl font-normal font-spaceGrotesk">
            Ace perpetual trading and stay ahead in the dynamic world of
            cryptocurrencies with FLEXBOT.
          </p>
          <a
            href="https://t.me/UseFlexBot"
            target="blank"
            className="z-[19] w-fit block vsm:mx-auto xl:mx-0 px-[41px] pt-4 pb-[15px] bg-[#AF3BC6] text-white rounded-[12px]"
          >
            Get Started
          </a>

          <div className="sponsors hidden mt-[32px] md:flex flex-col items-center xl:block">
            <p className="mb-[24px] text-fuchsia-50 text-opacity-90 text-base font-bold">
              Powered By
            </p>
            <div className="w-full xl:w-[70%] flex justify-center xl:justify-start flex-wrap gap-x-[20px] gap-y-[15px]">
              <a href="https://layerzero.network/" target="blank">
                <img className="w-[200px]" src={layerzeroImg} alt="sponsor" />
              </a>
              <a href="https://dydx.exchange/brand" target="blank">
                <img src={dydx} alt="sponsor" />
              </a>
              <a href="https://1inch.io/press-room/" target="blank">
                <img src={oneInch} alt="sponsor" />
              </a>
              <a
                href="https://github.com/arcana-network/branding/blob/main/README.md"
                target="blank"
              >
                <img src={arcana} alt="sponsor" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[45%] mt-[-130px] xl:mt-[-250px] ml-[-80px] xl:ml-[-100px]">
          <img src={heroImg} alt="hero image" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
