
import { motion } from "framer-motion";
import { item } from "../../../animations/pageTrans";

const FeedbackBox = ({ logo, text, name, index }) => {
  return (
    <motion.div
      className={`w-full lg:h-[300px] grid gap-8 font-medium text-lg p-3 bg-purple-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
      transition-all items-start justify-start cursor-default ${index}`}
      variants={item}
    >
      <div className="self-center">
        <p>{logo}</p>
        <p>{text}</p>
      </div>
      <div className="self-end justify-self-start flex items-center gap-4">
        <img
          src="https://picsum.photos/400/300"
          className="w-[40px] h-[40px] rounded-full"
          alt="profile image of review"
        />{" "}
        <small>
          {name} <br /> “Senior Manager of Nio”
        </small>
      </div>
    </motion.div>
  );
};

export default FeedbackBox;
