import Hero from "./components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen _hero p-[20px] md:py-12  md:px-24 relative  overflow-x-hidden overflow-y-hidden ">
      <Hero />

      <img
        className="absolute sm:h-[1000px] sm:bottom-[-30%] sm:right-[0] bottom-[-10%] right-[-15%]"
        src={"/image/robo.png"}
        alt=""
      />
      {/* <img
        className="absolute  sm:h-[1200px] sm:bottom-[-50%] sm:right-[-10%] top-[10%] right-[-15%] "
        src={"/image/robo.png"}
        alt=""
      /> */}
    </section>
  );
}
