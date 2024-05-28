import { config } from 'dotenv';
import app from './server';

config({});

const PORT = +(process.env.PORT as string);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
