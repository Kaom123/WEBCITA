import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import './index.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        telefono: "",
        email: "",
        persona: "",
        material: "",
        servicio: "",
        nivel: "",
        mensaje: "",
        idioma: "",
    });

    const [successMessage, setSuccessMessage] = useState(""); // Estado para mensaje de éxito
    const [errorMessage, setErrorMessage] = useState(""); // Estado para mensaje de error

    // Maneja cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario se recargue

        // Limpiar mensajes anteriores
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch('http://localhost:2412/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Datos enviados correctamente.");
                setFormData({ // Limpiar el formulario después de enviar
                    name: "",
                    telefono: "",
                    email: "",
                    persona: "",
                    material: "",
                    servicio: "",
                    nivel: "",
                    mensaje: "",
                    idioma: "",
                });
            } else {
                setErrorMessage("Error al enviar los datos. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setErrorMessage("Error de conexión. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-100">
            <NavBar />
            <br />
            <section className="text-justify flex flex-col w-[90%] gap-8 items-center justify-center p-8 bg-gray-100 m-auto rounded-md shadow-[0_0_5px] shadow-black">
         
          <p className="text-md/relaxed text-black m-auto">
          Valoramos tu interés en nuestra capacidad de sumarte.

Queremos darte atención de calidad, para ello es importante que nos digas lo que deseas de nosotros. 

En función de tu información te contactaremos en el menor tiempo posible.
          </p>
        </section>
            <br />
            <div className="flex justify-center items-center w-[90%] m-auto">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded shadow-md w-[90%] max-w-lg shadow-black">
                    <h1 className="text-center font-bold text-lg font-mulish">Datos de contacto</h1>

                    {/* Mensaje de éxito */}
                    {successMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{successMessage}</span>
                        </div>
                    )}

                    {/* Mensaje de error */}
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{errorMessage}</span>
                        </div>
                    )}

                    {/* Campos del formulario */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="p-2 border rounded"
                            onChange={handleChange}
                            value={formData.name}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="telefono" className="mb-2">Teléfono</label>
                        <input
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="+34 432 123 442"
                            className="p-2 border rounded"
                            onChange={handleChange}
                            value={formData.telefono}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="p-2 border rounded"
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="persona" className="mb-2">Actúas como:</label>
                        <select
                            name="persona"
                            id="persona"
                            className="p-2 border rounded"
                            onChange={handleChange}
                            value={formData.persona}
                        >
                            <option value="estudiante">Estudiante</option>
                            <option value="representante">Madre/Padre</option>
                            <option value="empresa">Institución</option>
                        </select>
                    </div>

                    <br />
                    <div className="bg-gray-200 h-0.5 min-h-0 min-w-0"></div>
                    <br />

                    <h1 className="text-center font-bold text-lg font-mulish">¿En qué te ayudamos?</h1>
                    <br />

                    {formData.persona === 'empresa' ? (
                        <div className="flex flex-col">
                            <label htmlFor="material">Asignatura</label>
                            <select
                                name="material"
                                id="material"
                                className="p-2 border rounded"
                                onChange={handleChange}
                                value={formData.material}
                            >
                                <option value="" disabled>Selecciona una asignatura</option>
                                <option value="idiomas">Idiomas</option>
                                <option value="matematicas">Matemáticas</option>
                            </select>

                            <br />
                            <label htmlFor="servicio">Servicio</label>
                            <select
                                name="servicio"
                                id="servicio"
                                className="p-2 border rounded"
                                onChange={handleChange}
                                value={formData.servicio}
                            >
                                <option value="" disabled>Selecciona material</option>
                                <option value="libros">Libros</option>
                                <option value="libros_videos">Libros + Videos</option>
                            </select>

                            <br />
                            <textarea
                                name="mensaje"
                                className="border-2 p-2 rounded-sm"
                                onChange={handleChange}
                                placeholder="Los detalles nos ayudan a conocer lo que necesitas"
                            ></textarea>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <label htmlFor="material">Asignatura</label>
                            <select
                                name="material"
                                id="material"
                                className="p-2 border rounded"
                                onChange={handleChange}
                                value={formData.material}
                            >
                                <option value="" disabled>Selecciona una asignatura</option>
                                <option value="idiomas">Idiomas</option>
                                <option value="matematicas">Matemáticas</option>
                            </select>

                            {formData.material === 'idiomas' && (
                                <div className="flex flex-col">
                                    <br />
                                    <label htmlFor="servicio">Servicio</label>
                            <select
                                name="servicio"
                                id="servicio"
                                className="p-2 border rounded"
                                onChange={handleChange}
                                value={formData.servicio}
                            >
                                <option value="" disabled>Selecciona servicio</option>
                                <option value="libros">Clases particulares</option>
                                <option value="libros_videos">Clases grupales</option>
                            </select>

                            <br />
                     
                                    <br />
                                    <label htmlFor="idioma">Idioma</label>
                                    <select
                                        name="idioma"
                                        id="idioma"
                                        className="p-2 border rounded"
                                        onChange={handleChange}
                                        value={formData.idioma}
                                    >
                                        <option value="" disabled>Selecciona un idioma</option>
                                        <option value="ingles">Inglés</option>
                                        <option value="italiano">Italiano</option>
                                        <option value="frances">Francés</option>
                                    </select>

                                    <br />
                                    <label htmlFor="nivel">Nivel</label>
                                    <select
                                        name="nivel"
                                        id="nivel"
                                        className="p-2 border rounded"
                                        onChange={handleChange}
                                        value={formData.nivel}
                                    >
                                        <option value="" disabled>Selecciona un nivel</option>
                                        <option value="S.C">Sin conocimiento</option>
                                        <option value="C.B">Conocimiento básico</option>
                                        <option value="C.I">Conocimiento intermedio</option>
                                        <option value="C.A">Conocimiento avanzado</option>
                                    </select>  
                                    <br />
                            <textarea
                                name="mensaje"
                                className="border-2 p-2 rounded-sm"
                                onChange={handleChange}
                                placeholder="Los detalles nos ayudan a conocer lo que necesitas"
                            ></textarea>
                                </div>
                            )}

                            {formData.material === 'matematicas' && (
                                <div className="flex flex-col">
                                    <br />
                                    <label htmlFor="servicio">Servicio</label>
                            <select
                                name="servicio"
                                id="servicio"
                                className="p-2 border rounded"
                                onChange={handleChange}
                                value={formData.servicio}
                            >
                                <option value="" disabled>Selecciona material</option>
                                <option value="libros">Clases particulares</option>
                                <option value="libros_videos">Clases grupales</option>
                            </select>

                            <br />
                          
                                    
                                    <label htmlFor="nivel">Nivel</label>
                                    <select
                                        name="nivel"
                                        id="nivel"
                                        className="p-2 border rounded"
                                        onChange={handleChange}
                                        value={formData.nivel}
                                    >
                                        <option value="" disabled>Selecciona un nivel</option>
                                        <option value="Primaria">Primaria</option>
                                        <option value="E.S.O">E.S.O</option>
                                        <option value="Bachillerato">Bachillerato</option>
                                        <option value="Universidad">Universidad</option>
                                    </select>

                                    <br />

                                    <textarea
                                name="mensaje"
                                className="border-2 p-2 rounded-sm"
                                onChange={handleChange}
                                placeholder="Los detalles nos ayudan a conocer lo que necesitas"
                            ></textarea>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Botón de submit */}
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;