"use client";

import { useFormContext } from "react-hook-form";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";

export function StepStudentData() {
    const { register, formState: { errors } } = useFormContext<InscriptionData>();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Apellidos del Alumno</label>
                    <input {...register("student.lastName")} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors.student?.lastName && <p className="text-red-500 text-xs">{errors.student.lastName.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nombres del Alumno</label>
                    <input {...register("student.firstName")} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors.student?.firstName && <p className="text-red-500 text-xs">{errors.student.firstName.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                    <input type="date" {...register("student.birthDate")} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors.student?.birthDate && <p className="text-red-500 text-xs">{errors.student.birthDate.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Edad (Años)</label>
                    <input
                        {...register("student.age")}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Ej: 3"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">N° Hermanos</label>
                    <input {...register("student.siblings")} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Sexo</label>
                    <select {...register("student.sex")} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                        <option value="">Seleccione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    {errors.student?.sex && <p className="text-red-500 text-xs">{errors.student.sex.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">DNI</label>
                    <input {...register("student.dni")} maxLength={8} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors.student?.dni && <p className="text-red-500 text-xs">{errors.student.dni.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Seguro Médico</label>
                    <input {...register("student.insurance")} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium text-gray-700">Dirección</label>
                    <input {...register("student.address")} className="w-full p-2 border border-gray-300 rounded-md" />
                    {errors.student?.address && <p className="text-red-500 text-xs">{errors.student.address.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Teléfono Fijo</label>
                    <input {...register("student.fixedPhone")} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
            </div>
        </div>
    );
}
