"use client";

import { motion } from "framer-motion";
import {menuItems} from "@/views/main/breakfast/const";

import {Button} from "@/shared/components/ui/button";

const BreakfastSection = () => (
    <section
        className="relative py-32 lg:py-40 min-h-screen"
        style={{
            backgroundImage: "url('/breakfast-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
        <div className="container mx-auto px-8 lg:px-16 h-full">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center min-h-[90vh]">
                {/* Левая часть - центрирование и комплексные блоки */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center h-full"
                >
                    {/* Заголовок секции */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 mb-12 text-center"
                    >
                        <h3
                            className="text-7xl lg:text-8xl xl:text-9xl text-white font-bold"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Breakfast
                        </h3>
                        <p className="text-lg lg:text-xl text-white/80 font-bold tracking-[0.1em] uppercase">
                            7AM BREAKFAST! WE&#39;RE OPEN!
                        </p>
                    </motion.div>

                    {/* Меню — комплексные блоки */}
                    <div className="w-full max-w-xl">
                        {menuItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + idx * 0.2 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <div className="flex flex-row items-end gap-8">
                                    <div>
                                        <h4
                                            className="text-4xl lg:text-5xl text-white font-bold"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            {item.title}
                                        </h4>
                                        <p className="text-white/70 text-lg lg:text-xl font-light leading-relaxed">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            className="text-3xl lg:text-4xl text-[#d4af37] font-bold"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                                {/* Разделитель между блоками */}
                                {idx < menuItems.length - 1 && (
                                    <div className="my-8">
                                        <div className="border-b border-white/20"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Правая часть - увеличенная карточка и вектор */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        {/* Фоновые карточки */}
                        <div className="absolute top-12 right-8 w-[38rem] h-[44rem] bg-[#f5f1eb] rounded-lg shadow-xl transform rotate-3 opacity-70"></div>
                        <div className="absolute top-6 right-4 w-[38rem] h-[44rem] bg-[#f5f1eb] rounded-lg shadow-xl transform rotate-1 opacity-85"></div>

                        {/* Главная карточка */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative w-[38rem] h-[44rem] bg-[#f5f1eb] rounded-lg shadow-2xl p-12 flex flex-col"
                        >
                            {/* Внутренний контент */}
                            <div className="w-full h-full border-2 border-dashed border-[#c4a882] rounded-lg p-10 flex flex-col">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-lg text-[#8b7355] font-bold tracking-wider">EST.</span>
                                    <span className="text-lg text-[#8b7355] font-bold tracking-wider">1893</span>
                                </div>
                                {/* Decorative Line with Icon */}
                                <div className="flex items-center justify-center mb-6">
                                    <div className="flex-1 h-px bg-[#c4a882]"></div>
                                    <div className="mx-10">
                                        <img src="/wheat-vector.svg" alt="Decorative wheat" className="w-24 h-24 opacity-60" />
                                    </div>
                                    <div className="flex-1 h-px bg-[#c4a882]"></div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 flex flex-col justify-center text-center space-y-10">
                                    <h4
                                        className="text-4xl lg:text-5xl text-[#4a4a4a] font-bold leading-tight"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        Your morning
                                        <br />
                                        Escape with Flair
                                    </h4>
                                    <p className="text-[#8b7355] text-lg lg:text-xl font-light leading-relaxed">
                                        Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                                        faucibus tincidunt. Duis leo.
                                    </p>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="z-20 bg-transparent border border-[#c4a882] text-[#c4a882] hover:bg-[#c4a882] hover:text-white transition-all duration-300 px-12 py-3 text-base font-light tracking-[0.2em] uppercase self-center"
                                    >
                                        READ
                                    </Button>
                                </div>

                                {/* Большой декоративный вектор пшеницы */}
                                <div className="absolute -bottom-32 -right-32 opacity-20">
                                    <img src="/wheat-vector.svg" alt="Decorative wheat" className="w-128 h-128" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default BreakfastSection;
