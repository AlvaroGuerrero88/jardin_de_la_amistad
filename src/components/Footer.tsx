import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Jardín de la Amistad</h3>
                        <p className="text-gray-400">
                            Educando con amor y excelencia desde hace más de 30 años.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><Link href="/cuna" className="text-gray-400 hover:text-white transition-colors">Cuna</Link></li>
                            <li><Link href="/nido" className="text-gray-400 hover:text-white transition-colors">Nido</Link></li>
                            <li><Link href="/after-school" className="text-gray-400 hover:text-white transition-colors">After School</Link></li>
                            <li><Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>
                                <strong className="text-white block mb-1">Sede Miraflores</strong>
                                <div className="flex items-start space-x-2">
                                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                    <span>General Suárez 1310, Miraflores</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Phone className="h-4 w-4 flex-shrink-0" />
                                    <span>01 304 2922 / 902 159 500</span>
                                </div>
                            </li>
                            <li>
                                <strong className="text-white block mb-1">Sede Las Palomas</strong>
                                <div className="flex items-start space-x-2">
                                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                                    <span>Las Palomas 213, Surquillo</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <Phone className="h-4 w-4 flex-shrink-0" />
                                    <span>01 304 2922 / 902 159 500</span>
                                </div>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 text-center text-gray-500 text-sm">
                    © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Nido Jardín de la Amistad. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
