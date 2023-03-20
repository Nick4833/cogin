import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";

export const Header = () => {
  return (
    <motion.div className="flex flex-col gap-10" variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-10 mt-20">
        <motion.h1 className="text-4xl md:text-5xl font-medium leading-normal" variants={item}>
          We help build bridges between Companies and Customers.
        </motion.h1>
        <motion.p className="self-end max-w-[500px] lg:justify-self-end leading-loose" variants={item}>
          To build websites and softwares that gives customer-facing teams at
          small and medium sized businesses the ability to create fruitful and
          enduring relationships with customers.
        </motion.p>
      </div>

      <motion.div className="w-full bg-gray-600 max-h-[500px] overflow-hidden" variants={item}>
        <img src="./about.jpg" className="w-full" alt="team members"/>
      </motion.div>
    </motion.div>
  );
};

export default Header;
