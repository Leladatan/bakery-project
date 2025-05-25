"use client";

import { motion } from "framer-motion";
import {ingredients} from "@/views/main/sandwich/const";

import {Button} from "@/shared/components/ui/button";

const SandwichSection = () => {
    return (
        <section className="relative bg-[#f5f1eb] py-20 lg:py-32">
            <div className="container mx-auto px-8 lg:px-16">
                {/* Header with SVG Pattern */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    {/* SVG Pattern at the top */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <img
                            src="/pattern-burger-bg.svg"
                            alt="Decorative pattern"
                            className="w-full max-w-md mx-auto opacity-30"
                        />
                    </motion.div>

                    {/* Title and Subtitle */}
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl text-[#4a4a4a] font-bold mb-4"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        The Jibarito sandwich
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-md text-[#8b7355] font-bold tracking-[0.1em] uppercase"
                    >
                        THE BEST SANDWICH YOU&#39;VE EVER TASTED!
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Side - Ingredients */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {ingredients.map((ingredient, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
                                    <img
                                        src={ingredient.image || "/placeholder.svg"}
                                        alt={ingredient.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4
                                    className="text-2xl text-[#8b7355] font-bold"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    {ingredient.title}
                                </h4>
                                <p className="text-[#8b7355] text-sm font-light leading-relaxed max-w-xs">{ingredient.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side - Sandwich Image with Timing Blocks */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* White Frame Container - Made Much Larger */}
                        <div className="bg-white p-3 rounded-lg shadow-xl relative max-w-4xl w-full">
                            <img
                                src="/burger.png"
                                alt="The Jibarito sandwich"
                                className="w-full h-[550px] object-cover rounded-lg"
                            />

                            {/* Full Recipe Button - Moved to far edge with dashed border */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-5 -left-6"
                            >
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="py-6 px-8 bg-white border-dashed border-2 border-[#c4a882] text-[#c4a882] hover:bg-[#c4a882] hover:text-white transition-all duration-300 text-sm font-light tracking-[0.2em] uppercase"
                                >
                                    FULL RECIPE
                                </Button>
                            </motion.div>
                        </div>

                        {/* Timing Blocks - Much larger and extending beyond image bounds */}
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-0">
                            {/* PREP Block */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white/80 backdrop-blur-sm p-6 shadow-lg text-center w-52 h-52 flex flex-col justify-center"
                            >
                                <p className="text-md text-[#8b7355] font-bold tracking-wider uppercase mb-2">PREP</p>
                                <p
                                    className="text-5xl text-[#8b7355] font-bold"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    15
                                </p>
                                <p className="text-sm text-[#8b7355] font-light">mins</p>
                            </motion.div>

                            {/* COOK Block */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white/80 backdrop-blur-sm p-6 shadow-lg text-center w-52 h-52 flex flex-col justify-center"
                            >
                                <p className="text-md text-[#8b7355] font-bold tracking-wider uppercase mb-2">COOK</p>
                                <p
                                    className="text-5xl text-[#8b7355] font-bold"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    35
                                </p>
                                <p className="text-sm text-[#8b7355] font-light">mins</p>
                            </motion.div>

                            {/* READY IN Block with Pattern */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="relative bg-white p-6 shadow-lg text-center w-52 h-52 flex flex-col justify-center overflow-hidden"
                            >
                                {/* Pattern Background */}
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: "url('/pattern-bg.svg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />
                                <div className="relative z-10">
                                    <p className="text-md text-[#c4a882] font-bold tracking-wider uppercase mb-2">READY IN</p>
                                    <p
                                        className="text-5xl text-[#c4a882] font-bold"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        50
                                    </p>
                                    <p className="text-sm text-[#c4a882] font-light">mins</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SandwichSection;