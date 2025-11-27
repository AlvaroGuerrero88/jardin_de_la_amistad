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
            <section className="relative py-20 bg-orange-50 overflow-hidden">
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
                    {/* Verano de Aventuras */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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

                    {/* Verano Mágico */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
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
