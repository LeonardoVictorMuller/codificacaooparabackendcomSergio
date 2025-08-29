const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('aulas/aula13_08_Node/index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado!');
            } else {
                res.end(data); // aqui envia o HTML lido
            }
        });
    } 
    else if (req.url === '/lichia') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<img src="/images.jpg"/>');
    } 
    else if (req.url === '/images.jpg') {
        const imgPath = path.join(__dirname, 'images.jpg');
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Imagem não encontrada');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    }
    else if (req.url === '/uva') {
        res.writeHead(200, { 'Content-Type': 'html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
            <img src="/uva.jpg"/>
            </body>
            </html>
            `);
    }
    else if (req.url === '/uva.jpg') {
        const imgPath = path.join(__dirname, 'uva.jpg');
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Imagem não ')
            } else {
                res.writeHead(200, { 'Content-Type': 'uva/jpeg' });
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Qualquer outra coisa</h1>');
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
