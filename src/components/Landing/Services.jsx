import astro from "../../lotties/loader.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";

const Services = () => {
  return (
    <motion.div
      className="flex flex-col gap-10 px-6 lg:px-32 md:gap-1"
      variants={container}
      viewport={{once: true}}
      initial="hidden"
      whileInView="visible"
    >
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center justify-center">
        <motion.div variants={item} className="order-last">
          <Player
            autoplay
            loop
            src={astro}
            height={100}
            width={100}
            style={{ padding: 0, margin: 0, position: "relative" }}
          ></Player>
        </motion.div>
        <div className="font-normal md:px-10 text-xl md:text-2xl leading-normal md:max-w-[500px]">
          <motion.h2 variants={item}>
            Finding a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
              Designer
            </span>{" "}
            is diffcult. Doing it over and over again for every new task? Nope.
            <br></br>
            <br></br>
          </motion.h2>
          <motion.h2 variants={item}>
            Just sit back and relax, while we do everything for you.
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
