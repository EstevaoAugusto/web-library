import express from 'express';
import { getLivrosController, getLivroController, createLivroController, deleteLivroController, updateLivroController } from '../controllers/livroController.js';
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rota para pegar um livro específico baseado no nome
router.get('/:nome', getLivroController);

// Rota para pegar todos os livros (somente para leitores logados)
router.get('/', getLivrosController);

// Rota para criar um livro (somente para administradores)
router.post('/', authMiddleware, createLivroController);

//router.post('/:isbn/emprestimo', authMiddleware, isLeitorMiddleware, realizaEmprestimoController);

// Rota para atualizar um livro (somente para administradores)
router.put('/:isbn', authMiddleware, updateLivroController);

// Rota para deletar um livro (somente para administradores)
router.delete('/:isbn', authMiddleware, deleteLivroController);

export default router;