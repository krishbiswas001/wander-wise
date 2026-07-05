import { Router } from 'express';
import userRouter from './user.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the wander wise API');
});
router.use('/user', userRouter);

export default router;