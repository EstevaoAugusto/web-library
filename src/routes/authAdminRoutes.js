import express from 'express';
import { loginAdminController, registerAdminController } from '../controllers/authAdminController.js';

const router = express.Router();

// Rota para login do administrador
router.post('/login', loginAdminController);

// Rota para registro do administrador
router.post('/register', registerAdminController);

export default router;
