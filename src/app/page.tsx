import Hero from "./components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen _hero p-[20px] md:py-12  md:px-24 relative  overflow-x-hidden sm:overflow-y-hidden ">
      <Hero />

      <img
        className="absolute max-h-[500px] sm:bottom-[0] sm:right-[5%] bottom-[-20%] right-[0]"
        src={"/image/robo-1.png"}
        alt=""
      />
    </section>
  );
}
