import { getPerfil, putSenha, getSenha } from '../repositories/perfilRepository.js';
import bcrypt from 'bcryptjs';

export const getPerfilServices = async (email, adminOuLeitor) => {
  try {
    return await getPerfil(email, adminOuLeitor);
  } catch(error) {
    console.log(error);
  }
};

export const putSenhaServices = async (email, senhaAntiga, senhaNova, adminOuLeitor) => {
  const { senha } = await getSenha(email, adminOuLeitor);
  const hashedSenhaNova = await bcrypt.hash(senhaNova, 10);
  const senhaCorreta = await bcrypt.compare(senhaAntiga, senha);
  if(!senhaCorreta) {
    throw new Error('Senha antiga incorreta!');
  }
  try {
    return await putSenha(email, hashedSenhaNova, adminOuLeitor);
  } catch(error) {
    console.log(error);
  }
};