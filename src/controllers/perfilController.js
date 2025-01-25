import { getPerfilServices, putSenhaServices } from '../services/perfilServices.js';

export const getPerfilController = async (req, res) => {
  try {
    const emailUsuario = req.user.email;
    const adminOuLeitor = req.user.role;
    const perfil = await getPerfilServices(emailUsuario, adminOuLeitor);
    res.json(perfil);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putSenhaController = async (req, res) => {
  try {
    const senhaAntiga = req.body.senhaAntiga;
    const senhaNova = req.body.senhaNova;
    const emailUsuario = req.user.email;
    const adminOuLeitor = req.user.role;
    await putSenhaServices(emailUsuario, senhaAntiga, senhaNova, adminOuLeitor);
    res.status(201).json('Senha alterada com sucesso!');
  } catch (error) {
    res.status(401).json(error.message);
  }
};