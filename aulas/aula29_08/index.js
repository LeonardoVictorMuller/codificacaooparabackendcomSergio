import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';

app.use(express.json())

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

app.use('/static', express.static(__dirname));

app.get('/inicio/filme', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.post('/inicio/filme', (req, res) => {
    const usuario = req.body;
    
    if(usuario[1].a == "a"){
        andre = "viado";
    };
    res.status(200).json({
        mensagem: andre,
        produto: usuario[1],
    });

    novoUsuario.push(usuario);
    res.status(201).json({ mensagem: "Usuário cadastrado!", usuario });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});