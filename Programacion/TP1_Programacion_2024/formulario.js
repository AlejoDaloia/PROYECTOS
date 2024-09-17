let empleados = [];
const sectores = ["Deposito", "Taller", "Cocina"];

document.getElementById("empleadosForm").addEventListener("submit", function(event) {
    event.preventDefault();
    guardarDatos();
});

document.getElementById("listar").addEventListener("click", listarEmpleados);

function guardarDatos() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const calle = document.getElementById('calle').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const piso = document.getElementById('piso').value.trim();
    const departamento = document.getElementById('departamento').value.trim();
    const ciudad = document.getElementById('ciudad').value;

    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";  // borrar mensajes anteriores

    if (!validarCampos(nombre, apellido, calle, numero, piso, departamento, ciudad)) {
        return;
    }

    if (empleados.length >= 3) {
        mensaje.innerHTML = "Ya se han registrado tres empleados.";
        return;
    }

    const sector = asignarSector();
    empleados.push({ nombre, apellido, calle, numero, piso, departamento, ciudad, sector });

    mensaje.innerHTML = "Empleado guardado exitosamente.";
    limpiarFormulario();
}

function validarCampos(nombre, apellido, calle, numero, piso, departamento, ciudad) {
    const mensaje = document.getElementById("mensaje");

    // Validación de campos vacíos
    if (!nombre || !apellido || !calle || !numero || !ciudad) {
        mensaje.innerHTML = "Todos los campos son obligatorios, excepto Piso y Departamento.";
        return false;
    }

    // Validación de longitud de caracteres
    if (nombre.length > 40 || apellido.length > 40 || calle.length > 100 || numero.length > 5 || piso.length > 2 || departamento.length > 2) {
        mensaje.innerHTML = "Uno o más campos exceden la cantidad de caracteres permitidos.";
        return false;
    }

    // Validación de campos numéricos
    if (isNaN(numero) || (piso && isNaN(piso))) {
        mensaje.innerHTML = "Número y Piso deben ser valores numéricos.";
        return false;
    }

    // Validación de campos no numéricos
    if (!isNaN(nombre)) {
        mensaje.innerHTML = "El nombre no debe contener solo números.";
        return false;
    }
    if (!isNaN(apellido)) {
        mensaje.innerHTML = "El apellido no debe contener solo números.";
        return false;
    }
    if (!isNaN(calle)) {
        mensaje.innerHTML = "La calle no debe contener solo números.";
        return false;
    }

    // Validación de campos relacionados (Piso y Departamento)
    if ((piso && !departamento) || (!piso && departamento)) {
        mensaje.innerHTML = "Piso y Departamento deben completarse juntos.";
        return false;
    }

    return true;
}

function asignarSector() {
    const sectoresDisponibles = sectores.filter(sector => !empleados.some(empleado => empleado.sector === sector));
    return sectoresDisponibles[Math.floor(Math.random() * sectoresDisponibles.length)];
}

function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('calle').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('piso').value = "";
    document.getElementById('departamento').value = "";
    document.getElementById('ciudad').value = "";
}

function listarEmpleados() {
    const registros = document.getElementById("registros");
    registros.innerHTML = ""; 

    if (empleados.length === 0) {
        registros.innerHTML = "No hay empleados registrados.";
        return;
    }

    const lista = document.createElement("ul");

    empleados.forEach(empleado => {
        const item = document.createElement("li");
        let texto = `${empleado.apellido}, ${empleado.nombre} cuyo domicilio es ${empleado.calle} ${empleado.numero}`;
        if (empleado.piso) {
            texto += `, Piso ${empleado.piso} departamento ${empleado.departamento}`;
        }
        texto += ` de la Ciudad de ${empleado.ciudad === 'vm' ? 'Villa María' : 'Villa Nueva'} tiene asignado el sector ${empleado.sector}.`;
        item.textContent = texto;
        lista.appendChild(item);
    });

    registros.appendChild(lista);
}