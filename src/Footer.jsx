import './index.css';
import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#31859D] text-white py-8 mt-10">
            <div className="container mx-auto px-4">
                {/* Sección superior: Enlaces y contacto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 2: Enlaces rápidos */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
                            <li><Link to="/recursos" className="hover:text-gray-300">Recursos Gratuitos</Link></li>
                            <li><Link to="/tutorias" className="hover:text-gray-300">Tutorias</Link></li>
                            <li><Link to="/opiniones" className="hover:text-gray-300">Dejar opinion</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto y redes sociales */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <p className="text-sm mb-4">
                            ¿Tienes preguntas o sugerencias? ¡Nos encantaría escucharte!
                        </p>
                        <ul className="space-y-2">
                            <li><a href="mailto:soporte@tpv.com" className="hover:text-gray-300">soporte@tpv.com</a></li>
                            <li><a href="tel:+123456789" className="hover:text-gray-300">+1 (234) 567-89</a></li>
                        </ul>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://facebook.com/tpv" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/facebook.svg" alt="Facebook" className="h-6 w-6 hover:opacity-75" />
                            </a>
                            <a href="https://youtube.com/tpv" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/icons8-youtube.svg" alt="YouTube" className="h-6 w-6 hover:opacity-75" />
                            </a>
                            <a href="https://instagram.com/tpv" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/instagram.png" alt="Instagram" className="h-6 w-6 hover:opacity-75" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <hr className="border-gray-600 my-6" />

                {/* Sección inferior: Derechos de autor */}
                <div className="text-center text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} TPV. Todos los derechos reservados.
                    </p>
                    <p className="mt-2">
                        <Link to="/politica-privacidad" className="hover:text-gray-300">Política de Privacidad</Link> | 
                        <Link to="/terminos-condiciones" className="hover:text-gray-300 ml-2">Términos y Condiciones</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;