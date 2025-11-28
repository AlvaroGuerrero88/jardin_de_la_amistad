"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Palette, Music, Globe, Brain, Sun, Users, Apple, Footprints, BookOpen, Home } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { useState } from "react";

export default function NidoPage() {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const handleToggle = (title: string) => {
        setOpenItem(openItem === title ? null : title);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-blue-50">
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Nuestra Metodología</h2>

                    <blockquote className="relative p-8 mb-12 bg-orange-50 rounded-3xl border-l-8 border-[#FF7F50]">
                        <div className="absolute top-4 left-4 text-[#FF7F50] opacity-20">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.354 13.536 17.38 12.971L17.38 12.721C16.946 12.763 16.504 12.784 16.054 12.784C14.688 12.784 13.521 12.35 12.554 11.481C11.588 10.613 11.104 9.471 11.104 8.054C11.104 6.621 11.596 5.463 12.579 4.579C13.563 3.696 14.754 3.254 16.154 3.254C17.621 3.254 18.838 3.754 19.804 4.754C20.771 5.754 21.254 7.054 21.254 8.654C21.254 11.021 20.471 13.254 18.904 15.354C17.338 17.454 15.708 19.338 14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.321 15.923 5.929 15.081C6.537 14.239 7.354 13.536 8.38 12.971L8.38 12.721C7.946 12.763 7.504 12.784 7.054 12.784C5.688 12.784 4.521 12.35 3.554 11.481C2.588 10.613 2.104 9.471 2.104 8.054C2.104 6.621 2.596 5.463 3.579 4.579C4.563 3.696 5.754 3.254 7.154 3.254C8.621 3.254 9.838 3.754 10.804 4.754C11.771 5.754 12.254 7.054 12.254 8.654C12.254 11.021 11.471 13.254 9.904 15.354C8.338 17.454 6.708 19.338 5.017 21Z" />
                            </svg>
                        </div>
                        <p className="text-2xl md:text-3xl font-serif italic text-gray-800 text-center relative z-10 leading-relaxed">
                            "En nuestro nido los niños vienen a construir conocimiento, no a memorizarlo."
                        </p>
                    </blockquote>

                    <div className="flex justify-center mb-12">
                        <img
                            src="/images/active-learning-logo.png"
                            alt="Active Learning Logo"
                            className="h-24 md:h-28 object-contain"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 text-left md:text-center">
                        <p>
                            Nuestro Proyecto Educativo Active Learning tiene como principal objetivo fomentar un pensamiento ingenioso y flexible, capaz de resolver problemas. Creemos que el Aprendizaje Activo, a través del juego y la exploración, es fundamental para desarrollar el máximo potencial de cada niño y niña. Nuestros sectores de aprendizaje cuentan con material concreto no estructurado que permite la experiencia directa, en el que los niños juegos, conversan y se divierten mientras aprende.
                        </p>
                        <p className="mb-0">
                            Por ello, las maestras del Jardín de la Amistad actúan como observadoras, creando un ambiente social que motiva al niño a explorar, moverse, escuchar y manipular, facilitando una construcción constante y significativa de su comprensión del mundo que lo rodea a través de preguntas.
                        </p>
                    </div>
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
                            Nuestro día está organizado por una agenda diaria con actividades establecidas para brindar seguridad y a la vez libertad de exploración. Creemos que las rutinas amorosas son la base de la confianza.
                        </p>

                        <div className="relative pl-8 border-l-4 border-dashed border-gray-200 space-y-12">
                            {[
                                {
                                    title: "Llegada y bienvenida",
                                    desc: "Los niños ingresan con alegría, guardan sus pertenencias en su casillero y se preparan para iniciar su día en un ambiente seguro y afectivo.",
                                    icon: Sun,
                                    color: "bg-yellow-100 text-yellow-600 border-yellow-200"
                                },
                                {
                                    title: "Asamblea del día",
                                    desc: "Nos reunimos en círculo para conversar, cantar, revisar el clima y expresar cómo nos sentimos. Un espacio clave para fortalecer la comunicación, la convivencia y el sentido de pertenencia.",
                                    icon: Users,
                                    color: "bg-blue-100 text-blue-600 border-blue-200"
                                },
                                {
                                    title: "Actividades pedagógicas",
                                    desc: "Damos inicio a experiencias que impulsan el pensamiento crítico, la autonomía y la creatividad. Incluye proyectos, rincones de juego, actividades de ciencia, arte, lógica y exploraciones según la edad.",
                                    icon: Brain,
                                    color: "bg-purple-100 text-purple-600 border-purple-200"
                                },
                                {
                                    title: "Inglés y música / expresión artística",
                                    desc: "Cada día integramos actividades de inglés donde aprendemos a través del juego, las canciones y las historias. Combinamos también momentos de música y expresión artística que fortalecen la creatividad, el ritmo y el lenguaje emocional.",
                                    icon: Music,
                                    color: "bg-pink-100 text-pink-600 border-pink-200"
                                },
                                {
                                    title: "Arte y creatividad",
                                    desc: "Exploramos colores, texturas, materiales naturales y técnicas variadas para fomentar la sensibilidad artística y la expresión libre.",
                                    icon: Palette,
                                    color: "bg-orange-100 text-orange-600 border-orange-200"
                                },
                                {
                                    title: "Refrigerio y conversación",
                                    desc: "Un momento tranquilo para recargar energías, conversar con los amigos y fortalecer hábitos de autonomía y convivencia.",
                                    icon: Apple,
                                    color: "bg-green-100 text-green-600 border-green-200"
                                },
                                {
                                    title: "Psicomotricidad o juego al aire libre",
                                    desc: "Sesiones de movimiento, coordinación, equilibrio y juego libre en espacios seguros. Aquí fortalecen su motricidad, confianza corporal y habilidades socioemocionales.",
                                    icon: Footprints,
                                    color: "bg-teal-100 text-teal-600 border-teal-200"
                                },
                                {
                                    title: "Lectura, cuentos y cierre del día",
                                    desc: "Cerramos la jornada con historias, canciones suaves o dinámicas de relajación. Un momento para bajar revoluciones y recoger lo vivido durante el día.",
                                    icon: BookOpen,
                                    color: "bg-indigo-100 text-indigo-600 border-indigo-200"
                                },
                                {
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Programas</h3>
                        <p className="text-gray-600 mb-8">
                            Nuestra propuesta educativa se estructura en programas diseñados para el desarrollo integral:
                        </p>

                        <Accordion className="space-y-3">
                            {[
                                {
                                    title: "PROGRAMA DE LENGUAJE",
                                    content: "Todas las mañanas dedicamos un espacio para disfrutar y aprender adivinanzas, trabalenguas, poesías, entre otros juegos lingüísticos. El elemento lúdico siempre presente en nuestras sesiones de aprendizaje posibilita la exploración y el juego con el lenguaje. Para nuestros niños el aprendizaje de canciones, así como realizar ejercicios de praxias y soplo, resultan experiencias muy placenteras.",
                                    icon: "🗣️",
                                    color: "bg-orange-100 text-orange-600"
                                },
                                {
                                    title: "PROGRAMA DE LECTURA EN VOZ ALTA Y BIBLIOTECA",
                                    content: "Gracias a la implementación de bibliotecas en cada una de nuestras sedes, en nuestra institución la lectura se ha convertido en una actividad cotidiana. La lectura en voz alta no solo fortalece las habilidades lectoras y escritoras, sino que también despierta en los niños el gusto y la pasión por los libros. Esta práctica se convierte en una verdadera celebración de la lectura, enriquecida con rituales y pequeñas ceremonias que permiten a los niños vivir cada sesión como un momento especial y mágico.",
                                    icon: "📚",
                                    color: "bg-blue-100 text-blue-600"
                                },
                                {
                                    title: "PROGRAMA DE JUEGOS COLECTIVOS",
                                    content: "En el programa de juegos colectivos los niños aprenden a coordinar puntos de vista, desarrollan la tolerancia a la frustración y capacidades para la democracia dentro de un contexto socioemocional seguro. A diferencia del juego libre o individual, los juegos colectivos implican el seguimiento de reglas y llegar a acuerdos. Estos juegos resultan muy retadores para los niños pequeños pues se caracterizan por un pensamiento egocéntrico. De esta manera, los niños del Jardín de la Amistad tienen oportunidades para desarrollar un pensamiento más descentrado, más socializado y más coordinado.",
                                    icon: "🤝",
                                    color: "bg-green-100 text-green-600"
                                },
                                {
                                    title: "PROGRAMA DE MATEMÁTICA",
                                    content: "El objetivo de nuestro programa es que la enseñanza de la matemática deje de ser rígida y sea una propuesta aplicada y pensada para un mundo cotidiano. Considerando el dominio de la matemática como un ejercicio para lograr la ciudadanía y esto requiere no solo conocer el lenguaje matemático y hechos, conceptos y algoritmos, sino también procesos más complejos como la matematización de situaciones y la resolución de problemas.",
                                    icon: "🔢",
                                    color: "bg-purple-100 text-purple-600"
                                },
                                {
                                    title: "JUEGO-TRABAJO EN SECTORES",
                                    content: "Los sectores de aprendizaje permiten a los niños trabajar según sus propios intereses. Todos los días nuestros niños escogen en qué sector de aprendizaje les gustaría trabajar y en función a ello investigan, juegan y aprenden en equipo. Cada sector está cuidadosamente diseñado para proporcionar experiencias retadoras y concretas a los niños, donde favorecemos el pensamiento crítico creativo, el aprendizaje autónomo y la capacidad para la toma de decisiones.",
                                    icon: "🏗️",
                                    color: "bg-yellow-100 text-yellow-700"
                                },
                                {
                                    title: "PROGRAMA DE CONCIENCIA FONOLÓGICA",
                                    content: "El objetivo de este programa es brindar a los niños muchas oportunidades para empezar el reconocimiento de las letras y sus sonidos, a través de situaciones lúdicas pero al mismo tiempo están enmarcados dentro de un evento con propósito comunicativo. Diversas investigaciones demuestran que el desarrollo de la conciencia fonológica es una variable potente para la adquisición de la lectura y escritura.",
                                    icon: "👂",
                                    color: "bg-pink-100 text-pink-600"
                                },
                                {
                                    title: "PROGRAMA DE AUTONOMÍA",
                                    content: "Uno de los principios de nuestra propuesta es desarrollar en los niños hábitos y actitudes que le permitan desarrollarse con independencia y seguridad, ambas condiciones básicas para el éxito en la vida. Un niño autónomo es un niño feliz, seguro y capaz de realizar acciones por sí mismo. Por ello, generamos oportunidades e implementamos ambientes que favorezcan los proyectos de acción de cada niño, donde validamos sus iniciativas y deseos.",
                                    icon: "🌟",
                                    color: "bg-teal-100 text-teal-600"
                                },

                            ].map((program, index) => (
                                <AccordionItem
                                    key={index}
                                    title={program.title}
                                    isOpen={openItem === program.title}
                                    onClick={() => handleToggle(program.title)}
                                    icon={<span className="text-2xl">{program.icon}</span>}
                                    color={program.color}
                                >
                                    {program.content}
                                </AccordionItem>
                            ))}
                        </Accordion>

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
