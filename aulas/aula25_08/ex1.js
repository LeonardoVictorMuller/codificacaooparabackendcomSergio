const express = require('express');
const app = express();

app.use(express.json())

// app.get('/', (req, res) => {
//     res.json([
//         { id: 1, nome: 'Notebook' },
//         { id: 2, nome: 'Mouse' }
//     ]);
// });

app.get('/usuario/:id/:nome', (req, res) => {
    const id = req.params.id;
    const nome = req.params.nome;
    // res.json({ id , nome });
    res.writeHead(200, { 'Content-Type': 'text/html; charset="utf-8"' });
        res.end(`<h1>O nome é ${nome} e a idade é ${id}</h1>`);
});


app.listen(3000, () => console.log('GET rodando em http://localhost:3000/'));