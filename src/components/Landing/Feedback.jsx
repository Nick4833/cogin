import Tilt from "react-parallax-tilt";
import FeedbackBox from "./Boxes/FeedbackBox";
import { motion } from "framer-motion";
import { container } from "../../animations/pageTrans";

const Feedback = () => {
  const feedbacks = [
    {name: "Malida Soinski", logo: "",text: "The Lattice team loves Dock! The platform streamlines the buying experience and empowers our champions."},
    {name: "Bob Mehta", logo: "",text: "My ultimate goal is to reduce the time-to-value for our customers, and using Dock allows us to get the right resources into the right hands—quickly."},
    {name: "Mindy Faverty", logo: "",text: "Our customer’s reaction to our Dock space: ‘Origin came through with the best onboarding resources I've ever seen."},
  ];
  return (
    <motion.div className="p-6 md:px-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center" variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
      {feedbacks.map((feedback, index) => (
        <Tilt  key={index} >
          <FeedbackBox text={feedback.text} logo={feedback.logo} name={feedback.name} />
        </Tilt>
      ))}
    </motion.div>
  );
};

export default Feedback;
