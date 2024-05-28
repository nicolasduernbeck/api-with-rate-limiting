import express from 'express';
import morgan from 'morgan';

import userRoute from './routes/userRoute';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoute);

export default app;
