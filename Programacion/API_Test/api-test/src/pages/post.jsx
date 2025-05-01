import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [resultado, setResultado] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', {
      name,
      job,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    })
    .then((response) => {
      if (name === '' || job === '') {
        setResultado('❌ Los campos no pueden estar vacíos');
        return;
      }
      setResultado(`✅ Nombre: ${response.data.name}, Trabajo: ${response.data.job}`);
      console.log('Respuesta:', response.data);
    })
    .catch((error) => {
      setResultado(`❌ Error al enviar los datos`);
      console.error('Error:', error);
    });
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>📝 Formulario</h1>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Nombre:</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Escriba aquí..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Trabajo:</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Escriba aquí..."
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      <button style={buttonStyle} type="button" onClick={handleSubmit}>Enviar</button>
      <p style={resultStyle}>{resultado}</p>
      <div style={linksStyle}>
        <button style={navButtonStyle} onClick={() => navigate('/')}>🏠 Inicio</button>
        <button style={navButtonStyle} onClick={() => navigate('/get')}>🐶 Imágenes</button>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '400px',
  margin: '80px auto',
  padding: '30px',
  background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '2rem',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#6a11cb',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'transform 0.2s, background-color 0.3s',
};

const resultStyle = {
  marginTop: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
};

const linksStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '30px',
};

const navButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ffffffaa',
  border: '2px solid #6a11cb',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
};

navButtonStyle[':hover'] = {
  backgroundColor: '#6a11cb',
  color: '#fff',
};