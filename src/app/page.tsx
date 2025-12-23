"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Users, Clock, Baby, Sun, MapPin, Sparkles } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <HeroCarousel />
          {/* Overlay removed as requested */}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-end items-center text-center px-4 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Admission Block */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-white/50 px-8 py-3 rounded-xl shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-2xl md:text-4xl font-bold text-primary tracking-wide font-display">
                Cupos limitados – Admisión 2026
              </h1>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="text-lg bg-[#FF7F50] hover:bg-[#E06030] text-white px-8 py-6 h-auto rounded-full shadow-[0_0_20px_rgba(255,127,80,0.5)] hover:shadow-[0_0_30px_rgba(255,127,80,0.7)] hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
            >
              <Link href="/contacto">¡Asegura tu lugar ahora!</Link>
            </Button>
          </motion.div>
        </div>

        {/* Wavy Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Services Summary - Organic Cards */}
      <Section className="bg-white relative py-24">
        {/* Floating Blobs Background */}
        <div className="absolute top-20 left-[-5%] w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-[-5%] w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

        <ScrollAnimation direction="left">
          <div className="text-center mb-20 relative z-10">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Descubre Nuestro Mundo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Programas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una educación personalizada para cada etapa del desarrollo de tu pequeño.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10 px-4">
          {[
            {
              title: "Cuna",
              age: "1 - 2 años",
              description: "Cuidado amoroso y estimulación temprana en un ambiente seguro.",
              icon: Heart,
              href: "/cuna",
              color: "bg-pink-50 text-pink-600 border-pink-100",
              hover: "hover:bg-pink-100",
              iconBg: "bg-pink-200"
            },
            {
              title: "Nido",
              age: "3 - 5 años",
              description: "Aprendizaje activo a través del juego y la exploración.",
              icon: BookOpen,
              href: "/nido",
              color: "bg-blue-50 text-blue-600 border-blue-100",
              hover: "hover:bg-blue-100",
              iconBg: "bg-blue-200"
            },
            {
              title: "After School",
              age: "Horario Extendido",
              description: "Talleres creativos, ayuda con tareas y actividades deportivas.",
              icon: Clock,
              href: "/after-school",
              color: "bg-green-50 text-green-600 border-green-100",
              hover: "hover:bg-green-100",
              iconBg: "bg-green-200"
            },
            {
              title: "Estimulación Temprana",
              age: "5 meses - 36 meses",
              description: "Desarrollo sensorial, motriz y cognitivo en un ambiente lúdico.",
              icon: Baby,
              href: "https://centrodeestimulaciontemprana.jardindelaamistad.edu.pe/",
              color: "bg-yellow-50 text-yellow-600 border-yellow-100",
              hover: "hover:bg-yellow-100",
              iconBg: "bg-yellow-200"
            },
            {
              title: "Talleres de Verano",
              age: "1 - 6 años",
              description: "Talleres diseñados para potenciar su curiosidad y desarrollo.",
              icon: Sun,
              href: "/talleres-verano",
              color: "bg-orange-50 text-orange-600 border-orange-100",
              hover: "hover:bg-orange-100",
              iconBg: "bg-orange-200"
            },
          ].map((service, index) => (
            <ScrollAnimation key={index} direction="right" delay={index * 0.1} className="h-full">
              <div
                className={`
                  h-full rounded-[2rem] p-8 transition-all duration-300 border-2
                  ${service.color} ${service.hover} shadow-sm hover:shadow-xl
                  flex flex-col items-center text-center group cursor-pointer
                `}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${service.iconBg} text-white shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <span className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-gray-500 mb-4 shadow-sm">
                  {service.age}
                </span>
                <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                <Link href={service.href} className="w-full mt-auto">
                  <Button variant="ghost" className="w-full rounded-full group-hover:bg-white/50">
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </Section>

      {/* Philosophy / About Preview - Wavy Section */}
      <section className="relative py-32 bg-muted overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3]">
                    <img src="/philosophy.jpg" alt="Nuestra Filosofía - Niños felices" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div>
                <div className="flex items-center mb-4 space-x-2">
                  <Sparkles className="text-secondary h-6 w-6" />
                  <span className="text-primary font-bold tracking-wider uppercase text-sm">Nuestra Esencia</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Creemos en el poder de la <span className="text-primary underline decoration-wavy decoration-secondary underline-offset-4">amistad</span> y el juego.
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  En el Jardín de la Amistad, cada niño es un universo único. Nuestro enfoque pedagógico abraza la curiosidad natural, fomentando la autonomía y el aprendizaje significativo a través de experiencias vivenciales.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Metodología activa y vivencial",
                    "Personal docente altamente calificado",
                    "Infraestructura segura y estimulante",
                    "Formación en valores y habilidades sociales"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-lg bg-white/50 p-3 rounded-2xl border border-white shadow-sm">
                      <div className="mr-4 bg-green-100 p-2 rounded-full text-green-600">
                        <Users className="h-5 w-5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="rounded-full px-8 text-lg bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/nido">Conoce nuestra propuesta</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Methodology Section - Moved from Nido */}
      <section className="w-full bg-orange-50/50 relative overflow-hidden pt-32 pb-12">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollAnimation direction="right">
            <div className="text-center mb-16 relative z-10">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Enfoque</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Nuestra Metodología</h2>

              <div className="max-w-4xl mx-auto">
                <blockquote className="relative p-8 mb-12 bg-white rounded-[2rem] shadow-xl border-l-8 border-[#FF7F50]">
                  <div className="absolute top-4 left-4 text-[#FF7F50] opacity-20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.354 13.536 17.38 12.971L17.38 12.721C16.946 12.763 16.504 12.784 16.054 12.784C14.688 12.784 13.521 12.35 12.554 11.481C11.588 10.613 11.104 9.471 11.104 8.054C11.104 6.621 11.596 5.463 12.579 4.579C13.563 3.696 14.754 3.254 16.154 3.254C17.621 3.254 18.838 3.754 19.804 4.754C20.771 5.754 21.254 7.054 21.254 8.654C21.254 11.021 20.471 13.254 18.904 15.354C17.338 17.454 15.708 19.338 14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.321 15.923 5.929 15.081C6.537 14.239 7.354 13.536 8.38 12.971L8.38 12.721C7.946 12.763 7.504 12.784 7.054 12.784C5.688 12.784 4.521 12.35 3.554 11.481C2.588 10.613 2.104 9.471 2.104 8.054C2.104 6.621 2.596 5.463 3.579 4.579C4.563 3.696 5.754 3.254 7.154 3.254C8.621 3.254 9.838 3.754 10.804 4.754C11.771 5.754 12.254 7.054 12.254 8.654C12.254 11.021 11.471 13.254 9.904 15.354C8.338 17.454 6.708 19.338 5.017 21Z" />
                    </svg>
                  </div>
                  <p className="text-2xl md:text-3xl font-serif italic text-gray-800 text-center relative z-10 leading-relaxed">
                    "En nuestro nido los niños vienen a construir conocimiento, no a memorizarlo."
                  </p>
                </blockquote>

                <div className="flex justify-center mb-10">
                  <img
                    src="/images/active-learning-logo.png"
                    alt="Active Learning Logo"
                    className="h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-lg text-gray-700 leading-relaxed space-y-6 text-center">
                  <p>
                    Nuestro Proyecto Educativo <strong className="text-[#FF7F50]">Active Learning</strong> tiene como principal objetivo fomentar un pensamiento ingenioso y flexible. Creemos que el Aprendizaje Activo, a través del juego y la exploración, es fundamental para desarrollar el máximo potencial de cada niño.
                  </p>
                  <p>
                    Las maestras actúan como guías y observadoras, creando un ambiente que motiva al niño a explorar, moverse y preguntar, facilitando una construcción constante y significativa de su comprensión del mundo.
                  </p>
                </div>

                {/* New Literacy Video Section */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                  {/* Video Column */}
                  <div className="relative order-2 lg:order-1">
                    <div className="absolute -inset-4 bg-[#FF7F50] rounded-[2rem] -rotate-3 opacity-20 blur-sm"></div>
                    <div className="absolute -inset-4 bg-yellow-300 rounded-[2rem] rotate-2 opacity-30 blur-sm"></div>
                    <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-black aspect-video transform hover:scale-[1.02] transition-transform duration-500">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/aMCu9PPvWzM"
                        title="Enfoque Socioconstructivista de la Lectura y Escritura"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* Decorative playful elements */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-full shadow-lg border-2 border-orange-100 hidden md:block animate-bounce delay-1000">
                      <span className="text-3xl">✍️</span>
                    </div>
                    <div className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-lg border-2 border-yellow-100 hidden md:block animate-pulse">
                      <span className="text-3xl">🧩</span>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span className="bg-orange-100 p-2 rounded-lg text-[#FF7F50]">
                        <BookOpen className="h-6 w-6" />
                      </span>
                      Lectura y Escritura
                    </h3>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p>
                        Las prácticas de lectura y escritura responden a un enfoque <strong className="text-[#FF7F50]">socioconstructivista y funcional</strong>. Para nosotros, el objetivo en educación inicial <span className="font-bold underline decoration-wavy decoration-yellow-400">NO</span> es que los niños dominen el sistema de escritura, lo más importante es que se sientan capaces de hacer uso del lenguaje.
                      </p>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Nuestras Sedes */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollAnimation direction="right">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Sedes</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Espacios diseñados para el aprendizaje, la seguridad y la diversión.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Sede Miraflores */}
            <ScrollAnimation direction="left">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src="/images/sedes/miraflores.jpg"
                    alt="Sede Miraflores"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sede Miraflores</h3>
                  <p className="text-gray-600 mb-6 flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    Calle General Suárez 1310, Miraflores
                  </p>
                  <Button asChild variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                    <a href="https://maps.app.goo.gl/EcPFAqU61mAs9v678" target="_blank" rel="noopener noreferrer">
                      Ver en Mapa
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Sede Palomas */}
            <ScrollAnimation direction="right">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src="/images/sedes/palomas.jpg"
                    alt="Sede Palomas"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sede Palomas</h3>
                  <p className="text-gray-600 mb-6 flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    Calle Las Palomas 213, Surquillo
                  </p>
                  <Button asChild variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700">
                    <a href="https://maps.app.goo.gl/FkLHW4pyck1sAtfr5" target="_blank" rel="noopener noreferrer">
                      Ver en Mapa
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
