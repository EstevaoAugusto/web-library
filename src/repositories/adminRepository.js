import { pool } from '../sql/bd.js';  // Supondo que você esteja usando um pool de conexão

export const createAdmin = async (email, nome, passwordHash) => {
  const query = 'INSERT INTO admins (email, nome, senha) VALUES ($1, $2, $3) RETURNING *';
  const values = [email, nome, passwordHash];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findAdminByEmail = async (email) => {
  const query = 'SELECT * FROM admins WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
