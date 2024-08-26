import express from 'express';

const app = express();
const port = 5030;

app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});