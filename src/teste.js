const url = 'http://localhost:5000/register';
const data = {
  nome: 'Joao Silva',
  email: 'joao@exemplo.com',
  senha: 'senha'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
