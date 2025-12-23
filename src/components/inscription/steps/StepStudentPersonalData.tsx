"use client";

import { useFormContext } from "react-hook-form";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";

export function StepStudentPersonalData() {
    const { register } = useFormContext<InscriptionData>();

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* 5.1 Embarazo y Parto */}
            <div className="space-y-6 border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-pink-600 flex items-center gap-2">
                    🤰 5.1 Embarazo y Parto
                </h3>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">¿Presentó alguna dificultad durante el embarazo o parto?</label>
                    <textarea {...register("personal.pregnancyDifficulty")} className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 block">Tipo de parto (Marque "X")</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value="Cesárea" {...register("personal.birthType")} className="w-4 h-4 text-orange-600" />
                                <span>Cesárea</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" value="Parto Natural" {...register("personal.birthType")} className="w-4 h-4 text-orange-600" />
                                <span>Parto Natural</span>
                            </label>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Tipo de sangre del niño(a)</label>
                        <select {...register("personal.bloodType")} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                            <option value="">Seleccione</option>
                            <option value="A+">A+</option>
                            <option value="A−">A−</option>
                            <option value="B+">B+</option>
                            <option value="B−">B−</option>
                            <option value="AB+">AB+</option>
                            <option value="AB−">AB−</option>
                            <option value="O+">O+</option>
                            <option value="O−">O−</option>
                            <option value="No sabe / No responde">No sabe / No responde</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 5.2 Hitos de Desarrollo */}
            <div className="space-y-6 border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2">
                    👶 5.2 A los cuántos meses su niño(a)...
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">Se sentó:</label>
                        <input {...register("personal.ageSat")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Meses" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">Gateó:</label>
                        <input {...register("personal.ageCrawled")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Meses" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">Se paró:</label>
                        <input {...register("personal.ageStood")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Meses" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">Caminó:</label>
                        <input {...register("personal.ageWalked")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Meses" />
                    </div>
                    <div className="space-y-1 col-span-2">
                        <label className="text-xs font-medium text-gray-700">Dijo primeras palabras:</label>
                        <input {...register("personal.ageFirstWords")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Meses/Edad" />
                    </div>
                    <div className="space-y-1 col-span-2">
                        <label className="text-xs font-medium text-gray-700">Habló con fluidez:</label>
                        <input {...register("personal.ageFluentSpeech")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Meses/Edad" />
                    </div>
                </div>
            </div>

            {/* 5.3 Hábitos y Salud */}
            <div className="space-y-6 border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-green-600 flex items-center gap-2">
                    🛌 5.3 Hábitos y Salud
                </h3>
                <p className="text-sm text-gray-500 italic">* De acuerdo a la edad de su hijo(a)</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Hora dormir noche</label>
                        <input type="time" {...register("personal.sleepTime")} className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Hora despertar mañana</label>
                        <input type="time" {...register("personal.wakeTime")} className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 block">¿Siesta?</label>
                        <select {...register("personal.napTime")} className="w-full p-2 border border-gray-300 rounded-md bg-white">
                            <option value="No duerme">No duerme</option>
                            <option value="Mañana">Mañana</option>
                            <option value="Tarde">Tarde</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Tiempo de siesta</label>
                        <input {...register("personal.napDuration")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Ej: 1 hora" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">¿Usa pañal?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" {...register("personal.diaperDay")} className="w-4 h-4 text-orange-600 rounded" />
                            <span>Día</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" {...register("personal.diaperNight")} className="w-4 h-4 text-orange-600 rounded" />
                            <span>Noche</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Enfermedades</label>
                    <textarea {...register("personal.diseases")} className="w-full p-2 border border-gray-300 rounded-md h-16 resize-none" placeholder="Alergias, asma, etc." />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Accidentes</label>
                    <textarea {...register("personal.accidents")} className="w-full p-2 border border-gray-300 rounded-md h-16 resize-none" placeholder="Golpes fuertes, caídas, etc." />
                </div>
            </div>

            {/* 5.4 Información Adicional */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
                    📝 5.4 Información Adicional
                </h3>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">¿Cuenta con informe de especialista?</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2"><input type="radio" value="Si" {...register("personal.specialistReport")} /> Si</label>
                            <label className="flex items-center gap-2"><input type="radio" value="No" {...register("personal.specialistReport")} /> No</label>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">¿Realiza alguna terapia?</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2"><input type="radio" value="Si" {...register("personal.therapy")} /> Si</label>
                            <label className="flex items-center gap-2"><input type="radio" value="No" {...register("personal.therapy")} /> No</label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">¿Qué tipo de terapia realiza?</label>
                        <input {...register("personal.therapyType")} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Solo si marcó Si" />
                    </div>
                </div>
            </div>

        </div>
    );
}
