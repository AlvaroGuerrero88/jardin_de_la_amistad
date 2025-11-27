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
}

export function AccordionItem({ title, children, isOpen, onClick, className }: AccordionItemProps) {
    return (
        <div className={cn("border-b border-gray-200 last:border-0", className)}>
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-primary"
            >
                <span className="text-lg font-bold text-gray-800">{title}</span>
                <ChevronDown
                    className={cn("h-5 w-5 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={cn("w-full", className)}>{children}</div>;
}
