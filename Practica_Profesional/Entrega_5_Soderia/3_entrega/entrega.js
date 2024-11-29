document.addEventListener("DOMContentLoaded", () => {
    cargarClientes();
    cargarProductos();
    cargarPedidos();
    document.querySelector(".btn-guardar").addEventListener("click", guardarPedido);
    document.getElementById("filterForm").addEventListener("change", aplicarFiltros);
});


async function aplicarFiltros() {
    const fechaDesde = document.getElementById("fechaDesde").value;
    const fechaHasta = document.getElementById("fechaHasta").value;
    const cliente = document.getElementById("filter-client").value;
    const estado = document.getElementById("filter-status").value;

    const params = new URLSearchParams({
        ...(fechaDesde && { fechaDesde }),
        ...(fechaHasta && { fechaHasta }),
        ...(cliente && { cliente }),
        ...(estado && { estado }),
    });

    try {
        const res = await fetch(`http://localhost:4000/pedido/filtrar?${params.toString()}`);
        const data = await res.json();
        renderTabla(data.filter(p => p.estado === 'En camino'), data.filter(p => p.estado === 'Entregado'));
    } catch (error) {
        console.error("Error al aplicar los filtros:", error);
    }
}

async function cargarClientes() {
    const res = await fetch("http://localhost:4000/cliente");
    const data = await res.json();
    const select = document.getElementById("cliente");
    const selectFiltro = document.getElementById("filter-client");
    data.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.idCliente;
        option.textContent = cliente.nombre;
        select.appendChild(option);
    });
    data.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.idCliente;
        option.textContent = cliente.nombre;
        selectFiltro.appendChild(option);
    });
}

async function cargarProductos() {
    const res = await fetch("http://localhost:4000/producto");
    const data = await res.json();
    const select = document.getElementById("producto");
    data.forEach(producto => {
        const option = document.createElement("option");
        option.value = producto.idProducto;
        option.textContent = producto.tipo_producto;
        select.appendChild(option);
    });
}

async function guardarPedido() {
    const clienteId = document.getElementById("cliente").value;
    const productoId = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const pedidoForm = document.getElementById("pedidoForm");

    if (!pedidoForm.checkValidity()) {
        pedidoForm.reportValidity();
        return;
    }
    if (clienteId && productoId && cantidad) {
        const pedido = {
            cliente: clienteId,
            producto: productoId,
            cantidad: parseInt(cantidad)
        };
        await fetch("http://localhost:4000/pedido", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });
        cargarPedidos();
        // Cerrar el modal
        const modalElement = document.getElementById("modalform");
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
        // Resetear el formulario
        document.getElementById("pedidoForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

async function cargarPedidos() {
    try {
        const resEnCamino = await fetch("http://localhost:4000/pedido");
        pedidosEnCamino = await resEnCamino.json();

        const resEntregados = await fetch("http://localhost:4000/pedido/entregado");
        pedidosEntregados = await resEntregados.json();

        renderTabla(pedidosEnCamino,pedidosEntregados); // Mostrar los datos iniciales
    } catch (error) {
        console.error("Error al cargar los clientes:", error);
    }
}

async function renderTabla(pedidosEnCamino, pedidosEntregados) {
    const tbodyEnCamino = document.querySelector('.order-table tbody');
    tbodyEnCamino.innerHTML = '';
    const tbodyEntregados = document.querySelector('.inactive-order-table tbody');
    tbodyEntregados.innerHTML = '';

    pedidosEnCamino.forEach(pedido => {
        if (pedido.estado === 'En camino') { // Mostrar solo pedidos en camino
            const row = `
                <tr>
                    <td>${pedido.cliente}</td>
                    <td>${pedido.direccion}</td>
                    <td>${pedido.nombre_barrio}</td>
                    <td>${pedido.producto}</td>
                    <td>${pedido.cantidad}</td>
                    <td>${new Date(pedido.fecha).toLocaleDateString('es-ES')}</td>
                    <td>${pedido.estado}</td>
                    <td class="button-cell">
                        <button class="btn btn-success deliver-button" data-id="${pedido.idPedido}">Entregar</button>
                    </td>
                </tr>
            `;
            tbodyEnCamino.insertAdjacentHTML('beforeend', row);
        }
    });
    document.querySelectorAll('.deliver-button').forEach(button => {
        button.addEventListener('click', handleEntregado);
    });

    pedidosEntregados.forEach(pedido =>{
        if(pedido.estado === 'Entregado'){
            const row = `
                <tr>
                    <td>${pedido.cliente}</td>
                    <td>${pedido.direccion}</td>
                    <td>${pedido.nombre_barrio}</td>
                    <td>${pedido.producto}</td>
                    <td>${pedido.cantidad}</td>
                    <td>${new Date(pedido.fecha).toLocaleDateString('es-ES')}</td>
                    <td>${pedido.estado}</td>
                </tr>
            `;
            tbodyEntregados.insertAdjacentHTML('beforeend', row);
        }
    });
}

async function handleEntregado(event) {
    const idPedido = event.target.getAttribute("data-id");
    if (confirm("¿Estás seguro de que deseas marcar este pedido como entregado?")) {
        try {
            const response = await fetch(`http://localhost:4000/pedido/${idPedido}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error('Error al marcar el pedido como entregado: ' + response.statusText);
            }
            cargarPedidos();
        } catch (error) {
            console.error('Error al marcar el pedido como entregado:', error);
            alert('Error al marcar el pedido como entregado: ' + error.message);
        }
    }
}