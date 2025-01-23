import { pool } from '../sql/bd.js';

export const createLivro = async (livro) => {
  let data = null;
  const query = 'INSERT INTO livros VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [livro.isbn, livro.nome, livro.autor, livro.genero, livro.qtdExemplares];
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

export const updateLivro = async (livro, emailAdm) => {
  const query1 = 'UPDATE livros SET nome=$2, autor=$3, genero=$4, qtdExemplares=$5 WHERE isbn=$1';
  const query2 = 'UPDATE admins SET alteracoesFeitas = alteracoesFeitas + 1 WHERE email = $1';
  const query3 = 'INSERT INTO ModificacoesLivros (emailAdmin, isbn) VALUES ($1, $2) RETURNING *';

  const values1 = [livro.isbn, livro.nome, livro.autor, livro.genero, livro.qtdExemplares];
  const values2 = [emailAdm];
  const values3 = [emailAdm, livro.isbn]
  let data = null;
  try {
    
    let result = await pool.query(query1, values1);
    result = await pool.query(query2, values2);
    result = await pool.query(query3, values3);
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

export const emprestaLivro = async (email, isbn) => {
  const query1 = 'UPDATE livros SET qtdExemplares = qtdExemplares - 1 WHERE isbn=$1';
  const query2 = 'UPDATE leitores SET livrosEmprestados = livrosEmprestados + 1 WHERE email = $1';
  const query3 = 'INSERT INTO Emprestimos (emailLeitor, isbn) VALUES ($1, $2) RETURNING *';

  const values1 = [isbn];
  const values2 = [email];
  const values3 = [email, isbn];
  let data = null;
  try { 
    
    let result = await pool.query(query1, values1);
    result = await pool.query(query2, values2);
    result = await pool.query(query3, values3);
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

