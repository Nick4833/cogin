import StartBuilding from "../components/Landing/StartBuilding";
import Steps from "../components/Process/Steps";
import { motion, spring } from "framer-motion";
import { page } from "../animations/pageTrans";

const Process = () => {
  return (
    <motion.div className="App flex flex-col gap-20 items-center p-6 md:p-20" variants={page} initial="hidden" animate="visible">
      <div className="p-6 md:px-20 flex flex-col gap-12 mt-20 md:mt-10 text-center items-center">
        <h1 className="text-4xl leading-normal lg:text-6xl font-bold max-w-[900px] lg:leading-normal">
          GET{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
            HIGH END DESIGNS
          </span>
          WITH COGIN, WITH DAILY UPDATES
        </h1>
      </div>
      <Steps />
      <StartBuilding />
    </motion.div>
  );
};

export default Process;
