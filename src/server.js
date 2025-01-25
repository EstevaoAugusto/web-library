import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import livroRoutes from './routes/livroRoutes.js';
import authAdminRoutes from './routes/authAdminRoutes.js';
import perfilRoutes from './routes/perfilRoutes.js'
import { authMiddleware } from './middlewares/authMiddleware.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Configurando o ambiente
dotenv.config();

// Criando a aplicação Express
const app = express();

// Middlewares
app.use(express.json()); // Parseia o corpo das requisições em JSON
app.use(express.urlencoded({ extended: true }));  // Parseia dados de formulário
app.use(cors());
app.use(cookieParser()); // Para manipular cookies nas requisições

// Definindo as rotas
app.use('/perfil', perfilRoutes);

app.use('/livros', livroRoutes);

app.use('/', authAdminRoutes);

app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

// Optional: Set up a route for 'gerenciamento.html'
app.get('/gerenciamento', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'gerenciamento.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

app.get('/', (req, res) => {
  res.redirect("/login")
});

app.get('/meuperfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'perfil.html'));
});

app.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,   // Evita acesso via JavaScript (segurança contra XSS)
    secure: process.env.NODE_ENV === 'production', // Somente HTTPS (em produção)
    sameSite: 'Strict' // Evita que o cookie seja enviado em requisições cross-site
  });

  res.redirect("/login");
});

// Inicializando o servidor
app.listen(5000, () => {
  console.log(`Servidor rodando na porta 5000`);
});
