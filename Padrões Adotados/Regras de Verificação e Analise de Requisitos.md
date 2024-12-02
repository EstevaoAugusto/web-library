# Verificação/Análise de Requisitos

O documento contêm informações de como os requisitos da **Web Library** devem ser descritos, como tambem regras que precisam ser seguidas para ter consistência, qualidade, falta de ambiguidade e verificação. Os padrões adotados vêm do livro Engenharia de Software Aplicada: Fundamentos de Rogério Magela.

## Definição de Requisitos
  Conjunto de sentenças condicionadas pelos processos e pela política de negócio da empresa que visam a definir as funcionalidades que devem estar presentes em um software.

## Requisitos Funcionais (ou RF)
  **Requisitos** que definem O QUE o software deverá fornecer e seu comportamento durante a interação com o ambiente externo ao software que está sendo produzido.
* Exemplos:
  * RF001 - O usuário deve ser capaz de realizar empréstimo de exemplares disponíveis
  * RF002 - O usuário não deve ser capaz realizar empréstimo caso não haja exemplar disponível
  
## Requisitos Não-Funcionais (ou RNF)
  **Requisitos** que restrigem a forma como os **requisitos funcionais** fornecerão seus servicos e se comportarão durante a execução do software que está sendo produzido.
* Exemplos:
  * RNF001 - O usuário pode realizar o empréstimo de no máximo 5 exemplares.
  * RNF002 - O usuário não deve realizar empréstimo de exemplares de livros que não tenha devolvido.

## Especificação de Requisitos

### Defina somente um requisito por vez

- CORRETO
  - O software DEVE permitir o registro dos clientes da empresa.
  - O software não DEVE permitir o registro de dois cilentes com o mesmo CNPJ.

- INCORRETO
  - O software DEVE permitir o registro dos clientes da empresa E não DEVE permitir o registro de dois clientes com o mesmo CNPJ.

### Evite as palavras

  E, OU, SOMENTE SE, EXCETO, SE NECESSÁRIO, MAS, CONTUDO, ENTRETANTO, USUALMENTE, GERALMENTE, FREQUENTEMENTE, TIPICAMENTE, AMIGÁVEL, VERSÁTIL, FLEXÍVEL, APROXIMADAMENTE, TÃO LOGO QUANTO POSSÍVEL, TALVEZ, PROVAVELMENTE ou palavras que forneçam a mesma idéia que essas.

### Evite frases grandes

- CORRETO
  - O software DEVE permitir o registro dos clientes da empresa.

- INCORRETO
  - O software DEVE permitir o registro dos clientes de nossa estimada empresa.

### Utilize um vocabulário fechado

Ou seja, paralelamente à construção dos requisitos deverá ser criado um glossário de termos. Os termos dos requisitos deverão ser fechados, ou seja, definidos no glossário.

- CORRETO
  - O software DEVE permitir o registro dos clientes da empresa.

- INCORRETO
  - O software DEVE permitir o registro de nossos financiadores.

Nesse caso, cliente estaria no glossário, financiador não.

## Análise de Requisitos

### 1. Especificação: Correta

Um requisito é dito ser correto se ele satisfaz alguma necessidade real do usuário. Baseado nisso, os requisitos especificados devem sempre suprir essas necessidades.

### 2. Especificação: Sem Ambiguidade

Os requisitos deverão possuir apenas uma interpretação. Assim, se um requisito não puder seguir o guia de especificação, poderemos ser obrigados a escrever sentenças maiores em linguagem natural. Essas sentenças geralmente são ambíguas e necessitam de maiores cuidados em sua definição.

**INCORRETO**
O software DEVE notificar a presença de aviões inimigos que tenham uma missão não conhecida ou com potencial para entrar no espaço aéreo restrito dentro de cinco minutos disparando um alerta.

**CORRETO**
O software DEVE notificar a presença de aviões [inimigos] E [que tenham uma missão não conhecida] E [com potencial para entrar no espaço aéreo restrito dentro de cinco minutos] disparando um alerta.

### 3. Especificação: Verificável

Para todo requisito especificado deverá existir um processo finito e de custo exequível que permita verificar se o produto construído o atende.
Cuidado com adjetivos e advérbios. Normalmente não é possível verificar de forma objetiva requisitos especificados com adjetivos/advérbios sem uma quantificação objetiva.

**INCORRETO**
O software DEVE ter uma interface amigável com usuário.

**CORRETO**
O software DEVE seguir o padrão de interface do usuário linux KDE.

### 4. Especificação: Consistente

Um conjunto de requisitos é dito estar inconsistente se pares de requisitos forem logicamente contraditórios ou levarem a resultados diferentes.
O glossário deverá, necessariamente, ser produzido visando a eliminar inconsitência ou redefinição de termos. Por exemplo: Degrau tarifário, Região tarifária ou Área tarifária. Somente um desses termos deverá ser utilizado, ou seja, no glossário somente um deverá ser definido, aquele que será utilizado nos requisitos. Os outros deverão ser remetidos ao primeiro.

EXEMPLO
* O software DEVE enviar um e-mail ao gerente quando um cliente em débito solicitar um pedido.
* O software não DEVE permitir um cliente em débito realize um pedido.

# Referência Bibliográfica

Engenharia De Software Aplicada Fundamentos - Rogério Magela
