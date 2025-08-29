const http = require('http');
const fs = require('fs');
const path = require('path');
const { monitorEventLoopDelay } = require('perf_hooks');

const server = http.createServer((req, res) => { // cria o server
    let filePath = '';

    if (req.url === '/') {  // ele analisa a url do navegador, se esse essa url cruzar com a dos IFs ele guarda o nome do arquivo na variavel filePath para a funçao dentro de readFile executar depois  
        filePath = path.join(__dirname, 'paginaInicial.html');
    } else if (req.url === '/pag1') {
        filePath = path.join(__dirname, 'pVerde.html');
    } else if (req.url === '/pag2') {
        filePath = path.join(__dirname, 'pVermelha.html');
    } else if (req.url === '/pag3') {
        filePath = path.join(__dirname, 'pAzul.html');
    } else if (req.url === '/pag4') {
        filePath = path.join(__dirname, 'pAmarela.html');
    } else {
        const errorPath = path.join(__dirname, 'erro.html');
        fs.readFile(errorPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>Erro interno no servidor</h1>');
                return;
            }
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        });
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Erro interno no servidor</h1>');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');});