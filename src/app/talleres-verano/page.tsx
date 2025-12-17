"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Palette, Music, Tent, Microscope, Sparkles, Baby, Users, Footprints } from "lucide-react";

export default function TalleresVeranoPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-orange-50 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Sun className="text-orange-500 h-8 w-8" />
                            <span className="text-orange-600 font-bold tracking-wider uppercase">Talleres de Verano</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Un verano lleno de <br />
                            <span className="text-orange-500">aprendizaje y diversión</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            En el Jardín de la Amistad hemos diseñado programas especiales para que los niños vivan un verano diferente: lleno de juego, creatividad, movimiento y descubrimiento. Cada experiencia ha sido pensada para acompañar su desarrollo integral, respetando sus tiempos y potenciando su curiosidad natural.
                        </p>
                        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                            <Link href="/contacto">Inscribirse Ahora</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Promo Video Section */}
            <Section className="py-20 relative overflow-hidden bg-sky-50">
                {/* Decorative Blobs */}
                <div className="absolute top-10 right-10 text-6xl animate-bounce delay-700 opacity-60">🎨</div>
                <div className="absolute bottom-20 left-10 text-5xl animate-pulse opacity-60">🏖️</div>
                <div className="absolute top-1/3 left-1/4 text-6xl animate-bounce opacity-40 blur-sm">☀️</div>

                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text & Fun */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <div className="inline-block transform -rotate-3 mb-6">
                                <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg border-2 border-yellow-200">
                                    ¡Edición 2026!
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-orange-500 mb-8 font-display leading-tight">
                                ¡Un verano <br />
                                <span className="text-purple-600 relative">
                                    inolvidable!
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                                    </svg>
                                </span> 📸
                            </h2>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                                Cada día es una nueva aventura. Risas, amigos nuevos y aprendizajes que quedan para siempre. ¡Mira cómo nos divertimos!
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <span className="px-4 py-2 bg-white rounded-full shadow-md text-sky-600 font-bold border border-sky-100 transform hover:scale-105 transition-transform">💧 Juegos de Agua</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-md text-pink-600 font-bold border border-pink-100 transform hover:scale-105 transition-transform delay-75">🎨 Mini Artistas</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-md text-green-600 font-bold border border-green-100 transform hover:scale-105 transition-transform delay-150">🌱 Pequeños Exploradores</span>
                            </div>
                        </motion.div>

                        {/* Right Column: Video */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", bounce: 0.4 }}
                            className="flex justify-center md:justify-end"
                        >
                            <div className="relative inline-block">
                                {/* Creative Frame */}
                                <div className="absolute -inset-4 bg-yellow-300 rounded-[3rem] rotate-3 opacity-70 blur-sm"></div>
                                <div className="absolute -inset-4 bg-orange-300 rounded-[3rem] -rotate-2 opacity-70 blur-sm"></div>

                                <div className="relative w-[300px] md:w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl transform hover:rotate-1 transition-transform duration-500 bg-black">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/uRQCE0yPtIQ"
                                        title="Talleres de Verano - Jardín de la Amistad"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/* Floating elements attached to video */}
                                <div className="absolute -bottom-8 -left-8 bg-white px-6 py-3 rounded-full shadow-xl transform -rotate-6 border-4 border-yellow-200 z-20">
                                    <span className="text-2xl font-bold text-yellow-600">felicidad</span>
                                </div>

                                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl transform rotate-12 animate-bounce z-20">
                                    <span className="text-4xl">🌟</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Image Gallery */}
            <Section className="py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img src="/images/talleres-verano/verano-1.jpg" alt="Niños jugando con espuma" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8 md:mt-12">
                        <img src="/images/talleres-verano/verano-2.jpg" alt="Niña mostrando arte" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img src="/images/talleres-verano/verano-3.jpg" alt="Niños jugando con lodo" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8 md:mt-12">
                        <img src="/images/talleres-verano/verano-4.jpg" alt="Maestra y niña pintando" className="w-full h-full object-cover" />
                    </div>
                </div>
            </Section>

            {/* Programs */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Verano Mágico (1 a 2 años) - Now First */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-purple-50 rounded-[2.5rem] p-8 md:p-12 border-2 border-purple-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 bg-purple-200 w-32 h-32 rounded-bl-[100%] opacity-50 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="inline-block bg-white px-4 py-2 rounded-full text-purple-600 font-bold text-sm mb-6 shadow-sm">
                                1 a 2 años
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Sparkles className="text-purple-600 h-8 w-8" />
                                Verano Mágico
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Un espacio especialmente diseñado para los más pequeños, donde podrán vivir experiencias sensoriales, psicomotoras y musicales en compañía de maestras especializadas. Un entorno cálido y seguro para que exploren el mundo con libertad.
                            </p>

                            <h3 className="font-bold text-xl text-gray-900 mb-6">¿Qué incluye?</h3>
                            <ul className="space-y-4">
                                {[
                                    { text: "Actividades sensoriales y de exploración", icon: Baby },
                                    { text: "Juegos de movimiento y coordinación", icon: Footprints },
                                    { text: "Música, ritmo y expresión", icon: Music },
                                    { text: "Materiales adecuados para su etapa de desarrollo", icon: Palette },
                                    { text: "Grupos reducidos y atención personalizada", icon: Users }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center bg-white/60 p-3 rounded-xl">
                                        <div className="bg-purple-100 p-2 rounded-full mr-4 text-purple-600">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Verano de Aventuras (3 a 6 años) - Now Second */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-green-50 rounded-[2.5rem] p-8 md:p-12 border-2 border-green-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 bg-green-200 w-32 h-32 rounded-bl-[100%] opacity-50 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="inline-block bg-white px-4 py-2 rounded-full text-green-600 font-bold text-sm mb-6 shadow-sm">
                                3 a 6 años
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Tent className="text-green-600 h-8 w-8" />
                                Verano de Aventuras
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Un taller pensado para que los niños exploren la ciencia, el arte, la naturaleza y el movimiento a través de juegos experimentales, actividades al aire libre y dinámicas creativas que fortalecen su autonomía y autoconfianza.
                            </p>

                            <h3 className="font-bold text-xl text-gray-900 mb-6">¿Qué incluye?</h3>
                            <ul className="space-y-4">
                                {[
                                    { text: "Experimentos simples y exploración científica", icon: Microscope },
                                    { text: "Arte y creatividad con diversos materiales", icon: Palette },
                                    { text: "Actividades al aire libre y contacto con la naturaleza", icon: Sun },
                                    { text: "Juegos cooperativos y dinámicas grupales", icon: Users },
                                    { text: "Psicomotricidad y movimiento libre", icon: Footprints },
                                    { text: "Campamento Nature (opcional)", icon: Tent }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center bg-white/60 p-3 rounded-xl">
                                        <div className="bg-green-100 p-2 rounded-full mr-4 text-green-600">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-orange-500 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">¡Cupos Limitados!</h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Asegura el lugar de tu pequeño en nuestro programa de verano.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-10 py-6 text-lg shadow-lg">
                        <Link href="/contacto">Contactar Ahora</Link>
                    </Button>
                </motion.div>
            </Section>
        </div>
    );
}
