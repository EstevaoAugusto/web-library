import { pool } from '../sql/bd.js';

export const createLeitor = async (email, nome, passwordHash) => {
  const query = 'INSERT INTO leitores (email, nome, senha) VALUES ($1, $2, $3) RETURNING *';
  const values = [email, nome, passwordHash];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findLeitorByEmail = async (email) => {
  const query = 'SELECT * FROM leitores WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
