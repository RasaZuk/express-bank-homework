import express from 'express';
import { clients } from './data/clients.js';

export const bankRouter = express.Router();


bankRouter.get('/', (req, res) => {
    return res.json(data);
});

const bank = [];


bankRouter.post('/account', (req, res) => {
    clients.push(req.body.data);

    return res.json({
        message: (`Sąskaita sėkmingai sukurta ${params.name} ${params.surname} vardu, gimusio ${params.dateOfBirth}`)
    });
});




