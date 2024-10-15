const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("./database");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.set("port", 4000);

app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:4000"]
}));
app.use(morgan("dev"));
app.use(express.json());

// Endpoint para registrar usuarios
app.post("/register", async (req, res) => {
    try {
        console.log(req.body); // Deberías ver el contenido aquí
        const { username, passwordd } = req.body;

        if (!username || !passwordd) {
            return res.status(400).send("Faltan campos requeridos.");
        }

        // Conectarse a la base de datos
        const connection = await connectDB();
        if (!connection) {
            return res.status(500).send("Error al conectar a la base de datos.");
        }
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(passwordd, 10);

        // Guardar el usuario en la base de datos
        await connection.query("INSERT INTO usuarios (username, passwordd) VALUES (?, ?)", [username, hashedPassword]);
        res.status(201).send("Usuario registrado exitosamente.");
        
    } catch (error) {
        console.error('Error en el registro de usuario:', error);
        res.status(500).send('Error en el registro de usuario.');
    }
});

    // Endpoint para login
app.post("/login", async (req, res) => {
    try {
        const { username, passwordd } = req.body;
        const connection = await connectDB();
    
        // Buscar el usuario en la base de datos
        const [user] = await connection.query("SELECT * FROM usuarios WHERE username = ?", [username]);
    
        console.log("Usuario encontrado:", user); // Para depuración
    
        if (user) {
            if (await bcrypt.compare(passwordd, user.passwordd)) {
                    res.status(200).send("Inicio de sesión exitoso.");
            } else {
                res.status(401).send("Usuario o contraseña incorrectos.");
            }
        } else {
            res.status(401).send("Usuario o contraseña incorrectos.");
        }
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).send('Error en el inicio de sesión.');
    }
});    

// Obtener todos los clientes
app.get("/cliente", async (req, res) => {
    try {
        const connection = await connectDB();
        const result = await connection.query("SELECT * FROM cliente");
        res.json(result);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta');
    }
});

// Agregar un nuevo cliente
app.post("/cliente", async (req, res) => {
    const { nombre, contacto, direccion, barrio, ultima_compra } = req.body;
    try {
        const connection = await connectDB();
        await connection.query(
            "INSERT INTO cliente (nombre, contacto, direccion, barrio, ultima_compra) VALUES (?, ?, ?, ?, ?)",
            [nombre, contacto, direccion, barrio, ultima_compra]
        );
        res.status(201).send("Cliente agregado");
    } catch (error) {
        console.error('Error al agregar cliente:', error);
        res.status(500).send('Error al agregar cliente');
    }
});

// Modificar un cliente existente
app.put("/cliente/:idCliente", async (req, res) => {
    const { idCliente } = req.params;
    const { nombre, contacto, direccion, barrio, ultima_compra } = req.body;

    console.log(`Modificando cliente ID: ${idCliente}`, req.body);

    try {
        const connection = await connectDB();
        await connection.query(
            "UPDATE cliente SET nombre = ?, contacto = ?, direccion = ?, barrio = ?, ultima_compra = ? WHERE idCliente = ?",
            [nombre, contacto, direccion, barrio, ultima_compra, idCliente]
        );
        res.send("Cliente modificado");
    } catch (error) {
        console.error('Error al modificar cliente:', error);
        res.status(500).send('Error al modificar cliente');
    }
});


app.delete("/cliente/:idCliente", async (req, res) => {
    const { idCliente } = req.params;
    try {
        const connection = await connectDB();
        await connection.query("DELETE FROM cliente WHERE idCliente = ?", [idCliente]);
        res.send("Cliente eliminado");
    } catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).send('Error al eliminar cliente');
    }
});

app.get("/recorrido", async (req, res) => {
    try {
        const connection = await connectDB(); // Obtiene la conexión desde connectDB
        const result = await connection.query(`SELECT * FROM recorrido`);
        res.json(result); // Retorna los resultados
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta');
    }
});

app.post("/recorrido", async (req, res) => {
    const { dia, barrio_1, barrio_2, barrio_3, ultima_actualizacion } = req.body;
    try {
        const connection = await connectDB();
        await connection.query(
            "INSERT INTO recorrido (dia, barrio_1, barrio_2, barrio_3, ultima_actualizacion) VALUES (?, ?, ?, ?, ?)",
            [dia, barrio_1, barrio_2, barrio_3, ultima_actualizacion]
        );
        res.status(201).send("Recorrido agregado");
    } catch (error) {
        console.error('Error al agregar Recorrido:', error);
        res.status(500).send('Error al agregar Recorrido');
    }
});

