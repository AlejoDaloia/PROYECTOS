document.addEventListener("DOMContentLoaded", () => {
    getBarrios();
    addFilterListener();
    countClients();
});

async function getBarrios() {
    try {
        const res = await fetch("http://localhost:4000/barrios/clientes");
        const data = await res.json();
        // Llenar el select con los barrios
        const barrioFilter = document.getElementById("barrioFilter");
        data.forEach(barrio => {
            const option = document.createElement("option");
            option.value = barrio.idBarrio;
            option.textContent = barrio.nombre;
            barrioFilter.appendChild(option);
            console.log(option);
        });
        updateTable(data); // Muestra todos los barrios al inicio
    } catch (error) {
        console.error("Error al obtener los barrios:", error);
    }
}

function addFilterListener() {
    const barrioFilter = document.getElementById("barrioFilter");
    barrioFilter.addEventListener("change", async (event) => {
        const idBarrio = event.target.value;
        if (idBarrio === "all") {
            // Mostrar todos los barrios
            getBarrios();
        } else {
            // Obtener y mostrar la cantidad de clientes de un barrio específico
            try {
                const res = await fetch(`http://localhost:4000/barrios/${idBarrio}/clientes`);
                const data = await res.json();
                updateTable(data); // Actualiza la tabla con los resultados filtrados
            } catch (error) {
                console.error("Error al filtrar los datos:", error);
            }
        }
    });
}

function updateTable(data) {
    const tbody = document.querySelector(".barrio-table tbody");
    tbody.innerHTML = ''; // Limpiar la tabla antes de llenarla

    data.forEach(barrio => {
        const row = `
            <tr>
                <td>${barrio.nombre}</td>
                <td>${barrio.cantidad_clientes}</td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row); // Añadir fila a la tabla
    });
}

async function countClients() {
    try {
        const res = await fetch("http://localhost:4000/cliente/total");
        const data = await res.json();
        const count = document.getElementById("client-count");
        data.forEach(cliente => {
            count.innerText = cliente.total_clientes;
        });
    } catch (error) {
        console.error("Error al obtener el número de clientes:", error);
    }
}