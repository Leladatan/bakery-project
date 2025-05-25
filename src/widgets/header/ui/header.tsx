"use client";

import {Fragment} from "react";
import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 bg-black/40 backdrop-filter backdrop-saturate-150"
            style={{ backdropFilter: "none" }} // optional: remove blur if you want
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1
                    className="text-white text-4xl lg:text-5xl font-light tracking-wider"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Gustoso
                </h1>
            </motion.div>

            {/* Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex items-center space-x-12"
            >
                {["WELCOME", "MENU", "RESERVATIONS", "NEWS", "CONTACT"].map((item, index, arr) => (
                    <Fragment key={item}>
                        <motion.a
                            href="#"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className="text-white text-sm font-light tracking-[0.2em] hover:text-white/80 transition-colors duration-300"
                        >
                            {item}
                        </motion.a>
                        {index < arr.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="text-white text-sm font-light tracking-[0.2em] select-none"
                                style={{ userSelect: "none" }}
                            >
                    &nbsp;~&nbsp;
                </span>
                        )}
                    </Fragment>
                ))}
            </motion.nav>


            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center space-x-4"
            >
                {[Twitter, Facebook, Instagram].map((Icon, index) => (
                    <motion.a
                        key={index}
                        href="#"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-white/80 transition-colors duration-300"
                    >
                        <Icon size={20} />
                    </motion.a>
                ))}
            </motion.div>
        </motion.header>
    );
};

export default Header;
