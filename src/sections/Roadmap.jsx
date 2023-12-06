import React from "react";
import check from "../assets/checkIcon.svg";
import check2 from "../assets/checkIcon2.svg";

const roadmapData1 = [
  {
    title: "Product Beta",
    text: "Testing and refining the product for optimal performance.",
  },
  {
    title: "V1 launch",
    text: "Official release of the first version, introducing key features and functionalities.",
  },
  {
    title: "$flex launch",
    text: "Unveiling Flexbot's native token, adding a new dimension to the ecosystem.",
  },
  {
    title: "Staking program",
    text: "Introduction of a staking initiative, allowing users to earn passive income.",
  },
  {
    title: "Flex friends program",
    text: "A unique ambassador program fostering community growth and collaboration.",
  },
  {
    title: "Revenue sharing",
    text: "Implementation of a revenue-sharing model, rewarding users for their trading activity.",
  },
];

const roadmapData2 = [
  {
    title: "V2 launch",
    text: "Rollout of the second version, featuring enhanced capabilities and improvements.",
  },
  {
    title: "Buy back and burn",
    text: "A strategic move to increase token value by buying back and burning a portion of $FLEX.",
  },
  {
    title: "Flex DAO",
    text: "Introduction of Flex DAO, enabling community governance and decision-making.",
  },
  {
    title: "Web App",
    text: "Launch of a user-friendly web application, providing accessibility and convenience for a broader audience.",
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="roadmap w-full text-white px-[16px] vsm:px-[50px] xmd:px-[80px] pt-[20px]"
    >
      <h1 className="vsm:text-center text-[24px] vsm:text-[40px] font-bold leading-[60px]">
        Our Roadmap
      </h1>

      <div className="mt-[16px] vsm:mt-[60px] flex flex-col xl:flex-row gap-[30px] xl:gap-0 justify-between">
        <div className="left">
          <div className="flex gap-[8px] vsm:gap-[24px]">
            <div className="flex flex-col items-center">
              <img
                className="h-[32px] vsm:h-fit w-[32px] vsm:w-fit"
                src={check}
                alt="icon"
              />
              <div className="h-[40px] w-0 border-l-[1px] border-l-[#22B46B] border-dashed"></div>
            </div>
            <p className="text-[20px] vsm:text-2xl font-bold leading-[1.5] vsm:leading-[60px]">
              Q4 2023
            </p>
          </div>

          {roadmapData1.map((item, index) => (
            <div key={index} className="item w-fit ml-[4.5px] vsm:ml-[22px]">
              <div className="flex gap-[14px] vsm:gap-[50px]">
                <div className="w-6 h-6 bg-[#22B46B] rounded-full"></div>
                <h1 className="text-[16px] vsm:text-xl font-bold">
                  {item.title}
                </h1>
              </div>
              <div className="mt-[-5px] ml-[11.5px] pl-[26px] vsm:pl-[60px] py-[15px] border-l-[1px] border-l-[#22B46B] border-dashed">
                <p className="w-fit md:w-[400px] text-white text-[14px] vsm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="right">
          <div className="flex gap-[8px] vsm:gap-[24px]">
            <div className="flex flex-col items-center">
              <img
                className="h-[32px] vsm:h-fit w-[32px] vsm:w-fit"
                src={check2}
                alt="icon"
              />
              <div className="h-[40px] w-0 border-l-[1px] border-l-[#546B60] border-dashed"></div>
            </div>
            <p className="text-[20px] vsm:text-2xl font-bold leading-[1.5] vsm:leading-[60px]">
              Q1 2024
            </p>
          </div>

          {roadmapData2.map((item, index) => (
            <div key={index} className="item w-fit ml-[4.5px] vsm:ml-[22px]">
              <div className="flex gap-[14px] vsm:gap-[50px]">
                <div className="w-6 h-6 bg-[#546B60] rounded-full"></div>
                <h1 className="text-[16px] vsm:text-xl font-bold">
                  {item.title}
                </h1>
              </div>
              <div className="mt-[-5px] ml-[11.5px] pl-[26px] vsm:pl-[60px] py-[15px] border-l-[1px] border-l-[#546B60] border-dashed">
                <p className="w-fit md:w-[400px] text-white text-[14px] vsm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
