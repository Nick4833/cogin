import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";

const Number = ({title, amount}) => {
    return(
      <motion.div className="flex flex-col gap-5 text-center lg:text-left" variants={item}>
        <p className="max-w-[400px]">{title}</p>
        <p className="text-8xl font-bold">{amount}</p>
      </motion.div>
    )
}
  
const Mission = () => {
  const numbers = [
    {
      title: "Websites deployed since we've started our company.",
      amount: "200+"
    },
    {
      title: "Companies we have helped since the start of our company.",
      amount: "1000+"
    },
    {
      title: "Our work that has been awarded across different services.",
      amount: "20+"
    }
  ]

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
    <div className="grid grid-cols-1 lg:grid-cols-2 text-left gap-10 w-full">
      <motion.h1 className="text-5xl font-medium self-start justify-self-start" variants={item}  whileInView="visible" viewport={{once: true}}>
        Your Idea, Our Design.
      </motion.h1>
      <div className="flex flex-col gap-10">
      <motion.p className="self-start max-w-[500px] justify-self-start text-xl font-medium leading-loose" variants={item}  whileInView="visible" viewport={{once: true}}>
        Building a great website has never been easier. But choosing the right
        company for the job is, somehow, harder than ever.
      </motion.p>
      <motion.p className="leading-loose max-w-[30em]" variants={item}  whileInView="visible" viewport={{once: true}}>
        In 2003 Jay Eckert founded a small web design practice in Toronto,
        Ontario. For the next five years, Jay handled everything from design to
        development independently. In 2008 Jay began to build a team of creative
        web designers, rebranding the growing best Toronto web design company as
        Parachute Design. With a larger, more specialized team of creative
        professionals, Parachute continues to enjoy growth and success in the
        Toronto web design market by crafting hand-made solutions for our
        clients. Over the last eighteen years, Parachute has had the opportunity
        to work with many great clients of all shapes and sizes in just about
        every industry imaginable.
      </motion.p>
      </div>
    </div>
    
    <motion.div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-20 border-t-2 border-gray-300 w-full py-10 mt-20"
    variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
    {
      numbers.map((number, index) => (
        <Number key={index} title={number.title} amount={number.amount}/>
      ))
    }
    </motion.div>
    </motion.div>
  );
};

export default Mission;
