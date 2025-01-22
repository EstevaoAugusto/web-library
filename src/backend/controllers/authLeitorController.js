import { loginLeitorService } from '../services/authLeitorServices.js';
import { registerLeitorService } from '../services/authLeitorServices.js';

export const loginLeitorController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginLeitorService(email, password);
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Leitor logado com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const registerLeitorController = async (req, res) => {
  const { email, password } = req.body;
  try {
    await registerLeitorService(email, password);
    res.json({ message: 'Leitor registrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
