import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findLeitorByEmail, createLeitor } from '../repositories/leitorRepository.js';

export const loginLeitorService = async (email, senha) => {
  const leitor = await findLeitorByEmail(email);

  if (!leitor) {
    throw new Error('Leitor não encontrado');
  }

  const isSenhaValid = await bcrypt.compare(senha, leitor.senha);
  if (!isSenhaValid) {
    throw new Error('Senha incorreta');
  }

  const token = jwt.sign({ email: leitor.email, role: 'leitor' }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });

  return token;
};

export const registerLeitorService = async (email, nome, senha) => {
  const hashedSenha = await bcrypt.hash(senha, 10);
  const leitor = await findLeitorByEmail(email);

  if (leitor) {
    throw new Error('Email já registrado');
  }

  const newLeitor = await createLeitor(email, nome, hashedSenha);
  return newLeitor;
};
