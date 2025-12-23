"use client";

import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";

export function StepSignatures() {
    const { setValue, watch } = useFormContext<InscriptionData>();
    const fatherSigRef = useRef<SignatureCanvas>(null);
    const motherSigRef = useRef<SignatureCanvas>(null);

    // Watch names to personalize the boxes
    const fatherName = watch("father.fullName") || "Papá";
    const motherName = watch("mother.fullName") || "Mamá";

    const clearFather = () => {
        fatherSigRef.current?.clear();
        setValue("signatures.fatherSignature", "");
    };

    const clearMother = () => {
        motherSigRef.current?.clear();
        setValue("signatures.motherSignature", "");
    };

    const saveSignatures = () => {
        // This could be called on "Next" or manually, but we usually sync on endStroke
        if (!fatherSigRef.current?.isEmpty()) {
            setValue("signatures.fatherSignature", fatherSigRef.current?.getTrimmedCanvas().toDataURL("image/png"));
        }
        if (!motherSigRef.current?.isEmpty()) {
            setValue("signatures.motherSignature", motherSigRef.current?.getTrimmedCanvas().toDataURL("image/png"));
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-center text-gray-800">Firmas de los Padres</h2>
            <p className="text-center text-gray-500 mb-6">
                Por favor, firme en los recuadros correspondientes.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-800 text-sm">
                ℹ️ Por favor, firmen en los recuadros correspondientes. Estas firmas se usarán para generar la ficha de matrícula.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Father Signature */}
                <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex justify-between">
                        <span>Firma de {fatherName}</span>
                        <button type="button" onClick={clearFather} className="text-xs text-red-500 flex items-center hover:underline">
                            <Eraser className="w-3 h-3 mr-1" /> Borrar
                        </button>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white overflow-hidden h-40 relative group hover:border-orange-300 transition-colors">
                        <SignatureCanvas
                            ref={fatherSigRef}
                            penColor="black"
                            canvasProps={{ className: "sigCanvas w-full h-full" }}
                            onEnd={() => setValue("signatures.fatherSignature", fatherSigRef.current?.getTrimmedCanvas().toDataURL("image/png"))}
                        />
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-gray-200 text-4xl font-bold opacity-30 select-none">
                            FIRMAR AQUÍ
                        </div>
                    </div>
                </div>

                {/* Mother Signature */}
                <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 flex justify-between">
                        <span>Firma de {motherName}</span>
                        <button type="button" onClick={clearMother} className="text-xs text-red-500 flex items-center hover:underline">
                            <Eraser className="w-3 h-3 mr-1" /> Borrar
                        </button>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white overflow-hidden h-40 relative group hover:border-orange-300 transition-colors">
                        <SignatureCanvas
                            ref={motherSigRef}
                            penColor="black"
                            canvasProps={{ className: "sigCanvas w-full h-full" }}
                            onEnd={() => setValue("signatures.motherSignature", motherSigRef.current?.getTrimmedCanvas().toDataURL("image/png"))}
                        />
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-gray-200 text-4xl font-bold opacity-30 select-none">
                            FIRMAR AQUÍ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
