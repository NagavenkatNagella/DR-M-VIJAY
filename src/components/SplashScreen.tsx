import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [phase, setPhase] = useState<"name" | "title" | "finish">("name");

    useEffect(() => {
        const timer1 = setTimeout(() => setPhase("title"), 3500);
        const timer2 = setTimeout(() => {
            setPhase("finish");
            setTimeout(onFinish, 1000);
        }, 9000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onFinish]);

    const stars = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 0.5,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 1,
    })), []);

    const LetterReveal = ({ text }: { text: string }) => {
        const letters = text.split("");

        return (
            <div className="flex flex-wrap justify-center items-center font-black">
                {letters.map((char, i) => (char === " " ? (
                    <span key={i} className="w-4 md:w-8" />
                ) : (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.12 }}
                        className="relative inline-block text-white text-4xl md:text-6xl lg:text-8xl tracking-tighter select-none uppercase pointer-events-none"
                    >
                        {char}

                        {/* The "Star Glow" Sequence - One by One */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                scale: [0.5, 1.5, 1.8, 1],
                                filter: ["blur(5px)", "blur(15px)", "blur(25px)", "blur(10px)"]
                            }}
                            transition={{
                                duration: 1.5,
                                delay: (i * 0.12) + 0.5,
                                repeat: Infinity,
                                repeatDelay: (text.length * 0.12) + 1
                            }}
                            className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex justify-center"
                        >
                            {/* Central Star Point */}
                            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white,0_0_40px_#3b82f6,0_0_60px_#1e40af]" />

                            {/* Cross Flares */}
                            <div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                            <div className="absolute h-[200%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />

                            {/* Large Soft Glow */}
                            <div className="absolute w-32 h-32 bg-blue-500/30 rounded-full blur-3xl" />
                        </motion.div>

                        {/* Individual Letter Internal Star Shine */}
                        <motion.span
                            animate={{
                                textShadow: [
                                    "0 0 0px rgba(255,255,255,0)",
                                    "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59,130,246,0.6)",
                                    "0 0 0px rgba(255,255,255,0)"
                                ]
                            }}
                            transition={{
                                duration: 1.5,
                                delay: (i * 0.12) + 0.5,
                                repeat: Infinity,
                                repeatDelay: (text.length * 0.12) + 1
                            }}
                            className="absolute inset-0"
                        >
                            {char}
                        </motion.span>
                    </motion.span>
                )))}
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/* Starfield Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,10,25,1)_0%,black_100%)]" />

                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: star.size,
                            height: star.size,
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                        }}
                    />
                ))}
            </div>

            {/* Main Text Container */}
            <div className="relative z-10 w-full text-center">
                <AnimatePresence mode="wait">
                    {phase === "name" && (
                        <motion.div
                            key="name"
                            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                            transition={{ duration: 1 }}
                        >
                            <LetterReveal text="DR M VIJAY" />
                        </motion.div>
                    )}

                    {phase === "title" && (
                        <motion.div
                            key="title"
                            exit={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                            transition={{ duration: 1 }}
                        >
                            <LetterReveal text="ASSOCIATE PROFESSOR" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
