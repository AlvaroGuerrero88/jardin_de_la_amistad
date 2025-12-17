"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                </div>

                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
                    >
                        Contáctanos
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Estamos aquí para resolver todas tus dudas. ¡Ven a conocer nuestra familia!
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-8">Información de Contacto</h2>
                        <div className="space-y-8">
                            {/* Sede Miraflores */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-4 text-primary">Sede Miraflores</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                                        <p className="text-gray-600">General Suárez 1310, Miraflores</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                                        <div>
                                            <p className="text-gray-600">905 455 922</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sede Las Palomas */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-4 text-secondary">Sede Las Palomas</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                                        <p className="text-gray-600">Las Palomas 213, Surquillo</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                                        <div>
                                            <p className="text-gray-600">01 304 2922</p>
                                            <p className="text-gray-600">902 159 500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start pl-6">
                                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-1">Email</h3>
                                    <p className="text-gray-600">admision@jardindelaamistad.com</p>
                                </div>
                            </div>
                            <div className="flex items-start pl-6">
                                <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-1">Horario de Atención</h3>
                                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Maps */}
                        <div className="mt-8 space-y-6">
                            <div>
                                <h3 className="font-bold mb-2 text-gray-700">Ubicación Sede Miraflores</h3>
                                <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.074209355445!2d-77.03254401683809!3d-12.107072211661523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86b5821500b%3A0xf6d1769d6d64ca7e!2sNido%20Jard%C3%ADn%20de%20La%20Amistad!5e0!3m2!1ses-419!2spe!4v1764206745023!5m2!1ses-419!2spe"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold mb-2 text-gray-700">Ubicación Sede Las Palomas</h3>
                                <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.074209355445!2d-77.03254401683809!3d-12.107072211661523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c86ce9aa74e3%3A0x72dc1d2ffe18a0f9!2sNido%20Jard%C3%ADn%20de%20la%20Amistad!5e0!3m2!1ses-419!2spe!4v1764206830615!5m2!1ses-419!2spe"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gray-50 p-8 rounded-2xl"
                    >
                        <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Tu apellido" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="tucorreo@ejemplo.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="999 888 777" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento del Hijo/a</label>
                                <input type="date" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Interés</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                                    <option>Estimulación Temprana</option>
                                    <option>Cuna</option>
                                    <option>Nido</option>
                                    <option>After School</option>
                                    <option>Talleres de Verano</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="¿En qué podemos ayudarte?" />
                            </div>
                            <Button type="submit" className="w-full">Enviar Mensaje</Button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
