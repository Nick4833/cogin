import { motion } from "framer-motion";
import { item } from "../../../animations/pageTrans";

const ServiceBox = ({ text, icon }) => {
  return (
    <motion.div
      className="lg:h-[100px] w-full font-medium p-3 flex items-center h-[75px] gap-5 bg-purple-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
          hover:bg-gradient-to-r from-yellow-500 to-pink-600 hover:translate-y-[-5px] transition-all cursor-pointer"
      variants={item}
    >
      {icon} <p className="max-w-[180px]">{text}</p>
    </motion.div>
  );
};

export default ServiceBox;
