const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json([
        { id: 1, nome: 'Notebook' },
        { id: 2, nome: 'Mouse' }
    ]);
});

app.use(express.json()); // Permite receber JSON no body
app.post('/sobre', (req, res) => {
    const novoProduto = req.body; // Dados enviados pelo cliente
    // res.status(201).json({
    //     mensagem: 'Produto criado com sucesso!',
    //     produto: novoProduto,
    // });
    
    if(novoProduto[1].id == 2){
        andre = "viado";
    };
    res.status(200).json({
        mensagem: andre,
        produto: novoProduto[1],
    });
});


app.listen(3000, () => console.log('GET rodando em http://localhost:3000/'));