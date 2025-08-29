const express = require('express');
const app = express();

app.use(express.json()); // Permite receber JSON no body

let usuarios = [
    { id: 1, nome: 'samuel', idade: 22 },
    { id: 2, nome: 'andre', idade: 33 }
];

app.get('/', (req, res) => {
    res.json(usuarios);
});

app.post('/usuario', (req, res) => {
    const novoUsuario = req.body; // recebe { id, nome, idade }
    usuarios.push(novoUsuario);
    res.status(201).json({ mensagem: 'Usuário adicionado com sucesso!', usuario: novoUsuario });
});

app.get('/usuario/:nome', (req, res) => {
    const nome = req.params.nome;
    const usuario = usuarios.find(u => u.nome === nome);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000/'));