app.put("/recorrido/:idRecorrido", async (req, res) => {
    const { idRecorrido } = req.params;
    const { dia, barrio_1, barrio_2, barrio_3, ultima_actualizacion } = req.body;

    console.log(`Modificando Recorrido ID: ${idRecorrido}`, req.body);

    try {
        const connection = await connectDB();
        await connection.query(
            "UPDATE recorrido SET dia = ?, barrio_1 = ?, barrio_2 = ?, barrio_3 = ?, ultima_actualizacion = ? WHERE idRecorrido = ?",
            [dia, barrio_1, barrio_2, barrio_3, ultima_actualizacion]
        );
        res.send("Recorrido modificado");
    } catch (error) {
        console.error('Error al modificar recorrido:', error);
        res.status(500).send('Error al modificar recorrido');
    }
});

app.delete("/recorrido/:idRecorrido", async (req, res) => {
    const { idRecorrido } = req.params;
    try {
        const connection = await connectDB();
        await connection.query("DELETE FROM recorrido WHERE idRecorrido = ?", [idRecorrido]);
        res.send("Recorrido eliminado");
    } catch (error) {
        console.error('Error al eliminar recorrido:', error);
        res.status(500).send('Error al eliminar recorrido');
    }
});

app.get("/pedido", async (req, res) => {
    try {
        const connection = await connectDB();

        // Consulta para obtener los pedidos junto con la información relacionada
        const pedidos = await connection.query(`
            SELECT pedido.*, 
                   cliente.nombre AS cliente, 
                   recorrido.dia AS recorrido, 
                   producto.tipo_producto AS producto
            FROM Pedido 
            JOIN Cliente ON pedido.cliente = cliente.idCliente
            JOIN Recorrido ON pedido.recorrido = recorrido.idRecorrido
            JOIN Producto ON pedido.p   roducto = producto.idProducto
        `);

        res.json(pedidos); // Retorna los resultados
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta');
    }
});

app.post("/pedido", async (req, res) => {
    const { cliente, producto, recorrido, cantidad, estado } = req.body;
    const fecha = new Date().toISOString().split('T')[0];
    try {
        const connection = await connectDB();
        await connection.query(
            "INSERT INTO pedido (fecha, cliente, producto, recorrido, cantidad, estado) VALUES (?, ?, ?, ?, ?, ?)",
            [fecha, cliente, producto, recorrido, cantidad, estado]
        );
        res.status(201).send("Recorrido agregado");
    } catch (error) {
        console.error('Error al agregar Recorrido:', error);
        res.status(500).send('Error al agregar Recorrido');
    }
});

app.get("/producto", async (req, res) => {
    try {
        const connection = await connectDB(); // Obtiene la conexión desde connectDB
        const result = await connection.query("SELECT * FROM producto"); // Realiza la consulta
        res.json(result); // Retorna los resultados
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en la consulta');
    }
});

// Ruta para agregar un producto
app.post("/producto", async (req, res) => {
    const { tipo_producto, cantidad, precio } = req.body;
    const ultima_actualizacion = new Date().toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'

    try {
        const connection = await connectDB();
        await connection.query(
            "INSERT INTO producto (tipo_producto, cantidad, precio, ultima_actualizacion) VALUES (?, ?, ?, ?)",
            [tipo_producto, cantidad, precio, ultima_actualizacion]
        );
        res.status(201).send("Producto agregado");
    } catch (error) {
        console.error('Error al agregar producto:', error);
        res.status(500).send('Error al agregar producto');
    }
});

app.delete('/pedido/:idPedido', async (req, res) => {
    const { idPedido } = req.params;
    try {
        const connection = await connectDB();
        await connection.query('DELETE FROM Pedido WHERE idPedido = ?', [idPedido]);
        res.status(200).json({ message: 'Pedido eliminado' });
    } catch (error) {
        console.error('Error al eliminar el pedido:', error);
        res.status(500).json({ error: 'Error al eliminar el pedido' });
    }
});

//modificar producto
app.put('/producto/:idProducto', async (req, res) => {
    const { idProducto } = req.params;
    const { tipo_producto, cantidad, precio } = req.body;
    try {
        const connection = await connectDB();
        await connection.query('UPDATE producto SET tipo_producto = ?, cantidad = ?, precio = ?, ultima_actualizacion = NOW() WHERE idProducto = ?', [tipo_producto, cantidad, precio, idProducto]);
        res.status(200).json({ message: 'Producto actualizado' });
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
});

// Ruta para eliminar un producto
app.delete('/producto/:idProducto', async (req, res) => {
    const { idProducto } = req.params;
    try {
        const connection = await connectDB();
        await connection.query('DELETE FROM producto WHERE idProducto = ?', [idProducto]);
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});

app.listen(app.get("port"), () => {
    console.log('Servidor escuchando en el puerto ' + app.get("port"));
});