import { Router } from 'express';
import { collaboratorRoutes } from './collaborator.routes';

const router = Router();

router.use('/collaborator', collaboratorRoutes);

export { router };
