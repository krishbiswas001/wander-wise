import { Router } from 'express';
import userRouter from './user.js';
import authRouter from './auth.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the wander wise API');
});
router.use('/user', userRouter);
router.use('/auth', authRouter);

export default router;