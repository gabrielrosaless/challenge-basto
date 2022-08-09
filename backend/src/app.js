
import express from 'express';
import config from './config.js';
import cors from 'cors';
import morgan from 'morgan';
import cowsRoutes from './components/animals/cows.routes.js';

const app = express();

//Settings - Set the PORT
app.set('port', config.port);


//Middlewares

app.use(morgan('dev')) //Middleware to see requests info in console
app.use(express.json()); //Middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Routes middlewares
app.use('/api/cows', cowsRoutes);
app.get('/ping', (req, res) => {
    console.log('hola')
    res.send('pong');
})

export default app;