import React from "react";
import icon1 from "../assets/feature1.svg";
import icon2 from "../assets/feature2.svg";
import icon3 from "../assets/feature3.svg";
import icon4 from "../assets/feature4.svg";
import icon5 from "../assets/feature5.svg";
import icon6 from "../assets/feature6.svg";
import featureImg from "../assets/featureImg.png";
import featureImg2 from "../assets/featureImg2.png";
import featureImg3 from "../assets/featureImg3.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const Features = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);

  return (
    <section
      id="features"
      className="features w-full pt-[31px] pb-[56px] px-[16px] vsm:px-0 text-white"
    >
      <h1 className="w-fit text-center mx-auto px-[16px] vsm:px-[31.50px] py-[8px] vsm:py-3.5 rounded-[12px] bg-[#0A0B21] border border-[#3B3B49] text-[32px] vsm:text-[40px] font-bold">
        Our Features
      </h1>

      <div className="w-full vsm:w-[80%] mx-auto h-fit xl:h-[855px] mt-[25px] relative flex flex-col items-center gap-[30px] xl:block">
        <div className="featureBox xl:absolute top-0 xl:left-[50%] xl:translate-x-[-50%]">
          <MdKeyboardArrowRight
            onClick={() => setBox1((prev) => !prev)}
            className="block vsm:hidden absolute text-[34px] top-[px] right-[10px] text-white"
          />
          <img src={icon1} alt="icon" />
          <h1>Perpetual Trading</h1>
          <p
            className={`${
              box1 ? "h-[70px] vsm:h-fit" : "h-0 vsm:h-fit"
            } duration-300 overflow-hidden`}
          >
            Powered by DyDx, Synthetix, and GMX, Flexbot ensures uninterrupted
            and reliable perpetual trading, allowing you to capitalize on market
            opportunities with confidence.
          </p>
        </div>

        <div className="featureBox xl:absolute top-[30%] left-0">
          <MdKeyboardArrowRight
            onClick={() => setBox2((prev) => !prev)}
            className="block vsm:hidden absolute text-[34px] top-[5px] right-[10px] text-white"
          />
          <img src={icon2} alt="icon" />
          <h1>Precise token snipping</h1>
          <p
            className={`${
              box2 ? "h-[70px] vsm:h-fit" : "h-0 vsm:h-fit"
            } duration-300 overflow-hidden`}
          >
            The automated token snipping feature empowers you to act decisively,
            seizing profitable opportunities the moment they arise.
          </p>
        </div>

        <div className="featureBox xl:absolute top-[30%] right-0">
          <MdKeyboardArrowRight
            onClick={() => setBox3((prev) => !prev)}
            className="block vsm:hidden absolute text-[34px] top-[5px] right-[10px] text-white"
          />
          <img src={icon3} alt="icon" />
          <h1>Revenue Sharing</h1>
          <p
            className={`${
              box3 ? "h-[70px] vsm:h-fit" : "h-0 vsm:h-fit"
            } duration-300 overflow-hidden`}
          >
            Earn more with Flexbot. Get 69% of the net fees generated back in
            your pocket while making sure your success is rewarded.
          </p>
        </div>

        <div className="featureBox xl:absolute top-[60%] left-0">
          <MdKeyboardArrowRight
            onClick={() => setBox4((prev) => !prev)}
            className="block vsm:hidden absolute text-[34px] top-[5px] right-[10px] text-white"
          />
          <img src={icon4} alt="icon" />
          <h1>Copy Trading</h1>
          <p
            className={`${
              box4 ? "h-[90px] vsm:h-fit" : "h-0 vsm:h-fit"
            } duration-300 overflow-hidden`}
          >
            Effortlessly Emulate Expert Strategies by replicating expert
            strategies of seasoned traders. Flexbot enables you to replicate
            expert strategies effortlessly while enhancing your.
          </p>
        </div>

        <div className="featureBox xl:absolute top-[60%] right-0">
          <MdKeyboardArrowRight
            onClick={() => setBox5((prev) => !prev)}
            className="block vsm:hidden absolute text-[34px] top-[5px] right-[10px] text-white"
          />
          <img src={icon5} alt="icon" />
          <h1>Referral system</h1>
          <p
            className={`${
              box5 ? "h-[70px] vsm:h-fit" : "h-0 vsm:h-fit"
            } duration-300 overflow-hidden`}
          >
            Grow with Flexbot and earn together. Enjoy a 6.9% discount on
            transaction fees for your referees, while receiving 69% of their
            transaction fees as a referral bonus.
          </p>
        </div>

        <div className="featureBox xl:absolute bottom-0 xl:left-[50%] xl:translate-x-[-50%]">
          <MdKeyboardArrowRight
            onClick={() => setBox6((prev) => !prev)}
            className="block vsm:hidden absolute text-[34px] top-[5px] right-[10px] text-white"
          />
          <img src={icon6} alt="icon" />
          <h1>Airdrop Farming</h1>
          <p
            className={`${
              box6 ? "h-[70px] vsm:h-fit" : "h-0 vsm:h-fit"
            } duration-300 overflow-hidden`}
          >
            Earn rewards by participating in airdrops and amplify your profits
            while diversifying your crypto portfolio effortlessly.
          </p>
        </div>

        <img
          className="hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={featureImg3}
          alt="gradient"
        />
        <img
          className="hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={featureImg2}
          alt="gradient"
        />
        <img
          className="hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={featureImg}
          alt="feature robot"
        />
      </div>
    </section>
  );
};

export default Features;

const featuresData = [];
