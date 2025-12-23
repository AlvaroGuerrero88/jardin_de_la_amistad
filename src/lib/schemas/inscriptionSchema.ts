import { z } from "zod";

export const studentSchema = z.object({
    firstName: z.string().min(2, "Obligatorio"),
    lastName: z.string().min(2, "Obligatorio"),
    birthDate: z.string().refine((date) => new Date(date).toString() !== 'Invalid Date', { message: "Fecha inválida" }),
    age: z.string().optional(),
    siblings: z.string().optional(),
    sex: z.string().refine((val) => ["Masculino", "Femenino"].includes(val), { message: "Seleccione sexo" }),
    address: z.string().min(5, "Obligatorio"),
    dni: z.string().length(8, "8 dígitos"),
    fixedPhone: z.string().optional(),
    insurance: z.string().optional(),
});

export const importantInfoSchema = z.object({
    attendedPrevious: z.string().refine((val) => ["Si", "No"].includes(val), { message: "Seleccione" }).optional(),
    previousCenterName: z.string().optional(),
    howFound: z.string().optional(),
    whyChose: z.string().optional(),
    emergencyContact: z.object({
        name: z.string().min(3, "Obligatorio"),
        phone: z.string().min(9, "Obligatorio"),
    }),
    paymentResponsible: z.string().refine((val) => ["Papá", "Mamá"].includes(val), { message: "Seleccione responsable" }),
});

export const parentSchema = z.object({
    fullName: z.string().min(5, "Obligatorio"),
    birthDate: z.string().optional(),
    age: z.string().optional(),
    dni: z.string().length(8, "8 dígitos"),
    civilStatus: z.string().optional(),
    nationality: z.string().optional(),
    district: z.string().optional(),
    address: z.string().optional(),
    profession: z.string().optional(),
    educationLevel: z.string().optional(), // Grado de estudios
    jobTitle: z.string().optional(), // Cargo
    workCenter: z.string().optional(),
    workPhone: z.string().optional(), // There was workPhone in previous but Celular is main
    mobilePhone: z.string().min(9, "9 dígitos"), // Celular
    email: z.string().email("Inválido"),
    languages: z.string().optional(),
    religion: z.string().optional(),
});

// Point 5: Personal Data
export const personalDataSchema = z.object({
    // 5.1 Embarazo
    pregnancyDifficulty: z.string().optional(),
    birthType: z.enum(["Cesárea", "Parto Natural"]).optional(),
    bloodType: z.string().optional(),

    // 5.2 Hitos (Meses)
    ageSat: z.string().optional(),
    ageCrawled: z.string().optional(),
    ageStood: z.string().optional(),
    ageWalked: z.string().optional(),
    ageFirstWords: z.string().optional(),
    ageFluentSpeech: z.string().optional(),

    // 5.3 Habitos
    sleepTime: z.string().optional(),
    wakeTime: z.string().optional(),
    napTime: z.enum(["Mañana", "Tarde", "No duerme"]).optional(),
    napDuration: z.string().optional(),
    diaperDay: z.boolean().default(false),
    diaperNight: z.boolean().default(false),
    diseases: z.string().optional(),
    accidents: z.string().optional(),

    // 5.4 Adicional
    specialistReport: z.enum(["Si", "No"]).optional(),
    therapy: z.enum(["Si", "No"]).optional(),
    therapyType: z.string().optional(),
});

export const signatureSchema = z.object({
    fatherSignature: z.string().optional(),
    motherSignature: z.string().optional(),
});

export const inscriptionSchema = z.object({
    student: studentSchema,
    important: importantInfoSchema,
    father: parentSchema,
    mother: parentSchema,
    personal: personalDataSchema,
    signatures: signatureSchema,
});

export type InscriptionData = z.infer<typeof inscriptionSchema>;
