"use client";

import { useFormContext } from "react-hook-form";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { InscriptionPDF } from "../PDFDocument";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function StepFinalize() {
    const { getValues } = useFormContext<InscriptionData>();
    const [data, setData] = useState<InscriptionData | null>(null);

    useEffect(() => {
        // Set data on mount to ensure signatures and all fields are captured
        setData(getValues());
    }, [getValues]);

    if (!data) return <div>Cargando datos...</div>;

    return (
        <div className="text-center space-y-8 animate-in zoom-in duration-500 py-10">
            <div className="flex justify-center">
                <CheckCircle className="w-24 h-24 text-green-500" />
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">¡Ficha completada!</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    Has completado todos los pasos necesarios. Por favor, descarga tu ficha de matrícula en formato PDF, imprímela y preséntala en secretaría.
                </p>
            </div>

            <div className="flex justify-center pt-4">
                <PDFDownloadLink
                    document={<InscriptionPDF data={data} />}
                    fileName={`Ficha_Matricula_2026_${data.student.lastName}.pdf`}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full flex items-center shadow-lg transform active:scale-95 transition-all"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? (
                            "Generando PDF..."
                        ) : (
                            <>
                                <Download className="w-6 h-6 mr-2" />
                                Descargar Ficha PDF
                            </>
                        )
                    }
                </PDFDownloadLink>
            </div>

            <p className="text-sm text-gray-400 mt-8">
                Si tienes problemas con la descarga, por favor intenta nuevamente o contacta con nosotros.
            </p>
        </div>
    );
}
