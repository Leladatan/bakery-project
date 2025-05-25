"use client";

import { motion } from "framer-motion";
import {pancakesData} from "@/views/main/tasty-pancakes/const";

import {ChevronLeft, ChevronRight } from "lucide-react";

import {useState} from "react";

const TastyPancakesSection = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % pancakesData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + pancakesData.length) % pancakesData.length);
    };

    return (
        <section
            className="relative py-32 lg:py-40 min-h-[120vh] flex items-center justify-center"
            style={{
                backgroundImage: "url('/tasty-pancakes-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container mx-auto px-8 lg:px-16">
                <div className="flex items-center justify-center">
                    {/* Unified Content Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 max-w-5xl mx-auto"
                    >
                        {/* Background Pattern */}
                        <div
                            className="absolute inset-0 opacity-10 rounded-2xl"
                            style={{
                                backgroundImage: "url('/pattern-bg.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />

                        {/* Timer Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="absolute -top-8 -right-8 z-10"
                        >
                            <div
                                className="bg-white rounded-lg shadow-lg p-4 text-center relative overflow-hidden"
                                style={{ width: "120px", height: "120px" }}
                            >
                                {/* Pattern Background for Timer */}
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
                                    <p className="text-xs text-[#c4a882] font-light tracking-wider uppercase mb-1">READY IN</p>
                                    <p
                                        className="text-4xl text-[#c4a882] font-light"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        {pancakesData[currentSlide].readyTime}
                                    </p>
                                    <p className="text-xs text-[#c4a882] font-light tracking-wider">mins</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-0">
                            {/* Left Side - Pancake Image with Vertical Stars */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="relative h-full"
                            >
                                <div className="relative w-full h-[500px]">
                                    <motion.img
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        src={pancakesData[currentSlide].image}
                                        alt={pancakesData[currentSlide].title}
                                        className="w-full h-full object-cover rounded-lg shadow-2xl"
                                    />

                                    {/* Vertical Star Rating */}
                                    <div className="absolute top-4 left-4 flex flex-col space-y-1">
                                        {[...Array(5)].map((_, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill={index < pancakesData[currentSlide].rating ? "white" : "none"}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    className="drop-shadow-lg"
                                                >
                                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                                                </svg>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                {/* Heading */}
                                <motion.div
                                    key={`title-${currentSlide}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-2"
                                >
                                    <h3
                                        className="text-4xl lg:text-5xl text-[#4a4a4a] font-bold"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        {pancakesData[currentSlide].title}
                                    </h3>
                                    <p className="text-xl text-[#c4a882] font-bolx tracking-[0.1em] uppercase">
                                        {pancakesData[currentSlide].subtitle}
                                    </p>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    key={`desc-${currentSlide}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-[#8b7355] leading-relaxed text-base lg:text-lg font-light"
                                >
                                    {pancakesData[currentSlide].description}
                                </motion.p>

                                {/* Carousel */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-center space-x-4 pt-6"
                                >
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 rounded-full border border-[#c4a882] text-[#c4a882] hover:bg-[#c4a882] hover:text-white transition-colors duration-300"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>

                                    <div className="flex space-x-4">
                                        {pancakesData.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                                                    index === currentSlide ? "border-[#c4a882] scale-110" : "border-gray-300"
                                                }`}
                                            >
                                                <img
                                                    src={item.thumbnail || "/placeholder.svg"}
                                                    alt={`${item.title} thumbnail`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        className="p-2 rounded-full border border-[#c4a882] text-[#c4a882] hover:bg-[#c4a882] hover:text-white transition-colors duration-300"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TastyPancakesSection;