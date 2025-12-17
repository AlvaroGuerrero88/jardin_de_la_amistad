"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export default function CunaPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-40 pb-20 bg-pink-50">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Cuna (1 - 2 años)
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Un entorno seguro y amoroso diseñado para los primeros pasos de tu bebé. Estimulación temprana, cuidado personalizado y mucha ternura.
                        </p>
                        <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
                            <Link href="/contacto">Solicitar Información</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Featured Video Testimonial */}
            <Section className="bg-white py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold mb-4">
                            Experiencias Reales
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                            "Un lugar de puertas abiertas"
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed italic relative">
                            <span className="absolute -top-4 -left-2 text-6xl text-pink-200 opacity-50 z-0">"</span>
                            <span className="relative z-10">
                                Marilyn, mamá de Leticia, nos cuenta cómo el Jardín de la Amistad es un lugar donde su hija aprende con libertad, rodeada de amor y confianza 💛✨ Vida práctica, aprendizaje activo y puertas siempre abiertas para las familias.
                            </span>
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative">
                                <img
                                    src="/images/testimonials/marilyn.jpg"
                                    alt="Marilyn"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Marilyn</div>
                                <div className="text-sm text-gray-500">Mamá de Leticia</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-gray-900 bg-black">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/OkSEvd61_xc"
                                title="Testimonio Jardín de la Amistad - Marilyn"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Benefits */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir nuestra Cuna?</h2>
                        <ul className="space-y-4">
                            {[
                                "Personal especializado en primera infancia",
                                "Ambientes seguros y climatizados",
                                "Estimulación sensorial y motriz",
                                "Alimentación balanceada y supervisada",
                                "Reportes diarios para los padres"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-pink-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        {/* Placeholder image */}
                        <img src="/cuna-painting.jpg" alt="Niños pintando en Cuna Jardín de la Amistad" className="object-cover w-full h-full" />
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Lo que dicen los papás</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "María P.",
                            text: "Dejar a mi bebé fue difícil, pero ver lo feliz que sale cada día me da total tranquilidad. Las misses son un amor.",
                            role: "Mamá de Lucas (1 año)"
                        },
                        {
                            name: "Carlos R.",
                            text: "La estimulación que recibe es increíble. Ha avanzado muchísimo en su motricidad y lenguaje.",
                            role: "Papá de Sofía (1.5 años)"
                        },
                        {
                            name: "Ana L.",
                            text: "Me encanta la comunicación constante. Siempre sé cómo estuvo mi hijo y qué actividades realizó.",
                            role: "Mamá de Mateo (2 años)"
                        }
                    ].map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                            </div>
                            <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                            <div>
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
