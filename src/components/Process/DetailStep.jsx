import { container, item } from "../../animations/pageTrans";
import { motion } from "framer-motion";

const DetailStep = ({ detail, index }) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 my-20 lg:my-24 gap-20 items-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-10 leading-loose">
        <motion.h2
          className="font-semibold text-4xl lg:text-5xl"
          variants={item}
        >
          {detail.title}
        </motion.h2>
        <motion.p className="text-normal max-w-[30em]" variants={item}>
          {detail.firstP}
          <br /> <br />
          {detail.secondP}
        </motion.p>
      </div>
      <motion.div
        className={`${
          index % 2 === 0
            ? "lg:self-start lg:justify-self-start lg:order-first"
            : "lg:self-start lg:justify-self-end lg:order-last"
        } relative order-first`}
        variants={item}
      >
        <img
          src={detail.img}
          className="rounded-xl w-full h-full"
          alt={detail.title}
        />
        <div className="absolute w-full h-full top-5 right-[-20px] -z-10 rounded-xl border-2 border-white" />
      </motion.div>
    </motion.div>
  );
};

export default DetailStep;
