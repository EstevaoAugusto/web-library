import express from 'express';
import { loginAdminController, registerAdminController } from '../controllers/authAdminController.js';
import { authMiddleware, isAdminMiddleware } from '../middlewares/index.js';

const router = express.Router();

// Rota para login do administrador
router.post('/login', loginAdminController);

// Rota para registro do administrador
router.post('/register', authMiddleware, isAdminMiddleware, registerAdminController);

export default router;
