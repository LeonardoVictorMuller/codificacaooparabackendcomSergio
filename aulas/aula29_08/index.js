const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())

app.get('/inicio/filme', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.get('/inicio/filme', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'))
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});