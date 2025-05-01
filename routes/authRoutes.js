import express from 'express';
import { register, login } from '../controllers/authController.js';
import { validateSignup, validateLogin } from '../validators/authValidators.js';

const router = express.Router();

router.post('/signup', validateSignup, register);
router.post('/login', validateLogin, login);

export default router;
