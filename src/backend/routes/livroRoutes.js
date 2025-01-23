import express from 'express';
import { getLivrosController, getLivroController, createLivroController, updateLivroController, realizaEmprestimoController } from '../controllers/livroController.js';
import { authMiddleware, isAdminMiddleware , isLeitorMiddleware} from '../middlewares/index.js';

const router = express.Router();

// Rota para pegar um livro específico baseado no nome
router.get('/:nome', authMiddleware, getLivroController);

// Rota para pegar todos os livros (somente para leitores logados)
router.get('/', authMiddleware, getLivrosController);

// Rota para criar um livro (somente para administradores)
router.post('/', authMiddleware, isAdminMiddleware, createLivroController);

router.post('/:isbn/emprestimo', authMiddleware, isLeitorMiddleware, realizaEmprestimoController);

// Rota para atualizar um livro (somente para administradores)
router.put('/:isbn', authMiddleware, isAdminMiddleware, updateLivroController);

// Rota para deletar um livro (somente para administradores)
router.delete('/:isbn', authMiddleware, isAdminMiddleware, updateLivroController);

export default router;