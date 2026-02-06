import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CursorTracker = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Precise follow for the core
    const springConfig = { damping: 30, stiffness: 250 };
    const dotX = useSpring(cursorX, springConfig);
    const dotY = useSpring(cursorY, springConfig);

    // Slightly slower, "floaty" follow for the outer ring
    const ringX = useSpring(cursorX, { damping: 20, stiffness: 150 });
    const ringY = useSpring(cursorY, { damping: 20, stiffness: 150 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('a, button, .glass-card, [role="button"]'));
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
            <AnimatePresence>
                {isVisible && (
                    <>
                        {/* Minimal Background "Torch" - Subtle & Clean */}
                        <motion.div
                            className="absolute w-40 h-40 rounded-full -translate-x-1/2 -translate-y-1/2"
                            style={{
                                left: ringX,
                                top: ringY,
                                background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Outer Precision Ring */}
                        <motion.div
                            className="absolute border border-blue-400/40 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                            style={{
                                left: ringX,
                                top: ringY,
                                width: isHovering ? 56 : 32,
                                height: isHovering ? 56 : 32,
                            }}
                            animate={{
                                width: isHovering ? 56 : 32,
                                height: isHovering ? 56 : 32,
                                borderColor: isHovering ? "rgba(96,165,250,0.6)" : "rgba(96,165,250,0.2)",
                            }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            {/* Subtle inner accent ring - only on hover */}
                            {isHovering && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full h-full rounded-full border border-blue-400/10"
                                />
                            )}
                        </motion.div>

                        {/* Core Dot - Sharp & Precise */}
                        <motion.div
                            className="absolute bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                            style={{
                                left: dotX,
                                top: dotY,
                                width: 6,
                                height: 6,
                            }}
                            animate={{
                                scale: isHovering ? 1.5 : 1,
                                backgroundColor: isHovering ? "#fff" : "#60a5fa",
                            }}
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CursorTracker;
