"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Cuna", href: "/cuna" },
    { name: "Nido", href: "/nido" },
    { name: "After School", href: "/after-school" },
    { name: "Verano", href: "/talleres-verano" },
    { name: "Inscripción", href: "/ficha-inscripcion" },
    { name: "Contacto", href: "/contacto" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
            <nav className={`
                flex items-center justify-between px-6 transition-all duration-300
                ${isScrolled
                    ? "w-[90%] md:w-[80%] h-16 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/20"
                    : "w-full h-20 bg-transparent"
                }
            `}>
                <Link href="/" className="flex items-center space-x-2">
                    <div className={`relative transition-all duration-300 ${isScrolled ? "h-10 w-32" : "h-16 w-48"}`}>
                        <Image
                            src="/logo.png"
                            alt="Nido Jardín de la Amistad"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`
                                px-4 py-2 rounded-full text-base font-bold transition-all hover:bg-white/20 hover:text-white
                                ${isScrolled ? "text-gray-700 hover:text-primary hover:bg-primary/10" : "text-white drop-shadow-md"}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" size="sm" className="ml-4 rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                        <Link href="https://jardindelaamistad.sieweb.com.pe/sistema/login" target="_blank">Intranet</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex items-center p-2 md:hidden rounded-full hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild variant="default" className="w-full rounded-xl mt-2">
                                <Link href="https://jardindelaamistad.sieweb.com.pe/sistema/login" target="_blank">Intranet</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
