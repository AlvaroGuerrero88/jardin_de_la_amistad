"use client";

import { Section } from "@/components/ui/section";
import { InscriptionWizard } from "@/components/inscription/InscriptionWizard";
import { motion } from "framer-motion";

export default function FichaInscripcionPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-28 md:pt-32">
            {/* Header / Title Section */}
            <section className="bg-orange-500 text-white py-12 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-4 font-display"
                    >
                        Ficha de Inscripción 2026
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-orange-100 text-lg max-w-2xl mx-auto"
                    >
                        Completa los siguientes pasos para generar tu ficha de matrícula.
                        Puedes guardar tu progreso y continuar después.
                    </motion.p>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
            </section>

            {/* Wizard Container */}
            <Section className="py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    <InscriptionWizard />
                </div>
            </Section>
        </div>
    );
}
