import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';

import routes from './routes';
import { middleware } from './middlewares/middleware';

const app = express();

dotenv.config();

app.use(express.json());
app.use(middleware);
app.use(routes);

app.listen(process.env._PORT || 3000, () => {
    console.log('Server actived!')
});
