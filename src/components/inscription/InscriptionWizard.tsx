"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inscriptionSchema, InscriptionData } from "@/lib/schemas/inscriptionSchema";
import { StepStudentData } from "@/components/inscription/steps/StepStudentData";
import { StepImportantInfo } from "@/components/inscription/steps/StepImportantInfo";
import { StepParentData } from "@/components/inscription/steps/StepParentData";
import { StepStudentPersonalData } from "@/components/inscription/steps/StepStudentPersonalData";
import { StepSignatures } from "@/components/inscription/steps/StepSignatures";
import { StepFinalize } from "@/components/inscription/steps/StepFinalize";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Save } from "lucide-react";

const steps = [
    { id: 1, title: "Datos Alumno", description: "Generales" },
    { id: 2, title: "Importante", description: "Info General" },
    { id: 3, title: "Padres", description: "Padre y Madre" }, // This combines father and mother
    { id: 4, title: "Personal", description: "Desarrollo/Salud" }, // Combined 5.1-5.4
    { id: 5, title: "Firmas", description: "Digitales" },
];

export function InscriptionWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const methods = useForm<InscriptionData>({
        resolver: zodResolver(inscriptionSchema) as any,
        mode: "onBlur",
    });

    const nextStep = async () => {
        let valid = false;
        if (currentStep === 1) valid = await methods.trigger("student");
        if (currentStep === 2) valid = await methods.trigger("important");
        if (currentStep === 3) {
            const fatherValid = await methods.trigger("father");
            const motherValid = await methods.trigger("mother");
            valid = fatherValid && motherValid;
        }
        if (currentStep === 4) valid = await methods.trigger("personal");
        if (currentStep === 5) valid = true; // Signatures

        if (valid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length + 1)); // +1 for the finalization step
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    return (
        <FormProvider {...methods}>
            <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden min-h-[600px] flex flex-col">
                {/* Stepper Header */}
                <div className="bg-orange-50 p-6 border-b border-orange-100 overflow-x-auto">
                    <div className="flex items-center min-w-max">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all
                  ${currentStep > step.id ? "bg-green-500 text-white" :
                                        currentStep === step.id ? "bg-orange-500 text-white shadow-lg scale-110" :
                                            "bg-orange-200 text-orange-400"}
                `}>
                                    {currentStep > step.id ? <Check className="w-6 h-6" /> : step.id}
                                </div>
                                <div className="ml-2 mr-4">
                                    <span className={`text-sm font-bold ${currentStep === step.id ? "text-orange-600" : "text-gray-400"}`}>
                                        {step.title}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`w-12 h-1 mx-2 rounded-full ${currentStep > step.id ? "bg-green-500" : "bg-orange-200"}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        {steps.find(s => s.id === currentStep)?.title || "Finalizar"}
                    </h2>

                    <div className="py-2">
                        {currentStep === 1 && <StepStudentData />}
                        {currentStep === 2 && <StepImportantInfo />}
                        {currentStep === 3 && (
                            <>
                                <StepParentData type="father" title="3.1. DATOS DEL PADRE" />
                                <StepParentData type="mother" title="3.2. DATOS DE LA MADRE" />
                            </>
                        )}
                        {currentStep === 4 && <StepStudentPersonalData />}
                        {currentStep === 5 && <StepSignatures />}
                        {currentStep === 6 && <StepFinalize />} {/* This is the finalization step, not part of the 'steps' array */}
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
                    <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1 || currentStep === 8}
                        className="border-gray-300 text-gray-600"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" /> Anterior
                    </Button>

                    {currentStep < 8 && (
                        <Button variant="ghost" className="text-orange-600 hover:bg-orange-50">
                            <Save className="w-4 h-4 mr-2" /> Guardar progreso
                        </Button>
                    )}

                    {currentStep < 8 && (
                        <Button
                            onClick={nextStep}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                        >
                            {currentStep === 7 ? "Finalizar" : "Siguiente"} <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </div>
        </FormProvider>
    );
}
