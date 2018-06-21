const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/', (req, res) => {
    res.send('Recebi um POST');
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor:'Leite',
        cobertura:'caramelo',
        frescura: 'uva passa',
        txt: 'Olá!!!'
        
    });
});


app.listen(3000);