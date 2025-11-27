"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, User, Tag } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "La importancia del juego en la primera infancia",
        excerpt: "Descubre cómo el juego libre contribuye al desarrollo cognitivo y emocional de tu hijo.",
        date: "20 Nov 2025",
        author: "Lic. Ana Torres",
        category: "Educación",
        image: "https://images.unsplash.com/photo-1587654780291-39c940483713?auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "Tips para una alimentación saludable en niños",
        excerpt: "Consejos prácticos para que tus hijos coman de todo y disfruten de una dieta balanceada.",
        date: "15 Nov 2025",
        author: "Nut. Carla Ruiz",
        category: "Salud",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Cómo manejar los berrinches de forma respetuosa",
        excerpt: "Estrategias de disciplina positiva para acompañar las emociones de los más pequeños.",
        date: "10 Nov 2025",
        author: "Psic. Mario Gomez",
        category: "Crianza",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Blog & Novedades
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Artículos de interés para acompañarte en la maravillosa aventura de ser padres.
                    </p>
                </div>
            </section>

            {/* Blog List */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                    <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
                                    <span className="flex items-center text-primary"><Tag className="h-4 w-4 mr-1" /> {post.category}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-sm text-gray-500 flex items-center"><User className="h-4 w-4 mr-1" /> {post.author}</span>
                                    <Button variant="link" className="p-0 h-auto">Leer más</Button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>
        </div>
    );
}
