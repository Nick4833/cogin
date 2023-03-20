import "./App.css";
import Hero from "./components/Landing/Hero";
import Services from "./components/Landing/Services";
import Projects from "./components/Landing/Projects";
import ShouldBes from "./components/Landing/ShouldBes";
import Feedback from "./components/Landing/Feedback";
import StartBuilding from "./components/Landing/StartBuilding";
import { page } from "./animations/pageTrans";
import { motion } from "framer-motion";

const App = () => {
  const lightCards = [
    "./1.webp",
    "./2.webp",
    "./3.webp",
    "./4.webp",
    "./5.webp",
    "./6.webp",
  ];
  const proCards = [
    "./7.webp",
    "./8.webp",
    "./9.webp",
    "./10.webp",
    "./11.webp",
    "./12.webp",
  ];
  

  return (
      <motion.div
        className="App flex flex-col gap-10"
        variants={page}
        initial="hidden"
        animate="visible"
      >
        <Hero />
        <Services />
        <div className="flex flex-col gap-10">
          <Projects plan={"LIGHT"} price={"399"} cards={lightCards} />
          <Projects plan="PRO" price="599" cards={proCards} />
        </div>
        <ShouldBes />
        <Feedback />
        <StartBuilding />
      </motion.div>
  );
};

export default App;
