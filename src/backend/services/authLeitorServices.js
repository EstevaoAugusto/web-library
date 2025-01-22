import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findLeitorByEmail, createLeitor } from '../repositories/leitorRepository.js';

export const loginLeitorService = async (email, password) => {
  const leitor = await findLeitorByEmail(email);

  if (!leitor) {
    throw new Error('Leitor não encontrado');
  }

  const isPasswordValid = await bcrypt.compare(password, leitor.password);
  if (!isPasswordValid) {
    throw new Error('Senha incorreta');
  }

  console.log(leitor.id)
  const token = jwt.sign({ id: leitor.id, role: 'leitor' }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });

  return token;
};

export const registerLeitorService = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const leitor = await findLeitorByEmail(email);

  if (leitor) {
    throw new Error('Email já registrado');
  }

  const newLeitor = await createLeitor(email, hashedPassword);
  return newLeitor;
};
