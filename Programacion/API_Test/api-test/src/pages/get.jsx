import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImagenAnimal = () => {
    const [imagenUrl, setImagenUrl] = useState('');

    const navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
    }

    const traerPerro = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImagenUrl(response.data.message);
        } catch (error){
            console.error('Error al obtener la imagen del perro:', error);
        }
    };

    const traerGato = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setImagenUrl(response.data[0].url);
        } catch (error){
            console.error('Error al obtener la imagen del gato:', error);
        }
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', textShadow: '2px 2px 4px #000' }}>
                Imagen aleatoria de Animal 🐾
            </h1>

            {imagenUrl && (
                <div style={{ margin: '20px auto', maxWidth: '80%' }}>
                    <img 
                        src={imagenUrl} 
                        alt="Animal" 
                        style={{
                            maxWidth: '100%',
                            borderRadius: '20px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                            transition: 'transform 0.3s ease-in-out'
                        }} 
                    />
                </div>
            )}

            <div style={{ marginBottom: '30px' }}>
                <button onClick={traerPerro} style={botonEstilo}>
                    🐶 Perro
                </button>
                <button onClick={traerGato} style={botonEstilo}>
                    🐱 Gato
                </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => goToRoute('/')} style={botonEstiloSecundario}>
                    🏠Inicio
                </button>
                <button onClick={() => goToRoute('/Post')} style={botonEstiloSecundario}>
                    📋Formulario
                </button>
            </div>
        </div>
    );
};

const containerStyle = {
    textAlign: 'center',
    backgroundImage: 'url(/catdogkiss.gif)',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '40px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
};


const botonEstilo = {
    margin: '10px',
    padding: '20px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.8)',
    color: '#333',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
};

const botonEstiloSecundario = {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '10px',
    background: '#ffffffcc',
    border: 'none',
    color: '#000',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
};

export default ImagenAnimal;