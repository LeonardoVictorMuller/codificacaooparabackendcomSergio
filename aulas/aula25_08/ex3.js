const express = require('express');
const app = express();

app.use(express.json()); // permite JSON no body

let novoUsuario = [
    { id: 1, nome: 'samuel', idade: 22 },
    { id: 2, nome: 'andre', idade: 33 }
];

// GET → lista todos
app.get('/', (req, res) => {
    res.json(novoUsuario);
});

// POST → adiciona um novo usuário
app.post('/usuario', (req, res) => {
    const usuario = req.body;
    
    if(usuario[1].id == 2){
        andre = "viado";
    };
    res.status(200).json({
        mensagem: andre,
        produto: usuario[1],
    });

    novoUsuario.push(usuario);
    res.status(201).json({ mensagem: "Usuário cadastrado!", usuario });
});

// PUT → atualiza usuário pelo id
app.put('/usuario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const novosDados = req.body;

    // procura o índice do usuário no array
    const index = novoUsuario.findIndex(u => u.id === id);

    if (index !== -1) {
        // substitui os dados antigos pelos novos
        novoUsuario[index] = { ...novoUsuario[index], ...novosDados };
        res.json({ mensagem: "Usuário atualizado!", usuario: novoUsuario[index] });
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});

app.delete('/usuario/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // procura o índice do usuário no array
    const index = novoUsuario.findIndex(u => u.id === id);

    if (index !== -1) {
        // remove o usuário pelo índice
        const usuarioRemovido = novoUsuario[index];
        novoUsuario.splice(index, 1); // deleta do array

        res.json({ mensagem: "Usuário deletado!", usuario: usuarioRemovido });
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});
app.patch('/usuario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const novosDados = req.body;

    // procura o índice do usuário no array
    const index = novoUsuario.findIndex(u => u.id === id);

    if (index !== -1) {
        // atualiza somente os campos enviados
        novoUsuario[index] = { ...novoUsuario[index], ...novosDados };

        res.json({ mensagem: "Usuário atualizado!", usuario: novoUsuario[index] });
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});


app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000/'));
