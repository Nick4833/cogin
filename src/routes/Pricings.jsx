import { page } from "../animations/pageTrans";
import Plans from "../components/Pricing/Plans";
import { motion } from "framer-motion"

const Pricings = () => {
  return (
    <motion.div className="App flex flex-col gap-10 p-6 md:p-20" variants={page} initial="hidden" animate="visible">
      <div className="p-6 md:p-20 flex flex-col gap-12 mt-20 md:mt-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          PLANS &{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
            PRICINGS
          </span>
        </h1>
      </div>
      <Plans />
    </motion.div>
  );
};

export default Pricings;
