import express from 'express';
import { clients } from './data/clients.js';

const app = express();
const port = 5030;


const bank = [];

const names = Object.values(clients).map(clients => clients.name);

app.get('/', (req, res) => {
    return res.send(`Klientu saskaitos: ${clients.name}`)
});

app.post('/api/account', (req, res) => {

    return res.send(`Sąskaita sėkmingai sukurta ${Jonas.name}`)
});





app.get('*', (req, res) => {
    return res.send('Klaida 404. Puslapis nerastas.');
});


app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});