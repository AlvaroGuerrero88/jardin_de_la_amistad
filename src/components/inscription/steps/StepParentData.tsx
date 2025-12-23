"use client";

import { useFormContext } from "react-hook-form";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";

interface StepParentDataProps {
    type: "father" | "mother";
    title?: string;
}

export function StepParentData({ type, title }: StepParentDataProps) {
    const { register, formState: { errors } } = useFormContext<InscriptionData>();
    const prefix = type; // "father" or "mother"
    const displayTitle = title || (type === "father" ? "Datos del Padre" : "Datos de la Madre");
    const icon = type === "father" ? "👨" : "👩";

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{displayTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Apellidos y Nombres</label>
                    <input {...register(`${prefix}.fullName`)} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors[prefix]?.fullName && <p className="text-red-500 text-xs">{errors[prefix]?.fullName?.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                    <input type="date" {...register(`${prefix}.birthDate`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Edad</label>
                    <input {...register(`${prefix}.age`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">DNI</label>
                    <input {...register(`${prefix}.dni`)} maxLength={8} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors[prefix]?.dni && <p className="text-red-500 text-xs">{errors[prefix]?.dni?.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Estado Civil</label>
                    <select {...register(`${prefix}.civilStatus`)} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                        <option value="">Seleccione</option>
                        <option value="Soltero(a)">Soltero(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option value="Conviviente">Conviviente</option>
                        <option value="Divorciado(a)">Divorciado(a)</option>
                        <option value="Viudo(a)">Viudo(a)</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nacionalidad</label>
                    <input {...register(`${prefix}.nationality`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Distrito</label>
                    <input {...register(`${prefix}.district`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Dirección</label>
                    <input {...register(`${prefix}.address`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Profesión</label>
                    <input {...register(`${prefix}.profession`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Grado de Estudios</label>
                    <select {...register(`${prefix}.educationLevel`)} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                        <option value="">Seleccione</option>
                        <option value="Primaria incompleta">Primaria incompleta</option>
                        <option value="Primaria completa">Primaria completa</option>
                        <option value="Secundaria incompleta">Secundaria incompleta</option>
                        <option value="Secundaria completa">Secundaria completa</option>
                        <option value="Técnico incompleto">Técnico incompleto</option>
                        <option value="Técnico completo">Técnico completo</option>
                        <option value="Universitaria incompleta">Universitaria incompleta</option>
                        <option value="Universitaria completa">Universitaria completa</option>
                        <option value="Maestría / Posgrado">Maestría / Posgrado</option>
                        <option value="Doctorado">Doctorado</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Cargo</label>
                    <input {...register(`${prefix}.jobTitle`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Centro de Trabajo</label>
                    <input {...register(`${prefix}.workCenter`)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Celular</label>
                    <input {...register(`${prefix}.mobilePhone`)} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors[prefix]?.mobilePhone && <p className="text-red-500 text-xs">{errors[prefix]?.mobilePhone?.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Correo Personal</label>
                    <input type="email" {...register(`${prefix}.email`)} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors[prefix]?.email && <p className="text-red-500 text-xs">{errors[prefix]?.email?.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Lengua materna</label>
                    <select {...register(`${prefix}.languages`)} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                        <option value="">Seleccione</option>
                        <option value="Español">Español</option>
                        <option value="Inglés">Inglés</option>
                        <option value="Portugués">Portugués</option>
                        <option value="Francés">Francés</option>
                        <option value="Alemán">Alemán</option>
                        <option value="Italiano">Italiano</option>
                        <option value="Chino mandarín">Chino mandarín</option>
                        <option value="Quechua">Quechua</option>
                        <option value="Aimara">Aimara</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Religión</label>
                    <select {...register(`${prefix}.religion`)} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                        <option value="">Seleccione</option>
                        <option value="Católica">Católica</option>
                        <option value="Evangélica">Evangélica</option>
                        <option value="Adventista">Adventista</option>
                        <option value="Testigo de Jehová">Testigo de Jehová</option>
                        <option value="Mormona">Mormona</option>
                        <option value="Protestante">Protestante</option>
                        <option value="Budista">Budista</option>
                        <option value="Hindú">Hindú</option>
                        <option value="Judía">Judía</option>
                        <option value="Musulmana">Musulmana</option>
                        <option value="Ninguna">Ninguna</option>
                        <option value="Creyente sin afiliación formal">Creyente sin afiliación formal</option>
                        <option value="Ateo/a">Ateo/a</option>
                        <option value="Agnóstica">Agnóstica</option>
                        <option value="No sabe / No responde">No sabe / No responde</option>
                        <option value="Otra">Otra</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
