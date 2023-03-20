import { motion } from "framer-motion";
import { item } from "../../animations/pageTrans";

const SimpleStep = ({ icon, desc }) => {
  return (
    <motion.div
      className="flex flex-col gap-5 text-center items-center justify-center p-10 bg-purple-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg"
      variants={item}
    >
      <p className="font-light text-7xl">{icon}</p>
      <p className="leading-loose text-lg max-w-[400px]">{desc}</p>
    </motion.div>
  );
};

export default SimpleStep;
