"use client";

import { motion } from "framer-motion";

const ArtOfCakesSection = () => {
    return (
        <section className="relative bg-[#f5f1eb] py-20 lg:py-32">
            <div className="container mx-auto px-8 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Section Heading - Centered */}
                        <div className="space-y-4 text-center">
                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-4xl lg:text-5xl text-[#4a4a4a] font-bold"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                Art of cakes
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl text-[#8b7355] font-bold tracking-[0.1em] uppercase"
                            >
                                WE CREATE DELICIOUS MEMORIES
                            </motion.p>
                        </div>

                        {/* Description Text - Centered */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-[#4a4a4a] leading-relaxed text-base lg:text-lg font-light text-center"
                        >
                            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
                            sit amet adipiscing sem neque sed.
                        </motion.p>

                        {/* Chef Testimonial */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center space-y-6 pt-8"
                        >
                            <h4 className="text-[#4a4a4a] text-xl font-bold text-center">Chef Cook</h4>

                            <div className="flex items-center justify-center space-x-8">
                                <span className="text-[#4a4a4a] font-bold tracking-wider px-8 py-4 border-y-1  border-[#4a4a4a]/40">Benito</span>
                                <div className="w-32 h-32 rounded-full overflow-hidden">
                                    <img src="/chef-photo.jpg" alt="Chef" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[#4a4a4a] font-bold tracking-wider px-8 py-4 border-y-1  border-[#4a4a4a]/40">Gaspare</span>
                            </div>

                            <div className="text-center relative">
                                <span className="text-4xl text-[#d4c4a8] absolute -top-4 -left-4">&#34;</span>
                                <p
                                    className="text-[#c4a882] italic text-lg font-light px-8"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Unique creations for unique occasions.
                                </p>
                                <span className="text-4xl text-[#d4c4a8] absolute -bottom-4 -right-4">&#34;</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Food Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative max-w-xl w-full">
                            <img src="/food-collage.png" alt="Delicious pastries and desserts collage" className="w-full h-auto" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ArtOfCakesSection;