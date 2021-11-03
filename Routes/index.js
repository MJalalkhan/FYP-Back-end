import { Router } from 'express';
import authRoutes from './Authentication/index';

const router = Router();

router.use('/auth', authRoutes);


export default router;
