import { Router } from 'express';

import userRouters from './user.routes';
import productRouters from './product.routes'
import saleRouters from './sale.routes';
// import { middleware } from '../middlewares/middleware';

const routes = Router();

routes.use('/usuarios', userRouters);
routes.use('/produtos', productRouters);
routes.use('/sales', saleRouters);

export default routes;