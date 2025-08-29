const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('aulas/aula_18_08/index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado!');
            } else {
                res.end(data); // aqui envia o HTML lido
            }
        });
    }
    else if (req.url === '/sobre') {
        fs.readFile('aulas/aula_18_08/sobre.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado!');
            }else {
                res.end(data);
            }
        });
    }
    else if (req.url === '/bonito') {
        fs.readFile('aulas/aula_18_08/bonito.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado!');
            }else {
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>Qualquer outra coisa</h1>
            <a href = "http://localhost:3000/">Voltar</a>
        `);
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
