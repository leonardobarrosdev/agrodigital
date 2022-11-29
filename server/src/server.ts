import 'express-async-errors';
import express from 'express';

import routes from './routes';
import { userMiddleware } from './middlewares/userMiddleware';

const app = express();

app.use(express.json());
app.use(routes);
app.use(userMiddleware);

app.listen(3001, () => {
    console.log('I am to here on mode turbe')
});
