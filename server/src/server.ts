import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';

import routes from './routes';
import { middleware } from './middlewares/middleware';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(middleware);
app.use(routes);

app.listen(port, () => {
    console.log('Server actived!')
});
