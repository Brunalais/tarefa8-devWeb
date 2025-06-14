const express = require('express');
const cors = require('cors');
const sql = require('./db');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/produtos', async (req, res) => {
    try {
        const result = await sql.query`SELECT Produtos.id, Produtos.nome, preco, tamanho, cor, Categorias.nome AS categoria
                                       FROM Produtos
                                       JOIN Categorias ON Produtos.categoria_id = Categorias.id`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/categorias', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Categorias`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
