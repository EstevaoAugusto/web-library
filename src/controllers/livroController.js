import { createLivroService, getLivrosService, getLivroService, updateLivroService, deleteLivroService, realizaEmprestimoService } from '../services/livroServices.js';

export const getLivrosController = async (req, res) => {
  try {
    const livros = await getLivrosService();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLivroController = async (req, res) => {
  try {
    const livro = await getLivroService(req.params.nome);
    res.json(livro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLivroController = async (req, res) => {
  const { isbn, nome, autor, genero, qtdExemplares } = req.body;
  try {
    await createLivroService({isbn, nome, autor, genero, qtdExemplares});
    res.status(201).json({ message: 'Livro criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const realizaEmprestimoController = async (req, res) => {
  const emailLeitor = req.user.email;
  const isbn = req.params.isbn;
  try {
    await realizaEmprestimoService(emailLeitor, isbn);
    res.status(201).json({ message: 'Livro emprestado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLivroController = async (req, res) => {
  const { nome, autor, genero } = req.body;
  const isbn = req.params.isbn;
  try {
    await updateLivroService({isbn, nome, autor, genero });
    res.json({ message: 'Livro atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteLivroController = async (req, res) => {
  try {
    const isbn = req.params.isbn;
    await deleteLivroService(isbn);
    res.json({ message: 'Livro atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}