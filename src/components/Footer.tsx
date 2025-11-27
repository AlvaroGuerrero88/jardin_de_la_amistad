import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1B4965] text-white py-12 relative z-50" style={{ backgroundImage: 'none' }}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#FF7F50]">Jardín de la Amistad</h3>
                        <p className="text-gray-300 font-medium">
                            Educando con amor y excelencia desde hace más de 30 años.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#FF7F50]">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><Link href="/cuna" className="text-gray-300 hover:text-white transition-colors font-medium">Cuna</Link></li>
                            <li><Link href="/nido" className="text-gray-300 hover:text-white transition-colors font-medium">Nido</Link></li>
                            <li><Link href="/after-school" className="text-gray-300 hover:text-white transition-colors font-medium">After School</Link></li>
                            <li><Link href="/contacto" className="text-gray-300 hover:text-white transition-colors font-medium">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#FF7F50]">Contacto</h3>
                        <ul className="space-y-4 text-gray-300 text-sm font-medium">
                            <li>
                                <strong className="text-white block mb-1 text-base">Sede Miraflores</strong>
                                <div className="flex items-start space-x-2">
                                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[#FF7F50]" />
                                    <span>General Suárez 1310, Miraflores</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Phone className="h-4 w-4 flex-shrink-0 text-[#FF7F50]" />
                                    <span>01 304 2922 / 902 159 500</span>
                                </div>
                            </li>
                            <li>
                                <strong className="text-white block mb-1 text-base">Sede Las Palomas</strong>
                                <div className="flex items-start space-x-2">
                                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[#FF7F50]" />
                                    <span>Las Palomas 213, Surquillo</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Phone className="h-4 w-4 flex-shrink-0 text-[#FF7F50]" />
                                    <span>01 304 2922 / 902 159 500</span>
                                </div>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-[#FF7F50] hover:text-[#FF7F50]/80 transition-colors"><Facebook className="h-6 w-6" /></Link>
                            <Link href="#" className="text-[#FF7F50] hover:text-[#FF7F50]/80 transition-colors"><Instagram className="h-6 w-6" /></Link>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-white/10 my-8" />

                <div className="text-center text-gray-400 text-sm">
                    © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Nido Jardín de la Amistad. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
