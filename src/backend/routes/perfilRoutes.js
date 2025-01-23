import express from 'express';
import { authMiddleware} from '../middlewares/index.js';
import {getPerfilController, putSenhaController} from '../controllers/perfilController.js';

const router = express.Router();

router.get('/', authMiddleware, getPerfilController);

router.put('/', authMiddleware, putSenhaController);

export default router;