import React from "react";
import NavBar from "./NavBar";
import './index.css';

class Opiniones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            opinion: '',
            successMessage: '', // Mensaje de éxito
            errorMessage: '',   // Mensaje de error
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { nombre, opinion } = this.state;

        // Limpiar mensajes anteriores
        this.setState({ successMessage: '', errorMessage: '' });

        // Validación básica
        if (!nombre.trim() || !opinion.trim()) {
            this.setState({ errorMessage: 'Por favor, completa todos los campos.' });
            return;
        }

        fetch('http://localhost:2412/opiniones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, opinion })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al enviar la opinión.');
            }
        })
        .then(data => {
            console.log('Success:', data);
            this.setState({
                nombre: '',
                opinion: '',
                successMessage: '¡Gracias por tu opinión!',
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            this.setState({ errorMessage: 'Hubo un error al enviar tu opinión. Inténtalo de nuevo.' });
        });
    }

    render() {
        const { nombre, opinion, successMessage, errorMessage } = this.state;

        return (
            <div className="grid grid-rows-[auto_1fr_auto] h-screen">
                <NavBar />
                <section className="text-justify flex flex-col gap-8 items-center justify-center p-8 bg-gray-100 m-auto rounded-md shadow-[0_0_5px] shadow-black">
          
          <p className="text-md/relaxed text-black m-auto">
          Compartir tu experiencia con nuestras clases y/o recursos didácticos ayuda a responder inquietudes de quienes están buscando Tutorías de calidad, o desarrollo de recursos didácticos para su organización.
<br /><br />
Gracias por tomarte unos minutos y dejarnos tu opinión.
          </p>
        </section>
                <div className="max-w-lg mx-auto mt-10 p-6 h-[40vh] perro bg-white rounded-lg shadow-md shadow-black">
                    <h2 className="text-2xl font-bold mb-4">Deja tu opinión</h2>

                    {/* Mensaje de éxito */}
                    {successMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            {successMessage}
                        </div>
                    )}

                    {/* Mensaje de error */}
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={this.handleSubmit} className="h-[max-content]">
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-gray-700">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={this.handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="opinion" className="block text-gray-700">Opinión:</label>
                            <textarea
                                id="opinion"
                                name="opinion"
                                value={opinion}
                                onChange={this.handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Opiniones;