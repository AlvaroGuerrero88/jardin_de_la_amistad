"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, BookOpen, Music, Users } from "lucide-react";

export default function AfterSchoolPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-40 pb-20 bg-green-50">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            After School
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Un espacio pensado para acompañar a nuestros niños y niñas del nido durante la tarde, en un ambiente seguro, cálido y con propuestas acordes a su etapa.
                        </p>
                        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                            <Link href="/contacto">Consultar Horarios</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Activities */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Actividades</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Juego Libre Acompañado",
                                    desc: "Espacios preparados donde pueden explorar, crear y disfrutar según sus intereses.",
                                    icon: BookOpen,
                                    color: "text-blue-600 bg-blue-100"
                                },
                                {
                                    title: "Talleres Creativos",
                                    desc: "Pequeñas propuestas de arte, música, movimiento o cuentos.",
                                    icon: Music,
                                    color: "text-pink-600 bg-pink-100"
                                },
                                {
                                    title: "Socialización y Dinámicas Grupales",
                                    desc: "Momentos para compartir, esperar turnos, conversar y vincularse con otros niños.",
                                    icon: Users,
                                    color: "text-yellow-600 bg-yellow-100"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <div className={`p-3 rounded-lg mr-4 ${item.color}`}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="bg-gray-100 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6">Horarios Flexibles</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <span className="font-medium">Turno Tarde</span>
                                <span className="text-green-600 font-bold">1:00 PM - 4:30 PM</span>
                            </div>
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <span className="font-medium">Talleres Específicos</span>
                                <span className="text-green-600 font-bold">Consultar</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-bold mb-2">Incluye:</h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">

                                <li>Supervisión constante por parte de nuestras docentes.</li>
                                <li>Materiales para actividades.</li>
                                <li>Comunicación fluida con las familias.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
