import express from 'express';
import { bankRouter } from './bankRouter.js';

const app = express();
const port = 5030;

// for parsing application/json
app.use(express.json({
    type: 'application/json',
}));
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/bank', bankRouter);


app.get('*', (req, res) => {
    return res.send('Klaida 404. Puslapis nerastas.');
});


app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});