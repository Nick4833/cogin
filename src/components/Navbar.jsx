import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { id: "/work", title: "Our Work" },
    { id: "/process", title: "Our Process" },
    { id: "/pricings", title: "Pricings" },
    { id: "/about", title: "About Us" },
  ];

  const Navlink = ({ link }) => {
    return (
      <li
        className={`hover:text-[#fafa93] font-medium text-lg transition-all ${
          link.id === active && "text-yellow-500"
        }`}
      >
        <Link to={`${link.id}`} onClick={() => setActive(link.id)}>
          {link.title}
        </Link>
      </li>
    );
  };

  const NavlinkMobile = ({ link }) => {
    return (
      <motion.li
        className="font-medium text-xl border-b-2 border-b-white p-2"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, color: "#fafa93" }}
        onClick={() => setToggle(false)}
      >
        <Link to={`${link.id}`}>{link.title}</Link>
      </motion.li>
    );
  };

  return (
    <>
      <nav className="fixed flex justify-between p-6 md:px-20 w-full bg-primary bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 z-20">
        <Link
          className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600"
          to="/"
          onClick={() => setActive("")}
        >
          Cogin
        </Link>
        <ul className="list-none gap-10 hidden lg:flex">
          {links.map((link, index) => (
            <Navlink key={index} link={link} />
          ))}
        </ul>
        {toggle ? (
          <button
            aria-label="close"
            className="lg:hidden text-xl"
            onClick={() => setToggle(false)}
          >
            <RiCloseFill />
          </button>
        ) : (
          <button className="lg:hidden text-xl" aria-label="menu" onClick={() => setToggle(true)}>
            <RiMenu5Line />
          </button>
        )}
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="menu"
            className="px-6 pt-20 fixed flex flex-col gap-10 items-stretch top-0 min-h-full w-full z-10 bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="list-none flex flex-col gap-10 self-stretch">
              {links.map((link, index) => (
                <NavlinkMobile key={index} link={link} />
              ))}
            </ul>
            <a
            href="https://www.jicoo.com/en/t/iYI_G2yk9eep/e/cogin-demo"
            target="_blank"
            className="w-full md:w-fit"
          >
            <button aria-label="demo" className="mt-10 font-medium p-3 rounded-lg bg-yellow-300 text-black transition-all hover:translate-y-[-5px]">
              Book A Demo
            </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
