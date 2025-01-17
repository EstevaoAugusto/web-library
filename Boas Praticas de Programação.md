# Boas Práticas de Programação
O arquivo contem uma série de boas práticas de programação a qual os integrantes do projeto devem seguir. As práticas citadas abaixo vem dos princípios do Clean Code.

## 1. Nomes significativos
Os nomes de variáveis, funções e classes devem ser claros e descritivos, de forma que qualquer pessoa consiga entender seu propósito sem precisar analisar o código detalhadamente. O nome deve refletir o que a variável, função ou classe representa ou faz. Evite abreviações vagas ou genéricas, pois elas tornam o código mais difícil de entender.

- Exemplo ruim: int d;
- Exemplo bom: int daysLeft;

## 2. Funções pequenas e focadas
Cada função deve ser responsável por uma única tarefa e fazer isso de forma clara e eficiente. Funções grandes e com múltiplas responsabilidades são difíceis de entender, testar e manter. Se uma função está fazendo muitas coisas, ela deve ser dividida em funções menores e mais focadas.

Exemplo ruim:
```C++
void processOrder(Order order) {
    // Lida com pagamento
    // Atualiza status do pedido
    // Envia email para o cliente
}
```

Exemplo bom:
```C++
void processPayment(Order order) {
    // Lida com pagamento
}

void updateOrderStatus(Order order) {
    // Atualiza status do pedido
}

void sendConfirmationEmail(Order order) {
    // Envia email para o cliente
}
```

Funções pequenas e específicas são mais fáceis de testar, depurar e reutilizar, além de tornar o código mais modular e organizado.

## 3. Evitar Comentários Desnecessários
O código deve ser escrito de maneira que se autoexplique. Comentários devem ser usados apenas quando for necessário esclarecer algo que não é óbvio pelo próprio código. Se há a necessidade de escrever muitos comentários para explicar o que o código faz, provavelmente o código precisa ser reestruturado ou renomeado para ser mais claro. Evite comentários redundantes que apenas descrevem o óbvio e foque em documentar o porquê de uma decisão de implementação quando necessário.

Exemplo Ruim:
```C++
// Incrementa o contador em 1
counter++;  
```

Exemplo Bom:
```C++
counter++;  
```

## 4. Evitar Código Duplicado
O princípio **DRY (Don't Repeat Yourself)** recomenda que você evite duplicar lógica no código. Quando encontrar trechos semelhantes ou idênticos em vários lugares, refatore-os para que o código seja reutilizável. Isso reduz a chance de erros, melhora a manutenção e facilita as futuras alterações.

Exemplo Ruim:
```C++
// Atualiza o status do pedido
updateOrderStatus(order);
// Atualiza o status do pagamento
updatePaymentStatus(payment);
```

Exemplo Bom:
```C++
void updateStatus(Status status, Object entity) {
    // lógica para atualizar status
}
```

Evitar duplicação torna o código mais conciso e fácil de modificar, pois alterações precisam ser feitas apenas uma vez, em vez de várias partes do código.

## 5. Trate Erros de Forma Clara
Exceções e erros devem ser tratados de maneira explícita e com clareza. O código deve ser capaz de identificar, capturar e lidar com falhas sem obscurecer a causa do problema. Usar exceções de forma apropriada ajuda a manter o fluxo de execução claro e permite que o código se recupere ou informe erros de maneira eficaz.

Exemplo Ruim:
```C++
try {
    int result = divide(a, b);
} catch (Exception e) {
    // Ignora erro
}
```

Exemplo Bom:
```C++
if (b == 0) {
    throw new IllegalArgumentException("Divisão por zero");
}
int result = divide(a, b);
```

Ao tratar erros de forma clara, você garante que o código continue robusto e as falhas sejam tratadas corretamente, fornecendo informações úteis para depuração e evitando problemas futuros.

## 6. Simplicidade
Mantenha o código simples. O código simples é mais fácil de entender e modificar. Evite soluções complicadas e desnecessárias.

## 7. Refatoração
Refatore regularmente. À medida que o código cresce e se modifica, é importante refatorá-lo para manter sua clareza, modularidade e eficiência. Refatoração ajuda a remover "gordura" e a melhorar a qualidade do código ao longo do tempo.

## 8. Testes Automatizados
Escreva testes para garantir que seu código funcione conforme esperado e que futuras mudanças não introduzam regressões. O código limpo é mais fácil de testar, e a presença de testes ajuda a garantir que o código seja confiável.

## 9. Modularização
Divida o código em módulos ou classes pequenas e coesas. Isso facilita a compreensão e a manutenção do código, além de permitir reutilização e substituição fácil de partes do sistema.

## 10. Evite Complexidade Desnecessária
Busque sempre simples soluções para problemas simples. A complexidade deve ser introduzida somente quando realmente for necessária para resolver um problema de maneira eficiente ou correta. Códigos excessivamente complicados, com soluções desnecessárias ou difíceis de entender, dificultam a manutenção e aumentam o risco de erros.
