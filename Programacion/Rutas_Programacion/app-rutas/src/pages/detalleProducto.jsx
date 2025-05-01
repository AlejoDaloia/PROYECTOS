import {useParams, Link} from 'react-router-dom';

export default function DetalleProducto() {
    const {id} = useParams();

    return (
        <div>
            <h2>Detalle del producto</h2>
            <p>Mostrando información del producto con ID: {id}</p>
            <Link to="/productos">Volver a la lista de productos</Link>
        </div>
    );
}