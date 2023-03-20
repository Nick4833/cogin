
import { motion } from "framer-motion";
import { item } from "../../../animations/pageTrans";

const ProjectBox = ({ title }) => {

    return (
      <motion.div
        role="button"
        style={{
          display: "inline-block",
          margin: "0 10px",
          width: "400px",
          height: "300px",
          userSelect: "none",
        }}
        tabIndex={0}
        className="card overflow-hidden"
        variants={item}
      >
            <img src={title} draggable={false} className="rounded-lg w-[400px] h-[300px]" alt={title}/>
      </motion.div>
    );
  }

  export default ProjectBox