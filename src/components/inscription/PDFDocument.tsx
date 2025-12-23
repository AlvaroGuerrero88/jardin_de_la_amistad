import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
import { InscriptionData } from "@/lib/schemas/inscriptionSchema";

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 9,
        lineHeight: 1.4,
    },
    header: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E65100',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerContent: {
        textAlign: 'right',
    },
    logo: {
        width: 80,
        height: 40,
        objectFit: 'contain',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E65100',
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        backgroundColor: '#FFF3E0',
        padding: 4,
        marginTop: 10,
        marginBottom: 5,
        color: '#E65100',
        borderLeftWidth: 3,
        borderLeftColor: '#E65100',
    },
    subTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 3,
        color: '#444',
        textDecoration: 'underline',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    col2: {
        width: '50%',
        flexDirection: 'row',
    },
    col3: {
        width: '33.33%',
        flexDirection: 'row',
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginRight: 4,
    },
    value: {
        color: '#000',
        flex: 1,
    },
    checkbox: {
        width: 10,
        height: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: '#E65100',
    },
    signatureSection: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center', // Centered signatures roughly
        gap: 40,
    },
    signatureBox: {
        width: 200,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#000',
        paddingTop: 5,
    },
    signatureImage: {
        width: 120,
        height: 60,
        marginBottom: 2,
    },
});

interface PDFDocumentProps {
    data: InscriptionData;
}

const Field = ({ label, value, width = '100%' }: { label: string, value?: string, width?: string }) => (
    <View style={{ flexDirection: 'row', width, marginBottom: 2 }}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value || '-'}</Text>
    </View>
);

