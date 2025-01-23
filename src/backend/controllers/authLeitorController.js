import { loginLeitorService } from '../services/authLeitorServices.js';
import { registerLeitorService } from '../services/authLeitorServices.js';

export const loginLeitorController = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const token = await loginLeitorService(email, senha);
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Leitor logado com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const registerLeitorController = async (req, res) => {
  const { email, nome, senha } = req.body;
  try {
    await registerLeitorService(email, nome, senha);
    res.json({ message: 'Leitor registrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
