import {Link} from 'react-router-dom';

export default function home() {
    return (
        <div>
            <h1>Bienvenido a la tienda</h1>
            <Link to="/productos">Ver productos</Link>
        </div>
    );
}