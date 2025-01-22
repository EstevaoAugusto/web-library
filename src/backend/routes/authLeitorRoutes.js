import express from 'express';
import { loginLeitorController, registerLeitorController } from '../controllers/authLeitorController.js';

const router = express.Router();

// Rota para login do leitor
router.post('/login', loginLeitorController);

// Rota para registro do leitor
router.post('/register', registerLeitorController);

export default router;
