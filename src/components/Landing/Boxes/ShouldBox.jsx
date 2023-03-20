import { motion } from "framer-motion";
import { item } from "../../../animations/pageTrans";
import { RxCrossCircled } from "react-icons/rx";

const ShouldBox = ({ text }) => {
  return (
    <motion.div
      className="font-medium text-lg p-3 flex items-center h-[75px] gap-3 bg-purple-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
          transition-all"
      variants={item}
    >
      <RxCrossCircled className="text-2xl text-red-400" />
      <p>{text}</p>
    </motion.div>
  );
};

export default ShouldBox;
