import * as React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import "../../../node_modules/react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "./useDrag";
import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";
import ProjectBox from "./Boxes/ProjectBox";



const Projects = ({plan, price, cards}) => {
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <motion.div className="flex flex-col gap-5 pt-5" variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
      <div className="flex flex-col gap-10">
        <motion.h3 className="font-semibold text-3xl  px-6 md:px-20 md:py-6" variants={item}>
          {plan} Plan -{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
            ${price}
          </span>
          <span className="font-medium text-sm ml-1">/Month</span>
        </motion.h3>
        <div>
          <ScrollMenu
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {cards.map((card, index) => (
              <ProjectBox key={index} title={card} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
