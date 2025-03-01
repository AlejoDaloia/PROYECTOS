async function cargarBarrio() {
    const res = await fetch("http://localhost:4000/barrio");
    const data = await res.json();
    const select = document.getElementById("barrio");
    data.forEach(barrio => {
        const option = document.createElement("option");
        option.value = barrio.idBarrio;
        option.textContent = barrio.nombre;
        select.appendChild(option);
        console.log(option);
    });
}
cargarBarrio();

let clientesActivos = [];
let clientesInactivos = [];

// Cargar datos desde la API
async function cargarClientes() {
    try {
        const resActivos = await fetch("http://localhost:4000/cliente");
        clientesActivos = await resActivos.json();

        const resInactivos = await fetch("http://localhost:4000/cliente/inactivos");
        clientesInactivos = await resInactivos.json();

        actualizarTablas(); // Mostrar los datos iniciales
    } catch (error) {
        console.error("Error al cargar los clientes:", error);
    }
}

// Actualizar tablas según los filtros
function actualizarTablas() {
    const searchName = document.getElementById("search-name").value.toLowerCase();
    const filterStatus = document.getElementById("filter-status").value;

    // Filtrar los datos
    const filteredActivos = clientesActivos.filter(cliente =>
        cliente.nombre.toLowerCase().includes(searchName)
    );
    const filteredInactivos = clientesInactivos.filter(cliente =>
        cliente.nombre.toLowerCase().includes(searchName)
    );

    // Mostrar/ocultar tablas según el estado seleccionado
    if (filterStatus === "activo") {
        renderTabla(filteredActivos, document.querySelector("#active-table tbody"));
        document.getElementById("active-table").style.display = "table";
        document.getElementById("inactive-table").style.display = "none";
    } else if (filterStatus === "inactivo") {
        renderTabla(filteredInactivos, document.querySelector("#inactive-table tbody"));
        document.getElementById("active-table").style.display = "none";
        document.getElementById("inactive-table").style.display = "table";
    } else {
        // Mostrar ambas tablas si se selecciona "Todos"
        renderTabla(filteredActivos, document.querySelector("#active-table tbody"));
        renderTabla(filteredInactivos, document.querySelector("#inactive-table tbody"));
        document.getElementById("active-table").style.display = "table";
        document.getElementById("inactive-table").style.display = "table";
    }
}

// Renderizar datos en una tabla
function renderTabla(clientes, tbody) {
    tbody.innerHTML = ""; // Limpiar contenido anterior

    clientes.forEach(cliente => {
        if (cliente.estado === 'Activo') { // Mostrar solo clientes activos
            const row = `
                <tr data-id="${cliente.idCliente}">
                    <td>${cliente.nombre}</td>
                    <td>${cliente.contacto}</td>
                    <td>${cliente.direccion}</td>
                    <td>${cliente.nombre_barrio}</td>
                    <td>${cliente.estado}</td>
                    <td class="button-cell">
                        <button class="btn btn-primary mod-button" data-bs-toggle="modal" data-bs-target="#modalform">Modificar</button>
                        <button class="btn btn-danger delete-button">Dar de Baja</button>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', row);
        } else{
            const row = `
                <tr data-id="${cliente.idCliente}">
                    <td>${cliente.nombre}</td>
                    <td>${cliente.contacto}</td>
                    <td>${cliente.direccion}</td>
                    <td>${cliente.nombre_barrio}</td>
                    <td>${cliente.estado}</td>
                    <td class="button-cell">
                        <button class="btn btn-primary mod-button" data-bs-toggle="modal" data-bs-target="#modalform">Modificar</button>
                        <button class="btn btn-success activate-button">Activar</button>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', row);
        }
    });
    // Agregar eventos a los botones de "Modificar", "Eliminar" y "Activar"
    document.querySelectorAll('.mod-button').forEach(button => {
        button.addEventListener('click', handleModificar);
    });
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', handleEliminar);
    });
    document.querySelectorAll('.activate-button').forEach(button => {
        button.addEventListener('click', handleActivar);
    });
}

