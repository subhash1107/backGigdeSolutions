import express from 'express';
import { register, login, returnUser } from '../controllers/authController.js';
import { validateSignup, validateLogin } from '../validators/authValidators.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/me',authMiddleware, returnUser)
router.post('/signup', validateSignup, register);
router.post('/login', validateLogin, login);

export default router;
