"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="relative bg-[#f5f1eb] py-16">
            <div className="container mx-auto px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Footer Content - Three Columns with fixed center width */}
                    <div
                        className="grid items-center mb-8 gap-8 lg:gap-16"
                        style={{
                            gridTemplateColumns: "1fr 200px 1fr",
                        }}
                    >
                        {/* Left Menu */}
                        <motion.nav
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap items-center justify-center gap-4 px-4 py-6 border-y border-[#4a4a4a]/40"
                        >
                            {["OUR MENU", "GALLERY", "CULTURE"].map((item, index, array) => (
                                <div key={item} className="flex items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[#4a4a4a] text-sm font-light tracking-[0.2em] hover:text-[#4a4a4a]/80 transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                    {index < array.length - 1 && <span className="text-[#4a4a4a] mx-4">~</span>}
                                </div>
                            ))}
                        </motion.nav>

                        {/* Center Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2
                                className="text-[#4a4a4a] text-4xl lg:text-5xl font-light tracking-wider"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                Gustoso
                            </h2>
                        </motion.div>

                        {/* Right Menu */}
                        <motion.nav
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap items-center justify-center gap-4 px-4 py-6 border-y border-[#4a4a4a]/40"
                        >
                            {["EVENTS", "CATERING", "VISIT US"].map((item, index, array) => (
                                <div key={item} className="flex items-center justify-center">
                                    <Link
                                        href="#"
                                        className="text-[#4a4a4a] text-sm font-light tracking-[0.2em] hover:text-[#4a4a4a]/80 transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                    {index < array.length - 1 && <span className="text-[#4a4a4a] mx-4">~</span>}
                                </div>
                            ))}
                        </motion.nav>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
