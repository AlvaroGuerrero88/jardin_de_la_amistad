"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Users, Clock, Baby, Star, Sparkles, Sun, MapPin } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left Content - Text */}
        <div className="flex-none w-full md:w-[40%] flex items-center justify-center bg-[#C4E0F5] relative z-10 py-20 px-4 md:px-12 lg:px-20">
          {/* Background Pattern/Gradient for Text Area */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-center md:text-left relative z-20"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-[#1B4965] mb-6 tracking-tight drop-shadow-sm font-display leading-tight">
                Bienvenidos al <br />
                <span className="text-[#FF7F50] inline-block mt-2 drop-shadow-sm bg-white/90 px-4 rounded-lg">Jardín de la Amistad</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-[#1B4965]/80 mb-10 drop-shadow-sm font-medium leading-relaxed"
            >
              Un espacio lleno de amor, aprendizaje y diversión para el desarrollo integral de tus hijos.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center md:justify-start"
            >
              <Button asChild size="lg" className="text-lg bg-primary hover:bg-primary/90 text-white px-10 py-7 h-auto rounded-full shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-300 border-4 border-white/10">
                <Link href="/contacto">Solicita una visita guiada</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Image Carousel */}
        <div className="flex-none w-full md:w-[60%] relative min-h-[50vh] md:min-h-screen">
          <HeroCarousel />
        </div>

        {/* Unified Wavy Bottom Divider - Spans entire section */}
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

        <div className="text-center mb-20 relative z-10">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Descubre Nuestro Mundo</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Programas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una educación personalizada para cada etapa del desarrollo de tu pequeño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`
                rounded-[2rem] p-8 transition-all duration-300 border-2
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
              <Link href={service.href} className="w-full">
                <Button variant="ghost" className="w-full rounded-full group-hover:bg-white/50">
                  Ver detalles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3]">
                  <img src="/philosophy.jpg" alt="Nuestra Filosofía - Niños felices" className="object-cover w-full h-full" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestras Sedes */}
      <Section className="bg-gray-50 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Sedes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Espacios diseñados para el aprendizaje, la seguridad y la diversión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Sede Miraflores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
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
          </motion.div>

          {/* Sede Palomas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
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
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

// Updated program order
