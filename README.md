# Contexto do projeto
O repositório contêm o resultado do projeto final da disciplina Engenharia de Software na Universidade Federal de Lavras, onde aplicamos diversos de seus conceitos, métodos, e técnicas. O projeto final é um sistema WEB que possuí Autenticação/Autorização, e CRUD de 1 e 3 tabelas.

## Índice
1. [O que é Web-Library](#o-que-é-web-library)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação](#instalação)
4. [Estrutura do diretório do projeto](#estrutura-do-diretório-do-projeto)
5. [Regras de Uso](#uso)
6. [Integrantes](#integrantes)

## O que é Web-Library
Sistema WEB para gerenciamento de uma biblioteca, projetado para oferecer funcionalidades tanto para leitores quanto para administradores. Usuários cadastrados como leitores poderão explorar um acervo digital, realizar pesquisas de obras por título, além de solicitar empréstimos online de livros. O sistema também permitirá que os leitores acompanhem o status de seus empréstimos, visualizem prazos de devolução e as informações do livro. Já os administradores terão controle total sobre a gestão do conteúdo da biblioteca, incluindo a inserção de novos livros ao catálogo, edição de informações existentes, como descrições, autores ou número de exemplares disponíveis, e a exclusão de obras que não estejam mais disponíveis. Adicionalmente, os administradores poderão monitorar a movimentação dos empréstimos e manter o acervo atualizado.

## Tecnologias Utilizadas

- IDE: [Visual Studio Code v1.95](https://code.visualstudio.com/)
- API Client: [Insomnia v10.2.0](https://insomnia.rest/download)
- HTML5, CSS3 e Javascript(ECMAScript 2024)
- Front-End: [React v18](https://pt-br.react.dev/)
- Servidor de Desenvolvimento: [Vite v6.0.3](https://vite.dev/)
- Back-End: [Express v4.21.1](https://expressjs.com/)
- Banco de Dados: [PostgreSQL v17.0](https://www.postgresql.org/)
- Ambiente de Execução: [Node.js v22.11.0](https://nodejs.org/pt)
- Gerenciador de Pacotes: [Node Package Manager (npm)](https://www.npmjs.com/)

## Instalação

Para instalar o sistema WEB, pode-se clonar o repositório:
```git
git clone git@github.com:EstevaoAugusto/web-library.git
```
Em seguida, ir a pasta "web-library"
```git
cd web-library
```

Ou, [baixar o release mais recente do sistema.]()

## Estrutura do diretório do projeto

```
web-library/
├── backend/                # Diretório para o projeto Express
│   ├── node_modules/       # Módulos do Node.js para o backend
│   ├── src/                # Código-fonte do backend
│   │   ├── routes/         # Arquivos de rotas
│   │   ├── controllers/    # Lógica de controle
│   │   ├── models/         # Modelos de dados (caso use um banco de dados)
│   │   ├── middleware/     # Middlewares personalizados
│   │   └── server.js       # Arquivo principal do servidor
│   ├── .env                # Variáveis de ambiente para o backend
│   ├── package.json        # Dependências e scripts do backend
│   └── package-lock.json   # Versões exatas das dependências
│
├── frontend/               # Diretório para o projeto React
│   ├── node_modules/       # Módulos do Node.js para o frontend
│   ├── public/             # Arquivos públicos do React
│   ├── src/                # Código-fonte do frontend
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/          # Páginas principais da aplicação
│   │   ├── services/       # Comunicação com o backend (API)
│   │   └── App.js          # Componente principal
│   ├── .env                # Variáveis de ambiente para o frontend
│   ├── package.json        # Dependências e scripts do frontend
│   └── package-lock.json   # Versões exatas das dependências
│
├── README.md               # Documentação do projeto
├── .gitignore              # Arquivos e pastas a serem ignorados no Git
├── Padrões Adotados/
├──  └── Regras de Verificação e Analise de Requisitos.md # Arquivo que define como os requisitos devem ser definidos
└── requisitos/
     ├── Documento de Requisitos - Web Library.pdf        # Pdf que descreve os requisitos do projeto
     └── web-library-visoes.asta                          # Diagrama das visões dos usuários que utilizaram o sistema (Leitor e Administrador)
```

## Regras de Uso

### Commits
Cada commit realizado no projeto deve seguir o padrão especificado pelo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), uma convenção que define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação. A mensagem do commit deve ser estruturada da seguinte forma:

```git
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca:
- fix: um commit do tipo fix soluciona um problema na sua base de código.
- feat: um commit do tipo feat inclui um novo recurso na sua base de código.
- BREAKING CHANGE: um commit que contém no rodapé opcional o texto BREAKING CHANGE:, ou contém o símbolo ! depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API. Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.

Os títulos do commit devem ter no máximo 65 caracteres de tamanho e oferecer uma visão clara do que foi feito. Os verbos utilizados devem estar no indicativo, como nos exemplos abaixo:


```
docs: adicionar regras de uso no README.md

Desenvolvedores podem saber quais convenções de commits e branchs são usadas.
```

```
feat!: envia email para o cliente quando o produto é enviado
```

Descrições podem ser maiores que o título, desde que acrescentem com contexto e ofereçam uma visão geral. Um exemplo de descrição se encontra abaixo:

O Conventional Commits tambem permite que tipos adicionais sejam adicionados, o próprio website cita [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint) com os tipos build, chore, ci, docs, style, refactor, entre outros. Seguindo essa recomendação, qualquer commit deve ter um tipo que esteja em algumas das duas conveções. 

O significado desses tipos se encontra abaixo:

- build: Relacionado a mudanças que afetam o sistema de build ou dependências externas (ex.: configurações do Maven, Gradle, npm).
- chore: Mudanças que não alteram a lógica de produção ou testes (ex.: atualizações de dependências, ajustes em configurações).
- ci: Alterações nos arquivos e scripts de integração contínua (ex.: configurações do GitHub Actions, Jenkins).
- docs: Atualizações na documentação (ex.: README, comentários no código).
- perf: Melhorias de desempenho (ex.: otimizações de código).
- refactor: Mudanças no código que não corrigem bugs nem adicionam funcionalidades (ex.: renomeação de variáveis, reestruturação de métodos).
- revert: Reversão de um commit anterior.
- style: Alterações que afetam a formatação do código, mas não a lógica (ex.: espaçamento, identação, remoção de espaços em branco).
- test: Adição ou modificação de testes (ex.: criação de casos de teste, ajustes em testes unitários).

### Branches

Ao criar uma branch, ela deve seguir as seguintes regras:

- Fazer uso de títulos com letras minúsculas e separados por traço, por exemplo: feature/new-login, bugfix/database-connection, entre outros.
- Usar caracteres alfanúmericos (a-z, A-Z, 0-9) e evitar pontuação, espaço, e outros caracteres não-alfanúmericos.
- Sem uso contínuo de traços, por exemplo: feature--new-login. Para evitar confusão.
- Não deixar que títulos terminem com traços, como bugfix/database-connection-
- Ter titulos descritivos e concisos que refletem o trabalho feito na branch.

Além dessas, para facilitar a identificação de uma branch e seu propósito, elas sempre devem possuir um prefixo, esses sendo:

- Branch de Feature: Branches usadas para o desenvolvimento de novas features. Possuem o prefixo "feat/", como "feature/login-system".
- Branch de Bugfix: Branches usadas para a correção de bugs no código. Possuem o prefixo "bugfix/", como "bugfix/header-styling".
- Branch de Hotfix: Branches originadas diretamente da branch de produção para consertar falhas críticas. Possuem o prefixo "hotfix/", como "hotfix/critical-security-issue".
- Branch de Release: Branches usadas para preparar o proximo release do sistema. Possuem o prefixo "release/".
- Branch de Documentation: Branches usadas para escrever, modificar ou consertar documentação, utiliza-se o prefixo "docs/".

Por padrão, devem existir duas branchs:

- main: Branch principal do sistema.
- develop: Branch de desenvolvimento do sistema.

## Integrantes

- Estevão Augusto da Fonseca Santos
- Felipe Geraldo de Oliveira
- Eduardo Cesar Cauduro de Coelho
