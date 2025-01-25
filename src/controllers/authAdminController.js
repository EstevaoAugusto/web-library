import { loginAdminService, registerAdminService } from '../services/authAdminServices.js';

export const loginAdminController = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const token = await loginAdminService(email, senha);
    res.cookie('token', token, { httpOnly: true });
    
    res.redirect('/gerenciamento')
    
  } catch (error) {
    res.status(401).send(error.message);    
  }
};

export const registerAdminController = async (req, res) => {
  const { email, nome, senha } = req.body;
  try {
    await registerAdminService(email, nome, senha);
    res.json({ message: 'Admin registrado com sucesso!' });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
