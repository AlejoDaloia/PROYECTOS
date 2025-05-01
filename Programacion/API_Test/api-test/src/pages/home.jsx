import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>🚀 API Testing</h1>
            <div style={buttonContainerStyle}>
                <Link to="/get" style={linkStyle}>
                    <button style={buttonStyle}>GET</button>
                </Link>
                <Link to="/post" style={linkStyle}>
                    <button style={buttonStyle}>POST</button>
                </Link>
            </div>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
};

const titleStyle = {
    fontSize: '3rem',
    marginBottom: '40px',
    textShadow: '2px 2px 6px rgba(0,0,0,0.4)',
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
};

const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    color: '#333',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
};

const linkStyle = {
    textDecoration: 'none',
};