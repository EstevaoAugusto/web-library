async function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (response.redirected) {
            window.location.href = response.url;  // Manually handle the redirect
        }

        if (!response.ok) {
            // If there's an error, insert the error message
            const errorMessage = await response.text()
            // Get the error message
            const errorContainer = document.getElementById('error-message');
            errorContainer.textContent = errorMessage;
            errorContainer.style.visibility = 'visible';
        }
    } catch (error) {
        // Handle network or other errors
        const errorContainer = document.getElementById('error-message');
        errorContainer.textContent = "Ocorreu um erro inesperado.";
        errorContainer.style.visibility = 'visible';
    }

}