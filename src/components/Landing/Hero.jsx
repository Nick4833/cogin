import { MdWeb } from "@react-icons/all-files/md/MdWeb";
import { MdSecurity } from "@react-icons/all-files/md/MdSecurity";
import { BiBookContent } from "@react-icons/all-files/bi/BiBookContent";
import { BiDiamond } from "@react-icons/all-files/bi/BiDiamond";
import { motion } from "framer-motion";
import {container, item} from "../../animations/pageTrans"
import ServiceBox from "./Boxes/ServiceBox";

const Hero = () => {
  const services = [
    {
      icon: <MdWeb className="text-3xl" />,
      text: "Workspace for Buyers & Customers",
    },
    {
      icon: <BiBookContent className="text-3xl" />,
      text: "Content Management Systems",
    },
    {
      icon: <BiDiamond className="text-3xl" />,
      text: "Quotes & Order Forms",
    },
    {
      icon: <MdSecurity className="text-3xl" />,
      text: "Security Profiles",
    },
  ];


  
  return (
    <div className="p-6 md:p-20 flex flex-col gap-12 text-center mt-20 md:mt-20">
      <motion.div className="flex flex-col justify-center items-center gap-8" variants={container} initial="hidden" animate="visible">
        <motion.h1 className="font-bold text-4xl md:text-7xl max-w-[400px] md:leading-[80px] md:max-w-[900px]" variants={item}>
          All Your{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
            Design Needs
          </span>{" "}
          for a Fixed Monthly Rate
        </motion.h1>
        <motion.p className="max-w-[400px] md:max-w-[800px] md:text-lg" variants={item}>
          We match your business profile with an expert designer that is custom
          suited for your business.
        </motion.p>
        <div className="flex flex-col md:flex-row items-center gap-5 justify-center w-full">
          <motion.a href="/pricings" className="w-full md:w-fit" variants={item}>
            <button className="w-full md:w-[250px] font-medium border-2 p-3 text-lg border-white hover:border-yellow-300 rounded-md transition-all hover:text-yellow-300">
              Try 1 month for $69.99
            </button>
          </motion.a>
          <motion.a
            href="https://www.jicoo.com/en/t/iYI_G2yk9eep/e/cogin-demo"
            target="_blank"
            className="w-full md:w-fit"
            variants={item}
          >
            <button className="w-full md:w-[220px] font-medium p-3 text-lg rounded-lg bg-yellow-300 text-black transition-all hover:translate-y-[-5px]">
              Book A Demo
            </button>
          </motion.a>
        </div>
        <div className="grid text-left grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center justify-items-stretch mt-10 w-full">
          {services.map((service, index) => (
            <ServiceBox key={index} text={service.text} icon={service.icon} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
