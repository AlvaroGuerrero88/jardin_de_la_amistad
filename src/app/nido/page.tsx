"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Palette, Music, Globe, Brain, Sun, Users, Apple, Footprints, BookOpen, Home } from "lucide-react";

export default function NidoPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-20 bg-blue-50">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Nido (3 - 5 años)
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Potenciamos la curiosidad natural de los niños a través del juego, el arte y la exploración. Preparamos a tus hijos para el colegio y para la vida.
                        </p>
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/contacto">Agendar Visita</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Methodology */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Metodología</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Aprendizaje basado en proyectos y experiencias vivenciales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Arte y Creatividad",
                            desc: "Expresión libre a través de diversas técnicas plásticas.",
                            icon: Palette,
                            color: "text-purple-600 bg-purple-100"
                        },
                        {
                            title: "Música y Movimiento",
                            desc: "Desarrollo del ritmo, coordinación y expresión corporal.",
                            icon: Music,
                            color: "text-pink-600 bg-pink-100"
                        },
                        {
                            title: "Inglés Intensivo",
                            desc: "Inmersión natural en el idioma a través de juegos y canciones.",
                            icon: Globe,
                            color: "text-blue-600 bg-blue-100"
                        },
                        {
                            title: "Pensamiento Lógico",
                            desc: "Actividades pre-matemáticas y resolución de problemas.",
                            icon: Brain,
                            color: "text-green-600 bg-green-100"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${item.color}`}>
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Activities Gallery Preview - Larger Images */}
            <Section className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        <img src="/images/nido/nido-1.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        <img src="/images/nido/nido-2.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        <img src="/images/nido/nido-3.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        <img src="/images/nido/nido-4.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">Un día en el Nido</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Nuestro día está estructurado para brindar seguridad y a la vez libertad de exploración. Creemos que las rutinas amorosas son la base de la confianza.
                        </p>

                        <div className="relative pl-8 border-l-4 border-dashed border-gray-200 space-y-12">
                            {[
                                {
                                    time: "8:00 am",
                                    title: "Llegada y bienvenida",
                                    desc: "Los niños ingresan con alegría, guardan sus pertenencias en su casillero y se preparan para iniciar su día en un ambiente seguro y afectivo.",
                                    icon: Sun,
                                    color: "bg-yellow-100 text-yellow-600 border-yellow-200"
                                },
                                {
                                    time: "8:15 am",
                                    title: "Asamblea del día",
                                    desc: "Nos reunimos en círculo para conversar, cantar, revisar el clima y expresar cómo nos sentimos. Un espacio clave para fortalecer la comunicación, la convivencia y el sentido de pertenencia.",
                                    icon: Users,
                                    color: "bg-blue-100 text-blue-600 border-blue-200"
                                },
                                {
                                    time: "9:00 am",
                                    title: "Actividades pedagógicas",
                                    desc: "Damos inicio a experiencias que impulsan el pensamiento crítico, la autonomía y la creatividad. Incluye proyectos, rincones de juego, actividades de ciencia, arte, lógica y exploraciones según la edad.",
                                    icon: Brain,
                                    color: "bg-purple-100 text-purple-600 border-purple-200"
                                },
                                {
                                    time: "9:45 am",
                                    title: "Inglés y música / expresión artística",
                                    desc: "Cada día integramos actividades de inglés donde aprendemos a través del juego, las canciones y las historias. Combinamos también momentos de música y expresión artística que fortalecen la creatividad, el ritmo y el lenguaje emocional.",
                                    icon: Music,
                                    color: "bg-pink-100 text-pink-600 border-pink-200"
                                },
                                {
                                    time: "10:15 am",
                                    title: "Arte y creatividad",
                                    desc: "Exploramos colores, texturas, materiales naturales y técnicas variadas para fomentar la sensibilidad artística y la expresión libre.",
                                    icon: Palette,
                                    color: "bg-orange-100 text-orange-600 border-orange-200"
                                },
                                {
                                    time: "10:45 am",
                                    title: "Refrigerio y conversación",
                                    desc: "Un momento tranquilo para recargar energías, conversar con los amigos y fortalecer hábitos de autonomía y convivencia.",
                                    icon: Apple,
                                    color: "bg-green-100 text-green-600 border-green-200"
                                },
                                {
                                    time: "11:00 am",
                                    title: "Psicomotricidad o juego al aire libre",
                                    desc: "Sesiones de movimiento, coordinación, equilibrio y juego libre en espacios seguros. Aquí fortalecen su motricidad, confianza corporal y habilidades socioemocionales.",
                                    icon: Footprints,
                                    color: "bg-teal-100 text-teal-600 border-teal-200"
                                },
                                {
                                    time: "11:30 am",
                                    title: "Lectura, cuentos y cierre del día",
                                    desc: "Cerramos la jornada con historias, canciones suaves o dinámicas de relajación. Un momento para bajar revoluciones y recoger lo vivido durante el día.",
                                    icon: BookOpen,
                                    color: "bg-indigo-100 text-indigo-600 border-indigo-200"
                                },
                                {
                                    time: "12:00 pm – 1:30 pm",
                                    title: "Salida",
                                    desc: "Los niños se retiran según su horario, llevando consigo aprendizajes, vivencias y nuevas historias para compartir en casa.",
                                    icon: Home,
                                    color: "bg-red-100 text-red-600 border-red-200"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className={`absolute -left-[54px] w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center ${item.color} z-10`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${item.color.replace('text-', 'bg-').replace('bg-', 'text-white bg-opacity-90 ')}`}>
                                            {item.time}
                                        </span>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Enfoque Integral</h3>
                        <p className="text-gray-600 mb-8">
                            Más allá de lo académico, nos enfocamos en el ser. Nuestro programa Nido cultiva:
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "Autonomía", desc: "Fomentamos que los niños tomen decisiones y resuelvan problemas por sí mismos." },
                                { title: "Habilidades Sociales", desc: "Aprenden a compartir, negociar y empatizar con sus compañeros." },
                                { title: "Curiosidad Intelectual", desc: "Mantenemos viva la llama del '¿por qué?' a través de la investigación." },
                                { title: "Inteligencia Emocional", desc: "Validamos sus emociones y les damos herramientas para gestionarlas." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                            <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 rounded-xl">
                                <Link href="/contacto">Agenda una Visita Hoy</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
