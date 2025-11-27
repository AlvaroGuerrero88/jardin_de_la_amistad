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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestra Metodología</h2>

                    <div className="flex flex-col items-center justify-center mb-8">
                        <img
                            src="/images/active-learning-logo.png"
                            alt="Active Learning Logo"
                            className="h-32 md:h-40 object-contain mb-6"
                        />
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-600 max-w-4xl mx-auto leading-tight">
                            "En nuestro nido los niños vienen a construir conocimiento, no a memorizarlo."
                        </h3>
                    </div>

                    <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 text-left md:text-center">
                        <p>
                            Active Learning es el resultado de varios años de estudios e investigación, donde los avances de la neurociencia nos invitan a dejar la “escuela tradicional” y apostar por una educación que privilegie situaciones de aprendizaje reales, donde los niños pueden manipular y explorar materiales.
                        </p>
                        <p>
                            En el Jardín de la Amistad ellos juegan, conversan y se divierten mientras aprenden. Nuestro Proyecto Educativo Active Learning tiene como principal objetivo fomentar un pensamiento ingenioso y flexible, capaz de resolver problemas. Para ello, las maestras del Jardín de la Amistad a través de preguntas y múltiples materiales invitan a los niños a reflexionar, imaginar y crear en función a sus propios intereses.
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Programas</h3>
                        <p className="text-gray-600 mb-8">
                            Nuestra propuesta educativa se estructura en programas diseñados para el desarrollo integral:
                        </p>

                        <Accordion className="space-y-2">
                            {[
                                {
                                    title: "PROGRAMA DE LENGUAJE",
                                    content: "Todas las mañanas dedicamos un espacio para disfrutar y aprender adivinanzas, trabalenguas, poesías, entre otros juegos lingüísticos. El elemento lúdico siempre presente en nuestras sesiones de aprendizaje posibilita la exploración y el juego con el lenguaje. Para nuestros niños el aprendizaje de canciones, chistes así como realizar ejercicios de praxias y soplo, resultan experiencias muy placenteras."
                                },
                                {
                                    title: "PROGRAMA DE LECTURA EN VOZ ALTA Y BIBLIOTECA",
                                    content: "Gracias a la implementación de bibliotecas en cada una de nuestras sedes, en nuestro institución la lectura es cosa de todos los días. La lectura en voz alta desarrolla habilidades lectoras y escritoras, y sobretodo ayuda a los niños a apasionarse por los libros​. Esta actividad es una celebración de la lectura, acompañada de rituales y ceremonias que ayudan a los niños a vivir la lectura como un momento mágico."
                                },
                                {
                                    title: "PROGRAMA DE JUEGOS COLECTIVOS",
                                    content: "En el programa de juegos colectivos los niños aprenden a coordinar puntos de vista, desarrollan la tolerancia a la frustración y capacidades para la democracia dentro de un contexto socioemocional seguro. A diferencia del juego libre o individual, los juegos colectivos implican el seguimiento de reglas y llegar a acuerdos. Estos juegos resultan muy retadores para los niños pequeños pues se caracterizan por un pensamiento egocéntrico. De esta manera, los niños del Jardín de la Amistad tienen oportunidades para desarrollar un pensamiento más descentrado, más socializado y más coordinado."
                                },
                                {
                                    title: "PROGRAMA DE MATEMÁTICA",
                                    content: "El objetivo de nuestro programa es que la enseñanza de la matemática deje de ser rígida y sea una propuesta aplicada y pensada para un mundo cotidiano. Considerando el dominio de la matemática como un ejercicio para lograr la ciudadanía y esto requiere no solo conocer el lenguaje matemático y hechos, conceptos y algoritmos, sino también procesos más complejos como la matematización de situaciones y la resolución de problemas."
                                },
                                {
                                    title: "JUEGO-TRABAJO EN SECTORES",
                                    content: "Los sectores de aprendizaje permiten a los niños trabajar según sus propios intereses. Todos los días nuestros niños escogen en qué sector de aprendizaje les gustaría trabajar y en función a ello investigan, juegan y aprenden en equipo. Cada sector está cuidadosamente diseñado para proporcionar experiencias retadoras y concretas a los niños, donde favorecemos el pensamiento crítitco creativo, el aprendizaje autónomo y la capacidad para la toma de decisiones."
                                },
                                {
                                    title: "PROGRAMA DE CONCIENCIA FONOLÓGICA",
                                    content: "El objetivo de este programa es brindar a los niños muchas oportunidades para empezar el reconocimiento de las letras y sus sonidos, a través de situaciones lúdicas pero al mismo tiempo están enmarcados dentro de un evento con propósito comunicativo. Diversas investigaciones demuestran que el desarrollo de la conciencia fonológica es una variable potente para la adquisición de la lectura y escritura."
                                },
                                {
                                    title: "PROGRAMA DE AUTONOMÍA",
                                    content: "Uno de los principios de nuestra propuesta es desarrollar en los niños hábitos y actitudes que le permitan desarrollarse con independencia y seguridad, ambas condiciones básicas para el éxito en la vida. Un niño autónomo es un niño feliz, seguro y capaz de realizar acciones por sí mismo. Por ello, generamos oportunidades e implementamos ambientes que favorezcan los proyectos de acción de cada niño, donde validamos sus iniciativas y deseos."
                                },
                                {
                                    title: "FORMACIÓN PARA LA CONVIVENCIA Y VALORES",
                                    content: "Este programa propone actividades en familia donde se promueve la formación y fortalecimiento de hábitos básicos, así como el reconocimiento y la expresión saludable de diversas emociones."
                                }
                            ].map((program, index) => (
                                <AccordionItem
                                    key={index}
                                    title={program.title}
                                    isOpen={openItem === program.title}
                                    onClick={() => handleToggle(program.title)}
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
