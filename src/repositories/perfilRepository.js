import { pool } from '../sql/bd.js';

export const getPerfil = async (email, adminOuLeitor) => {
    let data = null;
    let query = null;
    if(adminOuLeitor === 'leitor') {
        query = 'SELECT nome, email FROM leitores WHERE email=$1';
    }
    else {
        query = 'SELECT nome, email FROM admins WHERE email=$1';
    }
    const values = [ email ];
    try {
      const result = await pool.query(query, values);
      data = result.rows[0];
    } catch(error) {
      console.log(error);
    }
    return data;
};

export const putSenha = async (email, senha, adminOuLeitor) => {
    let data = null;
    let query = null;
    if(adminOuLeitor === 'leitor') {
        query = 'UPDATE leitores SET senha=$2 WHERE email=$1';
    }
    else {
        query = 'UPDATE admins SET senha=$2 WHERE email=$1';
    }
    const values = [email, senha];
    try {
      const result = await pool.query(query, values);
      data = result.rows[0];
    } catch(error) {
      console.log(error);
    }
    return data;
};

export const getSenha = async (email,  adminOuLeitor) => {
    let data = null;
    let query = null;
    if(adminOuLeitor === 'leitor') {
        query = 'SELECT senha FROM leitores WHERE email=$1';
    }
    else {
        query = 'SELECT senha FROM admins WHERE email=$1';
    }
    const values = [email];
    try {
      const result = await pool.query(query, values);
      data = result.rows[0];
    } catch(error) {
      console.log(error);
    }
    return data;
};

