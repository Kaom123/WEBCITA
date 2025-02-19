import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-screen h-[10vh] bg-[#31859D] flex items-center justify-between px-4 relative">
            {/* Logo */}
            <img src="src/assets/logo.png" className="object-contain h-10" alt="Logo" />

            {/* Botón de menú desplegable (ícono de hamburguesa) */}
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="absolute top-[10vh] right-0 bg-[#31859D] w-48 py-2 shadow-lg z-50">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-white hover:bg-[#2a6f83]"
                                onClick={toggleMenu}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/recursos"
                                className="block px-4 py-2 text-white hover:bg-[#2a6f83]"
                                onClick={toggleMenu}
                            >
                                Recursos Gratuitos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tutorias"
                                className="block px-4 py-2 text-white hover:bg-[#2a6f83]"
                                onClick={toggleMenu}
                            >
                                Tutorías
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/opiniones"
                                className="block px-4 py-2 text-white hover:bg-[#2a6f83]"
                                onClick={toggleMenu}
                            >
                                Dejar Opinión
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;