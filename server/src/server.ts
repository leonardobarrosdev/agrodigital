import 'express-async-errors';
import express from 'express';

import routes from './routes';
import { middleware } from './middlewares/middleware';

const app = express();

app.use(express.json());
app.use(middleware);
app.use(routes);

app.listen(3002, () => {
    console.log('Server actived!')
});
