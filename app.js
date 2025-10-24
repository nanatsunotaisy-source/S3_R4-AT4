const express = require("express");
const app = express();
const PORT = 8081;

const fs = require("fs");

app.get("/usuario", (req, res) => {
    try {
        // Lendo o arquivo JSON
        const data = fs.readFileSync("./usuarios.json", "utf-8");

        // Transfor o arquivo JSON  em objeto JS
        let usuario = JSON.parse(data);

        const { nomeUsuarios } = req.query;

        if (nomeUsuarios) {
            usuarios = usuarios.filter(usuario => usuario.nome.
                toLowerCase()
                .includes(nomeUsuarios.toLowerCase()));
        }

        res.status(200).json(usuario);
    } catch (error) {
        console.error("erro ao ler o arquivo JSON:", error);
        res.status(500).json({ error: "erro interno no servidor ao processar os usuarios!" })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})