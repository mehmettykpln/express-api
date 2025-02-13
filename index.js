const express = require('express');
const data = require('./data.js');
const { json } = require('stream/consumers');

const server = express();

server.get('/', (req, res) => {
  res.send('Expresten Merhaba!');
});

server.get('/aktorler', (req, res) => {
  res.status(200).json(data);
});

server.get('/aktorler/:aktor_id', (req, res) => {
  const { aktor_id } = req.params;
  const aktor = data.find((aktor) => aktor.id === parseInt(aktor_id));
  if (aktor) {
    res.status(200).json(aktor);
  } else {
    res.status(404).send('Aradığınız Aktör Bulunamadı!');
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000 adresine gelen istekler dinleniyor...');
});
