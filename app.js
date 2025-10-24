const express = require("express");
const app = express();
const PORT = 8081;

const fs = require("fs");

app.get("/eventos", (req, res) => {
    try {
        // Lendo o arquivo JSON
        const data = fs.readFileSync("./eventos.json", "utf-8");

        // Transfor o arquivo JSON  em objeto JS
        let eventos = JSON.parse(data);

        const { dataEventos } = req.query;

        if(dataEventos){
            eventos = eventos.filter(evento=>evento.data == dataEventos);
        };

        res.status(200).json(eventos); 
    } catch (error) {
        console.error("erro ao ler o arquivo JSON:", error);
        res.status(500).json({ error: "erro interno no servidor ao processar os usuarios!" })
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})