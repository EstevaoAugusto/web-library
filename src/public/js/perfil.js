// Define the fetchProfile function that fetches the profile data
async function fetchProfile() {
    try {
      const response = await fetch('/perfil', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include auth token if needed
          'Authorization': `Bearer ${localStorage.getItem('token')}`  // Example: using token from localStorage
        }
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // Update the HTML with the user's name and email
        document.getElementById('nome').textContent = data.nome;
        document.getElementById('email').textContent = data.email;
      } else {
        // Handle errors (e.g., not authenticated)
        alert('Carregar o perfil falhou. Por favor faça login.');
        window.location.href = '/login';  // Redirect to login if not authenticated
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      alert('Something went wrong. Please try again.');
    }
};
  
async function changePassword() {
    const senhaAntiga = document.getElementById('senhaAntiga').value;
    const senhaNova = document.getElementById('senhaNova').value;

    const apiUrl = 'http://localhost:5000/perfil';

    const data = {
        senhaAntiga,
        senhaNova
    };

    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const success = document.getElementById("success-message");
        const error = document.getElementById("error-message");

        const message = (await response.text()).replaceAll('"', '');

        if (response.ok) {
          success.textContent = message;
          success.style.display = 'block';
          error.style.display = 'none';
        } else {
          error.textContent = message;
          error.style.display = 'block';
          success.style.display = 'none';
        }

    } catch (error) {
        console.log('Erro: ', error);
    }
}
