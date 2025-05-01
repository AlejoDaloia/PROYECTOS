import {Link} from 'react-router-dom';

const productos = [
    {id: 1, nombre:'Celular'},
    {id: 2, nombre:'Notebook'},
    {id: 3, nombre:'Auriculares'}
];

export default function producto(){
    return(
        <div>
            <h1>Lista de productos</h1>
            <ul>
                {productos.map(p => (
                    <li key={p.id}>
                        <Link to={`/productos/${p.id}`}>{p.nombre}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Volver a inicio</Link>
        </div>
    )
}