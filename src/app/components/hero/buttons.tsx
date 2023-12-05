import React from "react";

const Buttons = () => {
  return (
    <div className="relative">
      <div className="flex  z-10 justify-between mt-10 flex-col md:flex-row relative  ">
        <div className="flex justify-between  gap-6">
          <div className="flex flex-col mb-5 justify-between">
            {/* <button className="button-glow bg-[#8d2fe6] font-medium rounded-[50px] items-center  flex p-2">
              <span className=" bg-white rounded-full p-2">
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
              <span className="px-4">Get started</span>
            </button> */}
            {/* <button className="bg-white hidden md:block w-fit rounded-full p-2">
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
                  d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                />
              </svg>
            </button> */}
          </div>
        </div>
        {/* <div className="flex flex-row md:flex-col justify-items-end gap-3">
          <button className="border-2  border-white rounded-[50px] text-[10px] md:text-[16px] py-[8px] px-[16px] h-fit md:py-[12px] md:px-[24px]">
            Template
          </button>
          <button className="border-2  border-white rounded-[50px] text-[10px] md:text-[16px] py-[8px] px-[16px] h-fit md:py-[12px] md:px-[24px]">
            UI/UX Design
          </button>
          <button className="border-2  border-white rounded-[50px] text-[10px] md:text-[16px] py-[8px] px-[16px] h-fit md:py-[12px] md:px-[24px]">
            Website
          </button>
        </div> */}
        {/* <div className=" absolute blue-gradient -z-10 w-[100px] h-[100px]"></div> */}
      </div>
      {/* <div className=" z-0 absolute top-[50%] left-[20%] hero-glow w-0 h-0"></div> */}
    </div>
  );
};

export default Buttons;