export function InscriptionPDF({ data }: PDFDocumentProps) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    {/* Logo - assuming /logo.png is accessible from public folder. 
                        Note: In some local setups, might need window.location.origin + /logo.png 
                        but usually relative works in browser-generated blob scenarios if served from same origin */}
                    <Image src="/logo.png" style={styles.logo} />
                    <View style={styles.headerContent}>
                        <Text style={styles.title}>FICHA DE MATRÍCULA 2026</Text>
                        <Text style={{ fontSize: 10 }}>Nido Jardín de la Amistad</Text>
                    </View>
                </View>

                {/* 1. DATOS GENERALES DEL ALUMNO */}
                <View>
                    <Text style={styles.sectionTitle}>1. DATOS GENERALES DEL ALUMNO</Text>
                    <View style={styles.row}>
                        <Field label="Apellidos" value={data.student.lastName} width="50%" />
                        <Field label="Nombres" value={data.student.firstName} width="50%" />
                    </View>
                    <View style={styles.row}>
                        <Field label="Fecha Nac." value={data.student.birthDate} width="25%" />
                        <Field label="Edad" value={data.student.age} width="25%" />
                        <Field label="N° Hnos" value={data.student.siblings} width="25%" />
                        <Field label="Sexo" value={data.student.sex} width="25%" />
                    </View>
                    <Field label="Dirección" value={data.student.address} />
                    <View style={styles.row}>
                        <Field label="DNI" value={data.student.dni} width="33%" />
                        <Field label="Tel. Fijo" value={data.student.fixedPhone} width="33%" />
                        <Field label="Seguro Médico" value={data.student.insurance} width="33%" />
                    </View>
                </View>

                {/* 2. INFORMACIÓN IMPORTANTE */}
                <View>
                    <Text style={styles.sectionTitle}>2. INFORMACIÓN IMPORTANTE</Text>
                    <View style={styles.row}>
                        <Text style={{ ...styles.label, width: '60%' }}>¿Asistió a Estimulación (PET) / Cuna / Nido?</Text>
                        <Text style={styles.value}>{data.important?.attendedPrevious}</Text>
                    </View>
                    {data.important?.previousCenterName && (
                        <Field label="Nombre del Centro" value={data.important.previousCenterName} />
                    )}
                    <Field label="¿Cómo se enteró?" value={data.important?.howFound} />
                    <Field label="¿Por qué eligió el Nido?" value={data.important?.whyChose} />

                    <Text style={{ fontWeight: 'bold', marginTop: 4, marginBottom: 2 }}>En caso de emergencia llamar a:</Text>
                    <View style={styles.row}>
                        <Field label="Nombre" value={data.important?.emergencyContact?.name} width="60%" />
                        <Field label="Teléfono" value={data.important?.emergencyContact?.phone} width="40%" />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                        <Text style={styles.label}>Responsable de Pagos:</Text>
                        <Text style={styles.value}>{data.important?.paymentResponsible}</Text>
                    </View>
                </View>

                {/* 3 & 4. DATOS DE LOS PADRES */}
                <View>
                    <Text style={styles.sectionTitle}>3. DATOS DEL PADRE</Text>
                    <ParentFields data={data.father} />
                </View>
                <View>
                    <Text style={styles.sectionTitle}>4. DATOS DE LA MADRE</Text>
                    <ParentFields data={data.mother} />
                </View>

                {/* 5. DATOS PERSONALES DEL ALUMNO */}
                <View wrap={false}>
                    <Text style={styles.sectionTitle}>5. DATOS PERSONALES DEL ALUMNO</Text>

                    <Text style={styles.subTitle}>5.1 Embarazo y Parto</Text>
                    <Field label="Dificultades embarazo/parto" value={data.personal?.pregnancyDifficulty} />
                    <View style={styles.row}>
                        <Field label="Tipo de Parto" value={data.personal?.birthType} width="50%" />
                        <Field label="Tipo de Sangre" value={data.personal?.bloodType} width="50%" />
                    </View>

                    <Text style={styles.subTitle}>5.2 Hitos de Desarrollo (Meses)</Text>
                    <View style={styles.row}>
                        <Field label="Se sentó" value={data.personal?.ageSat} width="25%" />
                        <Field label="Gateó" value={data.personal?.ageCrawled} width="25%" />
                        <Field label="Se paró" value={data.personal?.ageStood} width="25%" />
                        <Field label="Caminó" value={data.personal?.ageWalked} width="25%" />
                    </View>
                    <View style={styles.row}>
                        <Field label="Primeras palabras" value={data.personal?.ageFirstWords} width="50%" />
                        <Field label="Habló con fluidez" value={data.personal?.ageFluentSpeech} width="50%" />
                    </View>

                    <Text style={styles.subTitle}>5.3 Hábitos y Salud</Text>
                    <View style={styles.row}>
                        <Field label="Dorme noche" value={data.personal?.sleepTime} width="33%" />
                        <Field label="Despierta" value={data.personal?.wakeTime} width="33%" />
                        <Field label="Siesta" value={`${data.personal?.napTime || ''} (${data.personal?.napDuration || ''})`} width="33%" />
                    </View>
                    <View style={styles.row}>
                        <Text style={{ ...styles.label, width: '20%' }}>Usa pañal:</Text>
                        <Text style={{ fontSize: 9, marginRight: 10 }}>Día: {data.personal?.diaperDay ? 'SI' : 'NO'}</Text>
                        <Text style={{ fontSize: 9 }}>Noche: {data.personal?.diaperNight ? 'SI' : 'NO'}</Text>
                    </View>
                    <Field label="Enfermedades" value={data.personal?.diseases} />
                    <Field label="Accidentes" value={data.personal?.accidents} />

                    <Text style={styles.subTitle}>5.4 Información Adicional</Text>
                    <View style={styles.row}>
                        <Field label="Informe especialista" value={data.personal?.specialistReport} width="50%" />
                        <Field label="Terapia" value={data.personal?.therapy} width="50%" />
                    </View>
                    {data.personal?.therapy === "Si" && (
                        <Field label="Tipo de Terapia" value={data.personal?.therapyType} />
                    )}
                </View>

                {/* Firmas */}
                <View style={styles.signatureSection} wrap={false}>
                    <View style={styles.signatureBox}>
                        {data.signatures?.fatherSignature && (
                            <Image src={data.signatures.fatherSignature} style={styles.signatureImage} />
                        )}
                        <Text>Firma del Padre</Text>
                    </View>
                    <View style={styles.signatureBox}>
                        {data.signatures?.motherSignature && (
                            <Image src={data.signatures.motherSignature} style={styles.signatureImage} />
                        )}
                        <Text>Firma de la Madre</Text>
                    </View>
                </View>

                <Text style={{ position: 'absolute', bottom: 20, left: 30, right: 30, textAlign: 'center', fontSize: 8, color: '#999' }}>
                    Documento generado el {new Date().toLocaleDateString()} - Jardín de la Amistad
                </Text>
            </Page>
        </Document>
    );
}

const ParentFields = ({ data }: { data: any }) => (
    <View style={{ marginBottom: 4 }}>
        <View style={styles.row}>
            <Field label="Apellidos y Nombres" value={data.fullName} width="60%" />
            <Field label="Celular" value={data.mobilePhone} width="40%" />
        </View>
        <View style={styles.row}>
            <Field label="Fecha Nac." value={data.birthDate} width="25%" />
            <Field label="Edad" value={data.age} width="25%" />
            <Field label="DNI" value={data.dni} width="25%" />
            <Field label="Est. Civil" value={data.civilStatus} width="25%" />
        </View>
        <View style={styles.row}>
            <Field label="Nacionalidad" value={data.nationality} width="33%" />
            <Field label="Distrito" value={data.district} width="33%" />
            <Field label="Religión" value={data.religion} width="33%" />
        </View>
        <Field label="Dirección" value={data.address} />
        <View style={styles.row}>
            <Field label="Profesión" value={data.profession} width="50%" />
            <Field label="Grado Estudios" value={data.educationLevel} width="50%" />
        </View>
        <View style={styles.row}>
            <Field label="Cargo" value={data.jobTitle} width="50%" />
            <Field label="Centro Trabajo" value={data.workCenter} width="50%" />
        </View>
        <Field label="Email" value={data.email} />
    </View>
);
