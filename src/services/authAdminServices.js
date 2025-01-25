import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findAdminByEmail, createAdmin } from '../repositories/adminRepository.js';
import dotenv from 'dotenv';
dotenv.config();


export const loginAdminService = async (email, senha) => {
  const admin = await findAdminByEmail(email);
  
  if (!admin) {
    throw new Error('Email não encontrado');
  }
  const isSenhaValid = await bcrypt.compare(senha, admin.senha);
  if (!isSenhaValid) {
    throw new Error('Senha incorreta');
  }

  const token = jwt.sign({ email: admin.email, role: 'admin' }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });

  return token;
};

export const registerAdminService = async (email, nome, senha) => {
  const hashedSenha = await bcrypt.hash(senha, 10);
  const admin = await findAdminByEmail(email);

  if (admin) {
    throw new Error('Email já registrado');
  }

  const newAdmin = await createAdmin(email, nome, hashedSenha);
  return newAdmin;
};
