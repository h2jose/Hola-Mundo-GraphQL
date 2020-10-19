import express from 'express';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use('*', cors());

app.use(compression());

app.use('/', (req,res) => {
	res.send('Welcome to Express Response end point...');
});

const PORT = 5300;

app.listen(
	{port: PORT},
	() => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}`)
);