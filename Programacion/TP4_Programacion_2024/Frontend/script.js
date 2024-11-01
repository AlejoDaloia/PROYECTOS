async function fetchRubros() {
    const res = await fetch("http://localhost:4000/rubro");
    const rubros = await res.json();
    const rubroSelect = document.getElementById("rubro-filter");
    rubros.forEach(rubro => {
        const option = document.createElement("option");
        option.value = rubro.idRubro;
        option.textContent = rubro.descripcion;
        rubroSelect.appendChild(option);
    });
}

async function fetchProductos() {
    const search = document.getElementById("search").value;
    const rubro = document.getElementById("rubro-filter").value;
    const res = await fetch(`http://localhost:4000/producto?search=${search}&rubro=${rubro}`);
    const productos = await res.json();
    renderProductos(productos);
}

function renderProductos(productos) {
    const container = document.getElementById("products-container");
    container.innerHTML = '';
    productos.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("product-item");
        item.innerHTML = `
            <img src="${producto.urlImagen}" alt="${producto.descripcion}">
            <h3>${producto.descripcion}</h3>
            <p>Rubro: ${producto.rubro_desc}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        container.appendChild(item);
    });
}

document.getElementById("search").addEventListener("input", fetchProductos);
document.getElementById("rubro-filter").addEventListener("change", fetchProductos);

// Alternar vistas
document.getElementById("list-view").addEventListener("click", () => {
    document.getElementById("products-container").classList.add("list-view");
    document.getElementById("products-container").classList.remove("grid-view");
});
document.getElementById("grid-view").addEventListener("click", () => {
    document.getElementById("products-container").classList.add("grid-view");
    document.getElementById("products-container").classList.remove("list-view");
});

fetchRubros(); // Cargar rubros al iniciar
fetchProductos(); // Cargar productos al iniciar