import { loginAdminService } from '../services/authAdminServices.js';
import { registerAdminService } from '../services/authAdminServices.js';

export const loginAdminController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginAdminService(email, password);
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Admin logado com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const registerAdminController = async (req, res) => {
  const { email, password } = req.body;
  try {
    await registerAdminService(email, password);
    res.json({ message: 'Admin registrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
