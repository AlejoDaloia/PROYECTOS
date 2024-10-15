document.addEventListener("DOMContentLoaded", () => {
    cargarClientes();
    cargarRutas();
    cargarProductos();
    getPedidos();

    document.querySelector(".btn-guardar").addEventListener("click", guardarPedido);
    document.getElementById("shipmentDetail").style.display = 'none';
});

async function cargarClientes() {
    const res = await fetch("http://localhost:4000/cliente");
    const data = await res.json();
    const select = document.getElementById("cliente");
    data.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.idCliente;
        option.textContent = cliente.nombre;
        select.appendChild(option);
    });
}

async function cargarRutas() {
    const res = await fetch("http://localhost:4000/recorrido");
    const data = await res.json();
    const select = document.getElementById("ruta");
    data.forEach(recorrido => {
        const option = document.createElement("option");
        option.value = recorrido.idRecorrido;
        option.textContent = recorrido.dia;
        select.appendChild(option);
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
    const rutaId = document.getElementById("ruta").value;
    const productoId = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;

    if (clienteId && rutaId && productoId && cantidad) {
        const pedido = {
            cliente: clienteId,
            recorrido: rutaId,
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

        getPedidos();
        
        // Cerrar el modal
        const modalElement = document.getElementById("modalform");
        const modal = bootstrap.Modal.getInstance(modalElement);
        
        if (modal) {
            modal.hide();
        }

        // Resetear el formulario
        document.getElementById("pedidoForm").reset();

        // Muestra el div de detalles del pedido
        document.getElementById("shipmentDetail").style.display = 'block';
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

async function getPedidos() {
    const res = await fetch("http://localhost:4000/pedido");
    const data = await res.json();
    const container = document.getElementById("pedidosContainer");
    container.innerHTML = "";

    if (data.length > 0) {
        document.getElementById("shipmentDetail").style.display = "flex"; // Mostrar el div
    } else {
        document.getElementById("shipmentDetail").style.display = "none"; // Ocultar el div
    }

    data.forEach(pedido => {
        const item = document.createElement("div");
        item.className = "shipment-item";
        item.innerHTML = `
            <p><strong>Cliente:</strong> ${pedido.cliente}</p>
            <p><strong>Ruta:</strong> ${pedido.recorrido}</p>
            <p><strong>Producto:</strong> ${pedido.producto}</p>
            <p><strong>Cantidad:</strong> ${pedido.cantidad} unidades</p>
            <p><strong>Fecha:</strong> ${new Date(pedido.fecha).toLocaleDateString('es-ES')}</p>
            <p><strong>Estado:</strong> En camino</p>
            <div class="button-group">
                <button class="action-button btn-success btn-delivered" data-id="${pedido.idPedido}">Entregado</button>
            </div>
        `;
        container.appendChild(item);
    });

    document.querySelectorAll(".btn-delivered").forEach(button => {
        button.addEventListener("click", handleEntregado);
    });
}

async function handleEntregado(event) {
    const idPedido = event.target.getAttribute("data-id");

    if (confirm("¿Estás seguro de que deseas marcar este pedido como entregado?")) {
        await fetch(`http://localhost:4000/pedido/${idPedido}`, {
            method: "DELETE"
        });
        getPedidos();
    }
}