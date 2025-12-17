"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ScrollAnimationProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    className?: string;
    delay?: number;
}

export function ScrollAnimation({
    children,
    direction = "left",
    className = "",
    delay = 0
}: ScrollAnimationProps) {
    // Default to false (mobile/SSR safe) - Content will be visible by default
    const isDesktop = useMediaQuery("(min-width: 768px)");

    // If not desktop (or still hydrating), return static visible content
    if (!isDesktop) {
        return (
            <div className={className}>
                {children}
            </div>
        );
    }

    // Only on Desktop: Apply animation
    return (
        <div className={className}>
            <motion.div
                initial={{
                    opacity: 0,
                    x: direction === "left" ? -50 : 50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: delay
                }}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