// Eventos para los filtros
document.getElementById("search-name").addEventListener("input", actualizarTablas);
document.getElementById("filter-status").addEventListener("change", actualizarTablas);

// Función para manejar dar de baja a un cliente
async function handleEliminar(event) {
    const row = event.target.closest('tr');
    const idCliente = row.dataset.id;
    // Llamar a la función de eliminar cliente
    await eliminarCliente(idCliente);
}

// Función para manejar dar de alta a un cliente
async function handleActivar(event) {
    const row = event.target.closest('tr');
    const idCliente = row.dataset.id;
    // Llamar a la función de activar cliente
    await activarCliente(idCliente);
}

// Función para manejar la modificación de un cliente
async function modificarCliente(idCliente, cliente) {
    const response = await fetch(`http://localhost:4000/cliente/${idCliente}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });

    if (!response.ok) {
        alert("Error al modificar el cliente: " + response.statusText);
    }
    
    cargarClientes(); // Actualiza la lista de clientes después de modificar
}

// Función para dar de alta a un cliente
async function activarCliente(idCliente) {
    if (confirm('¿Estás seguro de que deseas dar de alta a este cliente?')) {
        try {
            const response = await fetch(`http://localhost:4000/cliente/alta/${idCliente}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            if (!response.ok) {
                throw new Error('Error al dar de alta al cliente: ' + response.statusText);
            }
            
            cargarClientes();
        } catch (error) {
            console.error('Error al dar de alta al cliente:', error);
            alert('Error al dar de alta al cliente: ' + error.message);
        }
    }
}

// Función para dar de baja a un cliente
async function eliminarCliente(idCliente) {
    if (confirm('¿Estás seguro de que deseas dar de baja a este cliente?')) {
        try {
            const response = await fetch(`http://localhost:4000/cliente/baja/${idCliente}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            if (!response.ok) {
                throw new Error('Error al dar de baja al cliente: ' + response.statusText);
            }
            
            cargarClientes();
        } catch (error) {
            console.error('Error al dar de baja al cliente:', error);
            alert('Error al dar de baja al cliente: ' + error.message);
        }
    }
}

// Variable global para almacenar el ID del cliente seleccionado
let idClienteSeleccionado;

document.getElementById("guardarCliente").addEventListener("click", () => {
    const clienteForm = document.getElementById("clienteForm");

    if (!clienteForm.checkValidity()) {
        clienteForm.reportValidity();
        return;
    }

    const nuevoCliente = {
        nombre: document.getElementById("nombre").value,
        contacto: document.getElementById("telefono").value,
        direccion: document.getElementById("domicilio").value,
        barrio: document.getElementById("barrio").value,
    };
    
    if (idClienteSeleccionado) {
        modificarCliente(idClienteSeleccionado, nuevoCliente);
        idClienteSeleccionado = null;
    } else {
        agregarCliente(nuevoCliente);
    }

    const modal = bootstrap.Modal.getInstance(document.getElementById("modalform"));
        modal.hide();
        // Resetear el formulario
        document.getElementById("clienteForm").reset();
});

// Función para agregar un cliente
async function agregarCliente(cliente) {
    await fetch("http://localhost:4000/cliente", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });
    
    cargarClientes();
}

// Función para manejar la modificación de un cliente
function handleModificar(event) {
    const row = event.target.closest('tr');
    const nombre = row.cells[0].innerText;
    const telefono = row.cells[1].innerText;
    const domicilio = row.cells[2].innerText;
    const barrio = row.cells[3].innerText;
    idClienteSeleccionado = row.dataset.id; // Almacena el ID del cliente seleccionado

    // Rellenar los campos del formulario con los datos del cliente
    document.getElementById("nombre").value = nombre;
    document.getElementById("telefono").value = telefono;
    document.getElementById("domicilio").value = domicilio;
    document.getElementById("barrio").value = barrio;

    // Cambiar el título del modal para reflejar que se está editando
    document.getElementById('modal-title-text').innerText = 'Modificar Cliente';
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("nombre").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("domicilio").value = '';
    document.getElementById('modal-title-text').innerText = 'Registrar Cliente'; // Restablecer el título
}

cargarClientes();