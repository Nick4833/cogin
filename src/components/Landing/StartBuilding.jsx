import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";

const StartBuilding = () => {
  return (
    <motion.div
      className="text-center p-6 flex flex-col items-center justify-center gap-10 my-5"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-semibold text-4xl md:text-7xl max-w-[400px] md:leading-[80px] md:max-w-[900px]"
        variants={item}
      >
        Start{" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
          Building
        </span>{" "}
        with Us Today
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
        <motion.a href="/pricings" variants={item}>
          <button className="w-[250px] md:w-[250px] font-medium border-2 p-3 text-lg border-white hover:border-yellow-300 rounded-md transition-all hover:text-yellow-300">
            Try 1 month for $69.99
          </button>
        </motion.a>
        <motion.a
          href="https://www.jicoo.com/en/t/iYI_G2yk9eep/e/cogin-demo"
          target="_blank"
          variants={item}
        >
          <button className="w-[250px] md:w-[220px] font-medium p-3 rounded-lg bg-yellow-300 text-black transition-all hover:translate-y-[-5px]">
            Book A Demo
          </button>
        </motion.a>
      </div>
      <div className="flex flex-col lg:flex-row">
        <motion.img
          src="./13.webp"
          className="rounded-lg w-[400px] h-[300px]"
          variants={item}
          alt="example1"
        />
        <motion.img
          src="./14.webp"
          className="relative top-[-100px] lg:top-0 lg:left-[-50px] rounded-lg w-[400px] h-[300px]"
          variants={item}
          alt="example2"
        />
      </div>
    </motion.div>
  );
};

export default StartBuilding;
