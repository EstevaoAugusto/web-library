import pkg from 'pg';  // Importa o pacote 'pg' como um objeto

// Carregar as variáveis de ambiente do arquivo .env

// Desestruturar a classe Pool do pacote pg
const { Pool } = pkg;

// Criar o pool de conexões
const pool = new Pool({
  user: 'postgres',         // O usuário do banco
  host: 'localhost',         // O host (geralmente localhost)
  database: 'web-library',     // O nome do banco de dados
  password: 'senha', // A senha do banco
  port: '5432',         // A porta do banco de dados (geralmente 5432)
});

// Testando a conexão
pool
  .connect()
  .then(() => console.log('Conectado ao banco de dados PostgreSQL!'))
  .catch((err) => console.error('Erro de conexão ao banco de dados', err));

// Exportando o pool para ser utilizado em outros arquivos
export { pool };
