"use client";
import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

const renderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Render a message when the countdown is complete
    return <span>Countdown Complete!</span>;
  } else {
    // Render the countdown elements
    return (
      <div className="text-[20px] sm:text-[28px] gap-1 sm:gap-3 flex flex-col sm:flex-row  leading-snug font-bold font-Orbitron">
        <span> {days} days, </span>
        <span> {hours} hours, </span>
        <span> {minutes} minutes, </span>
        <span> {seconds} seconds</span>
      </div>
    );
  }
};
const MyCountdown = () => {
  // Set the target date and time for the countdown
  const targetDate = new Date("December 31, 2023 23:59:59");

  // Define the renderer function to customize the appearance of the countdown

  return (
    <div className=" mt-12 relative z-10">
      {/* <h1 className="text-[36px] md:text-[64px] leading-snug font-bold font-Orbitron">
        Coming soon
      </h1> */}
      {/* Use the Countdown component with the target date and renderer function */}
      <Countdown date={targetDate} renderer={renderer} />
      {/* <img
        className="absolute top-[-100%] right-[-15%] "
        src={"/image/robo.png"}
        alt=""
      /> */}
    </div>
  );
};

export default MyCountdown;
