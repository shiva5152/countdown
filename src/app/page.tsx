import Hero from "./components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen _hero p-[20px] md:py-12  md:px-24 relative  overflow-x-hidden sm:overflow-y-hidden ">
      <Hero />

      <img
        className="absolute max-h-[50vh] sm:max-h-[75vh] bottom-[0] right-[10px] sm:right-[5%]"
        src={"/image/robo-1.png"}
        alt=""
      />
    </section>
  );
}
