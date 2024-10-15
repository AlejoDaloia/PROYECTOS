// Función para obtener los clientes y mostrarlos en la tabla
async function getClientes() {
    const res = await fetch("http://localhost:4000/cliente");
    const data = await res.json();
    
    const tbody = document.querySelector('.clients-table tbody');
    tbody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos

    data.forEach(cliente => {
        const fecha = new Date(cliente.ultima_compra);
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const año = fecha.getFullYear();
        const fechaFormateada = `${dia}/${mes}/${año}`;

        const row = `
            <tr data-id="${cliente.idCliente}">
                <td>${cliente.nombre}</td>
                <td>${cliente.contacto}</td>
                <td>${cliente.direccion}</td>
                <td>${cliente.barrio}</td>
                <td>${fechaFormateada}</td>
                <td class="button-cell">
                    <button class="btn btn-primary mod-button" data-bs-toggle="modal" data-bs-target="#modalform">Modificar</button>
                    <button class="btn btn-danger delete-button">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row); // Agregar la fila a la tabla
    });

    // Agregar eventos a los botones de "Modificar" y "Eliminar"
    document.querySelectorAll('.mod-button').forEach(button => {
        button.addEventListener('click', handleModificar);
    });
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', handleEliminar); // Asegúrate de que esto esté aquí
    });
}

// Función para manejar la eliminación de un cliente
async function handleEliminar(event) {
    const row = event.target.closest('tr');
    const idCliente = row.dataset.id; // Obtener el ID del cliente

    // Llamar a la función de eliminar cliente
    await eliminarCliente(idCliente);
}

// Función para agregar un cliente
async function agregarCliente(cliente) {
    await fetch("http://localhost:4000/cliente", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });
    getClientes(); // Actualiza la lista de clientes después de agregar
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
    } else {
        alert("Cliente modificado exitosamente");
    }
    getClientes(); // Actualiza la lista de clientes después de modificar
}

// Función para manejar la eliminación de un cliente
async function eliminarCliente(idCliente) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        try {
            const response = await fetch(`http://localhost:4000/cliente/${idCliente}`, {
                method: "DELETE"
            });
            
            if (!response.ok) {
                throw new Error('Error en la eliminación: ' + response.statusText);
            }
            
            getClientes(); // Actualiza la lista de clientes después de eliminar
            alert('Cliente eliminado exitosamente.');
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            alert('Error al eliminar cliente: ' + error.message);
        }
    }
}

// Manejar el evento de clic en el botón "Guardar Cliente"
document.getElementById("guardarCliente").addEventListener("click", () => {
    const nuevaFecha = new Date(document.getElementById("ultima_compra").value).toISOString().split('T')[0];
    console.log("Fecha de última compra capturada:", nuevaFecha); // Para depuración
    const nuevoCliente = {
        nombre: document.getElementById("nombre").value,
        contacto: document.getElementById("telefono").value,
        direccion: document.getElementById("domicilio").value,
        barrio: document.getElementById("barrio").value,
        ultima_compra: nuevaFecha
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

// Variable global para almacenar el ID del cliente seleccionado
let idClienteSeleccionado;

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
    document.getElementById('modalformLabel').innerText = 'Modificar Cliente';
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("nombre").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("domicilio").value = '';
    document.getElementById("barrio").value = '';
    document.getElementById('modalformLabel').innerText = 'Registrar Cliente'; // Restablecer el título
}

// Cargar los clientes al cargar la página
document.addEventListener("DOMContentLoaded", getClientes);