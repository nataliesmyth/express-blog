const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/test', (req, res) {
    res.send('test', {

    })
})