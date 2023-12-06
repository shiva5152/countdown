import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full pt-[44px] vsm:pt-[130px] pb-[50px] vsm:pb-[120px] px-[16px] vsm:px-[50px] xmd:px-[80px] flex flex-col xl:flex-row gap-[40px] xl:gap-0 justify-between text-white"
    >
      <div>
        <h1 className="text-[40px] vsm:text-[90px] font-bold leading-[1.2] vsm:leading-[90px]">
          Flexbot
        </h1>
        <p className="mt-[4px] vsm:mt-[16px] w-full md:w-[477px] text-white text-[12px] vsm:text-base">
          Flexbot is a multichain perpetual trading bot powered by Synthetix,
          dydx and GMX utilizing AI gem scanning for optimal trading outcomes
        </p>
      </div>

      <div className="links flex flex-col xmd:flex-row gap-[20px] vsm:gap-[50px]">
        <ul>
          <p>Community</p>
          <li>
            <a href="https://twitter.com/" target="blank">
              Twitter
            </a>
          </li>
          {/* <li>
            <a href="#" target="blank">
              Reddit
            </a>
          </li> */}
          {/* <li>
            <a href="https://medium.com/@flexbot" target="blank">
              Medium
            </a>
          </li>
          <li>
            <a href="#" target="blank">
              Discord
            </a>
          </li> */}
          <li>
            <a href="https://t.me/FlexBotChat" target="blank">
              Telegram
            </a>
          </li>
        </ul>
        <ul>
          <p>Documentation</p>
          <li onClick={() => alert("Coming soon")}>Whitepaper</li>
          <li onClick={() => alert("Coming soon")}>Feedback</li>
        </ul>
        <ul>
          <p>Information</p>

          <li>
            <ScrollLink to="about" smooth={true} duration={1000}>
              About us
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="features2" smooth={true} duration={1000}>
              FAQs
            </ScrollLink>
          </li>
          <li onClick={() => alert("Coming soon")}>Buy $FLEXBOT</li>
          <li onClick={() => alert("Coming soon")}>Stake $FLEXBOT</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
