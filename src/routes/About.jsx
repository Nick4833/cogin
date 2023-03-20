import { page } from "../animations/pageTrans"
import Header from "../components/About/Header"
import Mission from "../components/About/Mission"
import Team from "../components/About/Team"
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div className="App flex flex-col gap-36 items-center p-6 md:p-20" variants={page} initial="hidden" animate="visible">
            <Header />
            <Mission />
            <Team />
        </motion.div>
    )
}

export default About