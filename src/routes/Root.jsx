import { AnimatePresence } from "framer-motion"
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Root = () => {
    const location = useLocation();
    return(
        <>
        <Navbar />
        <div></div>
        <div>
            <AnimatePresence>
            <ScrollRestoration />
            <Outlet key={location.pathname}/>
            </AnimatePresence>
        </div>
        <Footer />
        </>
    )
}

export default Root