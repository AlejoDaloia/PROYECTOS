const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("./database");
const cors = require("cors");

const app = express();
app.set("port", 4000);
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:4000"]
}));    
app.use(morgan("dev"));
app.use(express.json());

app.get('/producto', async (req, res) => {
    const { search = '', rubro = '' } = req.query;
    let query = `
        SELECT Producto.*, Rubro.descripcion AS rubro_desc
        FROM Producto
        JOIN Rubro ON Producto.rubro = Rubro.idRubro
        WHERE Producto.descripcion LIKE ? 
        ${rubro ? 'AND Producto.rubro = ?' : ''}
    `;
    const params = [`%${search}%`];
    if (rubro) params.push(rubro);

    try {
        const connection = await connectDB();
        const result = await connection.query(query, params);
        res.json(result);
    } catch (error) {
        console.error("Error en la consulta de productos:", error);
        res.status(500).json({ message: "Error al obtener productos" });
    }
});

app.get('/rubro', async (req, res) => {
    try {
        const connection = await connectDB();
        const result = await connection.query("SELECT * FROM Rubro");
        res.json(result);
    } catch (error) {
        console.error("Error en la consulta de rubros:", error);
        res.status(500).json({ message: "Error al obtener rubros" });
    }
});
app.listen(app.get("port"), () => {
    console.log('Servidor escuchando en el puerto ' + app.get("port"));
});