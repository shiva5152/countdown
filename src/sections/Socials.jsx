import React from "react";
import socialsImg from "../assets/socialsImg.png";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <section className="socials w-full mt-[120px] px-[20px] vsm:px-[50px] xmd:px-[80px] flex flex-col xl:flex-row justify-between text-white">
      <div className="w-full xl:w-[53%]">
        <h1 className="text-[24px] vsm:text-[40px] xmd:text-[60px] xl:text-[90px] vsm:text-center xl:text-left font-bold leading-[1.2] xl:leading-[90px]">
          Tag along our Trading Journey!
        </h1>
        <p className="vsm:mx-auto xl:mx-0 md:w-[70%] xl:w-fit my-[16px] text-[12px] vsm:text-2xl vsm:text-center xl:text-left">
          Stay subscribed to our trading community and be a part of our mission.
        </p>

        <img className="hidden xl:block" src={socialsImg} alt="robot" />
      </div>

      <div className="mt-[30px] xl:mt-0 mx-auto xl:mx-0 md:w-[40%] flex flex-col gap-[24px]">
        <div className="social">
          <FaTwitter className="text-[#55ACEE]" />
          <h1>Twitter</h1>
          <p>Tweet to us @handle and be a part of our twitter community.</p>
        </div>
        <div className="social">
          <FaTelegramPlane className="text-[#2AABEE]" />
          <h1>Telegram</h1>
          <p>
            Be a part of our magnificent telegram community & get updated about
            the latest happenings.
          </p>
        </div>
        <div className="social">
          <FaDiscord className="text-[#5865F2]" />
          <h1>Discord</h1>
          <p>
            Need clarifications regarding our trading bot? Join our server now!
          </p>
        </div>
        <div className="social">
          <FaMedium />
          <h1>Medium</h1>
          <p>Hassle-free access to our latest blogs.</p>
        </div>
      </div>
    </section>
  );
};

export default Socials;
