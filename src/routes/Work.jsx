import WorkGallery from "../components/Work/WorkGallery";
import StartBuilding from "../components/Landing/StartBuilding"
import { motion } from "framer-motion";
import { page } from "../animations/pageTrans";

const Work = () => {
  return (
    <motion.div className="App flex flex-col gap-36 items-center p-6 md:p-20" variants={page} initial="hidden" animate="visible">
      <div className="flex flex-col gap-12 mt-20 md:mt-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold max-w-[900px] leading-normal lg:leading-normal">
          Explore the infinite possibilities of{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
            Cogin
          </span>
        </h1>
      </div>

      <WorkGallery />
      <StartBuilding />
    </motion.div>
  );
};

export default Work;
