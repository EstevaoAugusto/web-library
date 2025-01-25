import { createLivro, getLivros, getLivro, updateLivro, deleteLivro, findLivroByISBN } from '../repositories/livroRepository.js';

export const createLivroService = async (livro) => {
  const temLivro = await findLivroByISBN(livro.isbn);
  if(temLivro) {
    throw new Error('Livro já está cadastrado');
  }
  try {
    return await createLivro(livro);
  } catch(error) {
    console.log(error);
  }
};

export const getLivrosService = async () => {
  try {
    return await getLivros();
  } catch(error) {
    console.log(error);
  }
};

export const getLivroService = async (nome) => {
  try {
    return await getLivro(nome);
  } catch(error) {
    console.log(error);
  }
};

export const updateLivroService = async (livro) => {
  const temLivro = await findLivroByISBN(livro.isbn);
  if(!temLivro) {
    throw new Error('Livro não encontrado');
  }
  try {
    return await updateLivro(livro);
  } catch(error) {
    console.log(error);
  }
};

export const deleteLivroService = async (isbn) => {
  const temLivro = await findLivroByISBN(isbn);
  if(!temLivro) {
    throw new Error('Livro não encontrado');
  }
  try {
    return await deleteLivro(isbn);
  } catch(error) {
    console.log(error);
  }
};

export const realizaEmprestimoService = async (email, isbn) => {
  const temLivro = await findLivroByISBN(isbn);
  console.log(temLivro)
  if(!temLivro) {
    throw new Error('Livro não encontrado');
  }
  if(temLivro.qtdexemplares <= 0) {
    throw new Error('O livro não possui exemplares disponíveis');
  }
  try {
    return await emprestaLivro(email, isbn);
  } catch(error) {
    console.log(error);
  }
}