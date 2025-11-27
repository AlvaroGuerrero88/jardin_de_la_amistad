"use client";

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    color?: string; // e.g., "bg-blue-100 text-blue-600"
}

export function AccordionItem({ title, children, isOpen, onClick, className, icon, color = "bg-gray-100 text-gray-600" }: AccordionItemProps) {
    return (
        <div className={cn("mb-4 rounded-2xl overflow-hidden border-0", className)}>
            <button
                onClick={onClick}
                className={cn(
                    "flex w-full items-center justify-between px-6 py-4 text-left font-bold transition-all duration-300",
                    isOpen ? "bg-opacity-100" : "bg-opacity-60 hover:bg-opacity-80",
                    color.split(" ")[0] // Background color
                )}
            >
                <div className="flex items-center gap-4">
                    {icon && (
                        <div className={cn("p-2 rounded-full bg-white/50", color.split(" ")[1])}>
                            {icon}
                        </div>
                    )}
                    <span className={cn("text-lg", color.split(" ")[1])}>{title}</span>
                </div>
                <ChevronDown
                    className={cn("h-6 w-6 transition-transform duration-300", isOpen && "rotate-180", color.split(" ")[1])}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={cn("overflow-hidden", color.split(" ")[0], "bg-opacity-20")}
                    >
                        <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed font-medium">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("w-full space-y-4", className)}>{children}</div>;
}
