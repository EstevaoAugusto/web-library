import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findAdminByEmail, createAdmin } from '../repositories/adminRepository.js';
import dotenv from 'dotenv';
dotenv.config();


export const loginAdminService = async (email, password) => {
  const admin = await findAdminByEmail(email);
  
  if (!admin) {
    throw new Error('Administrador não encontrado');
  }
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    throw new Error('Senha incorreta');
  }

  console.log(process.env.JWT_SECRET_KEY)
  const token = jwt.sign({ id: admin.id, role: 'admin' }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });

  return token;
};

export const registerAdminService = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await findAdminByEmail(email);

  if (admin) {
    throw new Error('Email já registrado');
  }

  const newAdmin = await createAdmin(email, hashedPassword);
  return newAdmin;
};
