const express = require('express');

const app =  express();

//GET pega informação
//POST insere a informação
//PUT altera informação
//DELETE apaga informação

app.get('/', (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3001);
