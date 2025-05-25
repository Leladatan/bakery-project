"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

const HeroSection = () => {
    return (
        <section className="min-h-screen relative overflow-hidden">
            {/* Background Image with darker overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero-bg.png')",
                }}
            >
                {/* Darker gray overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-8 text-center">
                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    className="text-white text-6xl lg:text-8xl xl:text-9xl font-light mb-8 leading-tight tracking-wide"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Pastry with love
                </motion.h2>

                {/* Decorative dots */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="flex space-x-2 mb-8"
                >
                    {[...Array(7)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 2 + i * 0.1 }}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    ))}
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="text-white text-lg lg:text-xl font-light mb-12 max-w-2xl leading-relaxed tracking-wide"
                >
                    We&#39;re bringing you fresh ingredients every day in ways you can&#39;t
                    resist
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-sm font-light tracking-[0.2em]"
                    >
                        OUR MENU
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
