import React from "react";
import icon1 from "../assets/abtIcon1.svg";
import icon2 from "../assets/abtIcon2.svg";
import oneInch from "../assets/1inch.svg";
import arcana from "../assets/arcana.svg";
import dydx from "../assets/dydx.svg";
import layerzeroImg from "../assets/layerzero.svg";

const About = () => {
  return (
    <section
      id="about"
      className="about relative w-full min-h-[100vh] overflow-hidden pt-[30px] vsm:pt-[164px] pb-[122px] px-[16px] vsm:px-[50px] xmd:px-[80px] text-white"
    >
      <div className="sponsors mt-[32px] mb-[93px] flex md:hidden flex-col items-center">
        <p className="mb-[24px] text-fuchsia-50 text-opacity-90 text-base font-bold">
          Powered By
        </p>
        <div className="w-full flex justify-center xl:justify-start flex-wrap gap-x-[20px] gap-y-[15px]">
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

      <p className="vsm:text-center text-[30px] vsm:text-[45px] font-bold leading-[1.2] vsm:leading-[60px]">
        Join the new wave of money
      </p>

      <div className="w-full h-[5%] absolute bottom-0 right-0">
        <div className="w-full h-[156px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[374.90px]" />
        <div className="w-full h-[156px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[374.90px]" />
        <div className="w-full h-[156px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[374.90px]" />
        <div className="w-full h-[156px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[374.90px]" />
        <div className="w-[85%] h-[121.20px] origin-top-left rotate-[-8.32deg] bg-gradient-to-r from-fuchsia-600 to-pink-400 rounded-full blur-[291.26px]" />
      </div>

      <div className="about-box relative w-full h-fit mt-[50px] md:mt-[146px] flex gap-[30px] xmd:gap-0 flex-col xmd:flex-row justify-between">
        <div className="py-[9px] vsm:py-[20px]">
          <img src={icon1} alt="icon" />
          <h1>All-in-One Comprehensive trading bot</h1>
          <p>
            Flexbot is your multichain perpetual trading bot powered by
            Synthetix, dydx and GMX utilizing AI gem scanning for optimal
            trading outcomes.  With an All-in-One comprehensive solution that
            enables you to outperform modern day crypto trading.
          </p>
        </div>
        <div className="pt-[9px] pb-[70px] vsm:py-[20px]">
          <img src={icon2} alt="icon" />
          <h1>Robust and Convenient</h1>
          <p>
            Flexbot is your Ultimate Companion for Robust and Convenient Crypto
            Trading! Flexbot enables you to trade anywhere at any time, at the
            best price leveraging its optimized trading features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
