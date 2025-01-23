import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Importando as rotas
import authAdminRoutes from './routes/authAdminRoutes.js';
import authLeitorRoutes from './routes/authLeitorRoutes.js';
import livroRoutes from './routes/livroRoutes.js';
import perfilRoutes from './routes/perfilRoutes.js';

// Configurando o ambiente
dotenv.config();

// Criando a aplicação Express
const app = express();

// Middlewares
app.use(express.json()); // Parseia o corpo das requisições em JSON
app.use(express.urlencoded({ extended: true }));  // Parseia dados de formulário
app.use(cookieParser()); // Para manipular cookies nas requisições

// Definindo as rotas
app.use('/auth/admin', authAdminRoutes);
app.use('/auth/leitor', authLeitorRoutes);
app.use('/livros', livroRoutes);
app.use('/perfil', perfilRoutes)

app.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,   // Evita acesso via JavaScript (segurança contra XSS)
    secure: process.env.NODE_ENV === 'production', // Somente HTTPS (em produção)
    sameSite: 'Strict' // Evita que o cookie seja enviado em requisições cross-site
  });

  res.status(200).json({ message: 'Logout realizado com sucesso!' });
});



// Página inicial para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Inicializando o servidor
app.listen(5000, () => {
  console.log(`Servidor rodando na porta 5000`);
});
