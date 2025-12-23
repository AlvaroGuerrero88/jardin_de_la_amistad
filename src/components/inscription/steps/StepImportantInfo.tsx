"use client";

import { useFormContext } from "react-hook-form";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";

export function StepImportantInfo() {
    const { register, formState: { errors } } = useFormContext<InscriptionData>();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Centro Anterior */}
            <div className="space-y-4 border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-orange-600 flex items-center">
                    🏫 Centro Educativo Anterior
                </h3>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">¿Asistió anteriormente a un Programa de Estimulación Temprana (PET), cuna o nido?</label>
                    <select
                        {...register("important.attendedPrevious")}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white"
                    >
                        <option value="">Seleccione</option>
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>
                    {errors.important?.attendedPrevious && <p className="text-red-500 text-xs">{errors.important.attendedPrevious.message}</p>}
                </div>

                {/* Conditional rendering could be added here, but keeping it simple as requested "Indique el nombre" nearby */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Indique el nombre del Centro (si aplica)</label>
                    <input
                        {...register("important.previousCenterName")}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>

            {/* General questions */}
            <div className="space-y-4 border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-blue-600">ℹ️ Información General</h3>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">¿Cómo se enteró del Jardín de la Amistad?</label>
                    <select {...register("important.howFound")} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                        <option value="">Seleccione</option>
                        <option value="Redes sociales (Facebook, Instagram, TikTok)">Redes sociales (Facebook, Instagram, TikTok)</option>
                        <option value="Página web oficial">Página web oficial</option>
                        <option value="Google / Búsqueda en internet">Google / Búsqueda en internet</option>
                        <option value="Recomendación de un familiar o amigo">Recomendación de un familiar o amigo</option>
                        <option value="Me lo recomendaron padres con hijos en el Jardín de la Amistad">Me lo recomendaron padres con hijos en el Jardín de la Amistad</option>
                        <option value="Publicidad impresa (afiches, volantes, banners)">Publicidad impresa (afiches, volantes, banners)</option>
                        <option value="Eventos o ferias educativas">Eventos o ferias educativas</option>
                        <option value="Vivo cerca / Soy vecino(a)">Vivo cerca / Soy vecino(a)</option>
                        <option value="Paso seguido por la zona">Paso seguido por la zona</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">¿Por qué eligió nuestro Nido?</label>
                    <textarea
                        {...register("important.whyChose")}
                        className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none"
                    />
                </div>
            </div>

            {/* Contacto de Emergencia */}
            <div className="space-y-4 border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-red-500 flex items-center">
                    🚑 Contacto de Emergencia
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">Familiar cercano (no padres).</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Nombres y Apellidos</label>
                        <input {...register("important.emergencyContact.name")} className="w-full p-2 border border-gray-300 rounded-md" />
                        {errors.important?.emergencyContact?.name && <p className="text-red-500 text-xs">{errors.important.emergencyContact.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Teléfono</label>
                        <input {...register("important.emergencyContact.phone")} className="w-full p-2 border border-gray-300 rounded-md" />
                        {errors.important?.emergencyContact?.phone && <p className="text-red-500 text-xs">{errors.important.emergencyContact.phone.message}</p>}
                    </div>
                </div>
            </div>

            {/* Responsable de Pagos */}
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-green-600 flex items-center">
                    💳 Responsable de Pagos
                </h3>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">Marque con una “X” al responsable:</label>
                    <div className="flex gap-6 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="Papá" {...register("important.paymentResponsible")} className="w-4 h-4 text-orange-600" />
                            <span>Papá</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" value="Mamá" {...register("important.paymentResponsible")} className="w-4 h-4 text-orange-600" />
                            <span>Mamá</span>
                        </label>
                    </div>
                    {errors.important?.paymentResponsible && <p className="text-red-500 text-xs">{errors.important.paymentResponsible.message}</p>}
                </div>
            </div>
        </div>
    );
}
