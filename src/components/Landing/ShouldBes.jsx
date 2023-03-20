import simple from "../../lotties/simple.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";
import ShouldBox from "./Boxes/ShouldBox";



const ShouldBes = () => {
  const shoulds = [
    "No more finding designers",
    "No unvetted designers",
    "No scrolling through hundreds of portfolios",
    "No conducting hundreds of interviews",
    "No more wasted hours training",
  ];
  return (
    <motion.div
      className="flex px-6 md:p-20 flex-col gap-10" variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}
    >
      <motion.h3 className="font-semibold md:leading-[60px] text-4xl max-w-[500px]" variants={item}>
        Your Design process should be{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
          simple
        </span>
        .
      </motion.h3>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div className="flex flex-col gap-10 order-last lg:order-first" variants={item}>
          <Player
            autoplay
            loop
            src={simple}
            style={{ padding: 0, margin: 0, position: "relative" }}
            className="absolute"
          ></Player>
        </motion.div>
        <div className="flex flex-col gap-5">
          {shoulds.map((should, index) => (
            <ShouldBox text={should} key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ShouldBes;
