import { Router } from 'express';

import userRouters from './user.routes';

const routes = Router();

routes.use('/user', userRouters);

export default routes;