import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiMartini } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { motion } from "framer-motion";

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    },
    hidden: {
        opacity: 0
    }
};

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const launchResearch = () => {
        if (searchTerm === "") {
            alert("You must provide an ingredient");
            return;
        }

        setToggleSearch((prevToggle) => !prevToggle);
        navigate(`/search/${searchTerm}`, { replace: true });
        setSearchTerm("");
    };

    return (
        <nav className="flex justify-between items-center px-8 py-4 lg:px-12">
            <Link to="/" className="flex items-center">
                <GiMartini className="w-6 h-6 md:w-8 md:h-8 text-white" />
                <h1 className="text-base text-white leading-none">Sippin</h1>
            </Link>

            <ul className="hidden md:flex gap-8 items-center">
                <Link to="/random">
                    <li className="text-base text-white">Random Cocktail</li>
                </Link>

                <li className="text-base text-white cursor-pointer" onClick={() => setToggleSearch((prevToggle) => !prevToggle)}>Search with Ingredient</li>
            </ul>

            <div onClick={() => setToggleMenu((prevToggle) => !prevToggle)} className="md:hidden space-y-1 cursor-pointer z-50">
                <motion.span animate={{ rotateZ: toggleMenu ? 45 : 0, y: toggleMenu ? 6 : 0, width: toggleMenu ? 20 : 24 }} className="block h-0.5 w-6 bg-white"></motion.span>
                <motion.span animate={{ width: toggleMenu ? 0 : 20 }} className="block h-0.5 w-5 bg-white"></motion.span>
                <motion.span animate={{ rotateZ: toggleMenu ? -45 : 0, y: toggleMenu ? -6 : 0, width: toggleMenu ? 20 : 16 }} className="block h-0.5 w-4 bg-white"></motion.span>
            </div>

            {toggleMenu ? (
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    className="md:hidden fixed bg-black left-0 bottom-0 w-full h-screen flex items-center justify-center z-40"
                >
                    <motion.div variants={navMotion} animate="visible" initial="hidden" className="flex flex-col gap-12 text-lg items-center text-white">
                        <motion.a variants={itemMotion} href="/">Home</motion.a>
                        <motion.a variants={itemMotion} href="/random">Random</motion.a>
                        <motion.span variants={itemMotion} onClick={() => {
                            setToggleMenu((prevToggle => !prevToggle));
                            setToggleSearch((prevToggle => !prevToggle));
                        }}>Search by Ingredient</motion.span>
                    </motion.div>
                </motion.div>
            ) : null}

            {toggleSearch ? (
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    className="fixed bg-black left-0 bottom-0 w-full h-screen flex flex-col gap-8 items-center justify-center px-8 py-4 lg:px-12 z-40"
                >
                    <h2 className="text-base md:text-xl font-bold text-white">Write one ingredient and get a cocktail recipe !</h2>
                    <div className="flex gap-4 items-center w-full md:w-1/2 py-4 px-8 bg-transparent border-2 border-white rounded-full">
                        <input
                            className="w-full text-white bg-transparent outline-none"
                            type="text"
                            placeholder="Ingredient"
                            autoFocus
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    launchResearch();
                                }
                            }}
                        />
                        <RiSearchLine className="w-6 h-6 text-white cursor-pointer" onClick={launchResearch} />
                    </div>

                    <span className="text-base text-white underline cursor-pointer" onClick={() => setToggleSearch((prevToggle) => !prevToggle)}>Close search</span>
                </motion.div>
            ) : null}
        </nav>
    );
};

export default Navbar;