import { pool } from '../sql/bd.js';

export const createLivro = async (livro) => {
  let data = null;
  const query = 'INSERT INTO livros VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [livro.isbn, livro.nome, livro.autor, livro.genero];
  try {
    const result = await pool.query(query, values);
    data = result.rows[0];
  } catch(error) {
    console.log(error);
  }
  return data;
};

export const getLivros = async () => {
  let data = null;
  const query = 'SELECT * FROM livros';
  try {
    const result = await pool.query(query);
    data = result.rows;
  } catch(error) {
    console.log(error);
  }
  return data;
};

export const getLivro = async (nome) => {
  let data = null;
  const query = 'SELECT * FROM livros WHERE nome ILIKE $1';
  const values = [`%${nome}%`];
  try {
    const result = await pool.query(query, values);
    data = result.rows;
  } catch(error) {
    console.log(error);
  }
  return data;
};

export const updateLivro = async (livro) => {
  const query = 'UPDATE livros SET nome=$2, autor=$3, genero=$4 WHERE isbn=$1';
  const values = [livro.isbn, livro.nome, livro.autor, livro.genero];
  let data = null;
  try {
    let result = await pool.query(query, values);
    data = result.rows[0];
  } catch(error) {
      console.log(error);
  }
  return data;
};

export const deleteLivro = async (isbn) => {
  const query = 'DELETE FROM Livros WHERE isbn=$1 RETURNING *';
  const values = [isbn];
  let data = null;
  try {
    const result = await pool.query(query, values);
    data = result.rows[0];
  } catch(error) {
      console.log(error);
  }
  return data;
};

export const findLivroByISBN = async (isbn) => {
  const query = 'SELECT * FROM livros WHERE isbn = $1';
  const result = await pool.query(query, [isbn]);
  return result.rows[0];
};

