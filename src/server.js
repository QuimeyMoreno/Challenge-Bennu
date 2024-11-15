import express from 'express';
import connectDB from './config/config.js';
import userRouter from './routes/users.router.js'
import cors from 'cors'

const app = express();
const PORT = 8080;

connectDB();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Bennu Challenge' });
});

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log('Escuchando en el puerto: ', PORT);
});
