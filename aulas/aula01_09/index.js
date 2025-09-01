import express from 'express';
import { read, readFile } from 'fs';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';

app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static(path.join(__dirname)));


app.get('/inicio/filme/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))

});
// app.get('/inicio/filme/:nome', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
//     nome = req.params.nome;
    

// });
let itens = [];
app.post('/inicio/filme/itens', (req, res) => {
  const usuario = req.body;
  itens.push(usuario);
    
  res.status(201).json({
    mensagem: "Usuário cadastrado!",
    itens
  });
});

app.get('/inicio/filme/itens', (req, res) => {
    const tamanho = itens.length ;
  res.json(itens[(tamanho - 1)]); // retorna todos os itens cadastrados
});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});